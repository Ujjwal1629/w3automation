import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import './SeleniumIDE.css';

const DEFAULT_CODE = `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Main {
  public static void main(String[] args) {
    ChromeOptions options = new ChromeOptions();
    options.addArguments("--headless");
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");
    options.addArguments("--disable-gpu");
    
    WebDriver driver = new ChromeDriver(options);
    driver.get("https://x.com");
    System.out.println("Page Title: " + driver.getTitle());
    driver.quit();
  }
}`;

export default function SeleniumIDE() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [progress, setProgress] = useState(0);
  const textareaRef = useRef(null);
  const outputRef = useRef(null);
  const editorRef = useRef(null);
  const [sampleApp, setSampleApp] = useState({
    username: '',
    password: '',
    submitted: false
  });
  
  const [appState, setAppState] = useState('ready'); // 'ready' or 'modified'
  
  const updateSampleApp = (field, value) => {
    setSampleApp(prev => ({...prev, [field]: value}));
    setAppState('modified');
  };
  
  const handleSampleAppSubmit = () => {
    setSampleApp(prev => ({...prev, submitted: true}));
    setAppState('modified');
  };
  
  const resetSampleAppForm = () => {
    setSampleApp({
      username: '',
      password: '',
      submitted: false
    });
    setAppState('ready');
  };
  
  const resetSampleApp = () => {
    resetSampleAppForm();
    // Add any additional reset logic here
  };

  // Auto-scroll output to bottom
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    // Add Java language support
    monaco.languages.register({ id: 'java' });
    monaco.languages.setMonarchTokensProvider('java', {
      defaultToken: '',
      tokenPostfix: '.java',
      keywords: [
        'abstract', 'continue', 'for', 'new', 'switch', 'assert', 'default',
        'if', 'package', 'synchronized', 'boolean', 'do', 'goto', 'private',
        'this', 'break', 'double', 'implements', 'protected', 'throw', 'byte',
        'else', 'import', 'public', 'throws', 'case', 'enum', 'instanceof',
        'return', 'transient', 'catch', 'extends', 'int', 'short', 'try',
        'char', 'final', 'interface', 'static', 'void', 'class', 'finally',
        'long', 'strictfp', 'volatile', 'const', 'float', 'native', 'super', 'while'
      ],
      typeKeywords: ['var'],
      operators: [
        '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
        '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
        '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
        '%=', '<<=', '>>=', '>>>='
      ],
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
      tokenizer: {
        root: [
          [/[a-zA-Z_$][\w$]*/, {
            cases: {
              '@keywords': 'keyword',
              '@default': 'identifier'
            }
          }],
          { include: '@whitespace' },
          [/[{}()\[\]]/, '@brackets'],
          [/[<>](?!@symbols)/, '@brackets'],
          [/@symbols/, {
            cases: {
              '@operators': 'operator',
              '@default': ''
            }
          }],
          [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
          [/0[xX][0-9a-fA-F]+/, 'number.hex'],
          [/\d+/, 'number'],
          [/[;,.]/, 'delimiter'],
          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/"/, 'string', '@string'],
          [/'[^\\']'/, 'string'],
          [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
          [/'/, 'string.invalid']
        ],
        whitespace: [
          [/[ \t\r\n]+/, 'white'],
          [/\/\*/, 'comment', '@comment'],
          [/\/\/.*$/, 'comment']
        ],
        comment: [
          [/[^\/*]+/, 'comment'],
          [/\/\*/, 'comment.invalid'],
          [/\*\//, 'comment', '@pop'],
          [/[\/*]/, 'comment']
        ],
        string: [
          [/[^\\"]+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/"/, 'string', '@pop']
        ]
      }
    });
  };

  const executeCode = async () => {
    setIsExecuting(true);
    setOutput('');
    setIsSuccess(null);
    setProgress(0);
  
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 90));
    }, 300);
  
    try {
      const response = await axios.post(
        'https://1ba06556-56ee-4abd-8c26-172575325fb8-00-32q9epzfqjatn.pike.replit.dev/api/run',
        JSON.stringify({ code }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          maxBodyLength: Infinity, // for large payloads
        }
      );
  
      clearInterval(interval);
      setProgress(100);
      setIsSuccess(response.data.success ?? true); // Fallback to true if undefined
      setOutput(response.data.output || 'No output returned.');
    } catch (error) {
      clearInterval(interval);
      setProgress(100);
      setIsSuccess(false);
      setOutput(
        error.response?.data?.output || error.message || 'Failed to execute code'
      );
    } finally {
      setIsExecuting(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newCode = code.substring(0, selectionStart) + '  ' + code.substring(selectionEnd);
      setCode(newCode);
      setTimeout(() => {
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = selectionStart + 2;
      }, 0);
    }
  };

  return (
    <div className="selenium-ide-container">
      {/* Top Header - Fixed */}
      <header className="selenium-ide-header">
        <h2 className="selenium-ide-title">Java Selenium IDE</h2>
        <div className="selenium-ide-header-controls">
          <motion.button
            className="selenium-ide-execute-button"
            onClick={executeCode}
            disabled={isExecuting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExecuting ? (
              <>
                <span className="selenium-ide-spinner"></span>
                Executing...
              </>
            ) : (
              'Run (Ctrl+Enter)'
            )}
          </motion.button>
          <div className="selenium-ide-window-controls">
            <span className="selenium-ide-dot selenium-ide-dot-red"></span>
            <span className="selenium-ide-dot selenium-ide-dot-yellow"></span>
            <span className="selenium-ide-dot selenium-ide-dot-green"></span>
          </div>
        </div>
      </header>
  
      {/* Scrollable Content Area */}
      <main className="selenium-ide-content-area">
        {/* Sample App Section */}
        <section className="selenium-ide-sample-app-section">
          <div className="selenium-ide-section-header">
            <h3 className="selenium-ide-section-title">Web Elements to Automate</h3>
            <button 
              className="selenium-ide-reset-button"
              onClick={resetSampleApp}
            >
              Reset All Elements
            </button>
          </div>
          
          <div className="selenium-ide-sample-app-grid">
            {/* Login Form */}
            <div className="selenium-ide-sample-form selenium-ide-card">
              <h4 className="selenium-ide-form-title">Login Form</h4>
              <div className="selenium-ide-form-group">
                <label htmlFor="selenium-ide-username-field" className="selenium-ide-form-label">Username:</label>
                <input 
                  type="text" 
                  id="selenium-ide-username-field"
                  className="selenium-ide-form-input"
                  value="testuser"
                  onChange={(e) => updateSampleData('username', e.target.value)}
                  placeholder="testuser"
                />
              </div>
              <div className="selenium-ide-form-group">
                <label htmlFor="selenium-ide-password-field" className="selenium-ide-form-label">Password:</label>
                <input 
                  type="password" 
                  id="selenium-ide-password-field"
                  className="selenium-ide-form-input"
                  value="password"
                  onChange={(e) => updateSampleData('password', e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              <div className="selenium-ide-button-group">
                <button id="selenium-ide-login-btn" className="selenium-ide-btn selenium-ide-btn-primary">
                  Login
                </button>
                <button id="selenium-ide-clear-btn" className="selenium-ide-btn selenium-ide-btn-secondary">
                  Clear
                </button>
              </div>
            </div>
  
            {/* Interactive Elements */}
            <div className="selenium-ide-action-elements selenium-ide-card">
              <h4 className="selenium-ide-elements-title">UI Components</h4>
              <div className="selenium-ide-elements-grid">
                <button id="selenium-ide-action-btn-1" className="selenium-ide-btn">
                  Click Me
                </button>
                <div className="selenium-ide-checkbox-group">
                  <input type="checkbox" id="selenium-ide-terms-checkbox" className="selenium-ide-checkbox" />
                  <label htmlFor="selenium-ide-terms-checkbox" className="selenium-ide-checkbox-label">Accept Terms</label>
                </div>
                <div className="selenium-ide-form-group">
                  <label htmlFor="selenium-ide-dropdown-menu" className="selenium-ide-form-label">Dropdown:</label>
                  <select id="selenium-ide-dropdown-menu" className="selenium-ide-dropdown">
                    <option value="">Select an option</option>
                    <option value="opt1">Option 1</option>
                    <option value="opt2">Option 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Editor + Output Section */}
        <section className="selenium-ide-editor-output-section">
          <div className="selenium-ide-editor-panel selenium-ide-card">
            <div className="selenium-ide-panel-header">
              <h3 className="selenium-ide-panel-title">Selenium Code Editor</h3>
            </div>
            <div className="selenium-ide-editor-wrapper">
              <Editor
                height="100%"
                defaultLanguage="java"
                value={code}
                onChange={setCode}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  automaticLayout: true,
                  scrollBeyondLastLine: false
                }}
                theme="vs-dark"
              />
            </div>
          </div>
  
          <div className="selenium-ide-output-panel selenium-ide-card">
            <div className="selenium-ide-panel-header">
              <h3 className="selenium-ide-panel-title">Execution Output</h3>
              <button 
                className="selenium-ide-clear-btn"
              >
                Clear
              </button>
            </div>
            <pre className={`selenium-ide-output-content ${output.includes('ERROR') ? 'selenium-ide-error' : ''}`}>
              {output || 'Ready for execution...'}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}