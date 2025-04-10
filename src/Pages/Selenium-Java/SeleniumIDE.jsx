import React, { useState } from 'react';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
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
  

  return (
    <div className="ide-container">
      <div className="editor-container">
        <div className="editor-header">
          <h2>Java Selenium IDE</h2>
          <div className="window-controls">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
        </div>
        
        {/* Editable Code Area */}
        <div className="code-editor">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-input"
            spellCheck="false"
          />
          <div className="code-highlight">
            <SyntaxHighlighter
              language="java"
              style={atomDark}
              wrapLines={true}
              showLineNumbers={true}
              lineNumberStyle={{ color: '#6c6c6c' }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      
      <div className="output-container">
        <div className="output-header">
          <h3>Execution Output</h3>
        </div>
        <pre className="output-content">
          {output || 'Output will appear here...'}
        </pre>
      </div>
      
      <motion.button
        className="execute-button"
        onClick={executeCode}
        disabled={isExecuting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isExecuting ? 'Executing...' : 'Run Code'}
      </motion.button>
    </div>
  );
}