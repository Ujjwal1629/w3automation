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
    <div className="ide-container">
      <div className="editor-panel">
        <div className="editor-header">
          <h2>Java Selenium IDE</h2>
          <div className="window-controls">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
        </div>
        
        <div className="monaco-container">
          <Editor
            height="100%"
            defaultLanguage="java"
            value={code}
            onChange={(value) => setCode(value || '')}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: 'on',
              automaticLayout: true,
              scrollBeyondLastLine: false,
              renderWhitespace: 'selection',
              tabSize: 2,
            }}
            theme="vs-dark"
          />
        </div>
      </div>
      
      <div className="output-panel">
        <div className="output-header">
          <h3>Execution Output</h3>
          <button 
            className="clear-button"
            onClick={() => setOutput('')}
          >
            Clear
          </button>
        </div>
        <pre 
          ref={outputRef}
          className={`output-content ${output.startsWith('Error:') ? 'error' : ''}`}
        >
          {output || 'Output will appear here...'}
        </pre>
      </div>
      
      <div className="action-bar">
        <motion.button
          className="execute-button"
          onClick={executeCode}
          disabled={isExecuting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isExecuting ? (
            <>
              <span className="spinner"></span>
              Executing...
            </>
          ) : (
            'Run Code (Ctrl+Enter)'
          )}
        </motion.button>
      </div>
    </div>
  );
}