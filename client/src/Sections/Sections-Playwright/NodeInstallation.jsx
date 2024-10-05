import React from 'react';
import './NodeInstallation.css';

const NodeInstallation = () => {
  return (
    <div className="NodeInstallation">
      <h1>Node.js Installation Steps</h1>
      <p>
        Node.js is a server-side JavaScript environment that is fast and free. It is quite useful as it is based on the V8 engine developed by Chrome and is intended to develop network applications, APIs, and more. This article describes how to install Node.js on various operating systems, check the installation, and create a Node.js development environment.
      </p>

      <h2>Prerequisites</h2>
      <p>Before proceeding with the installation of Node.js, please check the following system requirements:</p>
      <ul>
        <li><strong>Operating System:</strong> Windows 7 upwards, macOS 10.12 upwards, or any modern version of Linux.</li>
        <li><strong>Administrator Privileges:</strong> Required for installing any program onto the system.</li>
        <li><strong>Internet:</strong> A stable internet connection is required for downloading Node.js.</li>
      </ul>

      <h2>How to Go About the Installation</h2>
      <p>There are a variety of procedures to install Node.js that depend on the user interface operating system. The two basic methods are:</p>
      <ol>
        <li>Using the Official Installer downloaded from the official site.</li>
        <li>Using Node Version Manager (nvm).</li>
      </ol>

      <h3>Using the Official Installer Downloaded from the Official Site</h3>

      <h4>Windows</h4>
      <ol>
        <li><strong>Download the Installer:</strong>
          <ul>
            <li>Download the Windows Installer (.msi) for the LTS (Long Term Support) version from the official Node.js download page.</li>
          </ul>
        </li>
        <li><strong>Run the Installer:</strong>
          <ul>
            <li>Double-click the downloaded .msi file.</li>
            <li>Follow the on-screen instructions:</li>
            <li>License Agreement: Accept the terms.</li>
            <li>Destination Folder: Choose the installation path or use the default.</li>
            <li>Custom Setup: Select components to install (default options are usually sufficient).</li>
            <li>Install: Proceed with the installation.</li>
          </ul>
        </li>
        <li><strong>Complete Installation:</strong>
          <ul>
            <li>Click Finish once the installation is complete.</li>
            <li>The installer may prompt you to install additional tools (like Chocolatey). You can choose to install them or skip them.</li>
          </ul>
        </li>
        <li><strong>Verify Installation:</strong>
          <ul>
            <li>Open Command Prompt or PowerShell.</li>
            <li>Run the following commands:</li>
            <pre><code>{`node -v\nnpm -v`}</code></pre>
            <li>You should see the version numbers of Node.js and npm displayed.</li>
          </ul>
        </li>
      </ol>

      <h4>macOS</h4>
      <ol>
        <li><strong>Download the Installer:</strong>
          <ul>
            <li>Download the macOS Installer (.pkg) for the LTS version from the Node.js official download page.</li>
          </ul>
        </li>
        <li><strong>Run the Installer:</strong>
          <ul>
            <li>Open the downloaded .pkg file.</li>
            <li>Follow the installation wizard:</li>
          </ul>
        </li>
        <li><strong>Verify Installation:</strong>
          <ul>
            <li>Open Terminal.</li>
            <li>Run the following commands:</li>
            <pre><code>{`node -v\nnpm -v`}</code></pre>
            <li>The terminal should display the versions of Node.js and npm.</li>
          </ul>
        </li>
      </ol>

      <h4>Linux</h4>
      <p>The installation process varies slightly depending on your Linux distribution. Below are instructions for Debian-based (like Ubuntu) and Red Hat-based (like Fedora) systems.</p>
      <h5>Debian-based (Ubuntu, etc.)</h5>
      <ol>
        <li>Update Package Index:
          <pre><code>{`sudo apt update`}</code></pre>
        </li>
        <li>Install Node.js and npm:
          <ul>
            <li>Option 1: Using apt (May not have the latest version)
              <pre><code>{`sudo apt install nodejs npm`}</code></pre>
            </li>
            <li>Option 2: Using the NodeSource Repository (Recommended for Latest Versions)
              <pre><code>{`curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\nsudo apt-get install -y nodejs`}</code></pre>
            </li>
          </ul>
        </li>
        <li>Verify Installation:
          <pre><code>{`node -v\nnpm -v`}</code></pre>
        </li>
      </ol>

      <h5>Red Hat-based (Fedora, CentOS, etc.)</h5>
      <ol>
        <li>Add NodeSource Repository:
          <pre><code>{`curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -`}</code></pre>
        </li>
        <li>Install Node.js and npm:
          <pre><code>{`sudo dnf install -y nodejs`}</code></pre>
        </li>
        <li>Verify Installation:
          <pre><code>{`node -v\nnpm -v`}</code></pre>
        </li>
      </ol>

      <h3>Using Node Version Manager (nvm)</h3>
      <p>Node Version Manager (nvm) allows you to install and manage multiple Node.js versions on the same machine.</p>
      <h4>Benefits of Using nvm</h4>
      <ul>
        <li>Multiple Versions: Easily install and switch between different Node.js versions.</li>
        <li>Per-Project Versions: Assign specific Node.js versions to individual projects.</li>
        <li>Simplified Upgrades: Upgrade Node.js without affecting other projects.</li>
      </ul>
      
      <h4>Installation Steps (macOS and Linux)</h4>
      <ol>
        <li>Install nvm:
          <pre><code>{`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`}</code></pre>
        </li>
        <li>Load nvm into Your Shell Session:
          <pre><code>{`export NVM_DIR="$([ -z "${`XDG_CONFIG_HOME`}" ] && printf %s "${`HOME`}/.nvm" || printf %s "${`XDG_CONFIG_HOME`}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`}</code></pre>
        </li>
        <li>Verify nvm Installation:
          <pre><code>{`nvm --version`}</code></pre>
        </li>
        <li>Install Node.js Using nvm:
          <ul>
            <li>Install the Latest LTS Version:
              <pre><code>{`nvm install --lts`}</code></pre>
            </li>
            <li>Install a Specific Version (e.g., v18.16.0):
              <pre><code>{`nvm install 18.16.0`}</code></pre>
            </li>
          </ul>
        </li>
        <li>Set a Default Node.js Version:
          <pre><code>{`nvm use 18.16.0\nnvm alias default 18.16.0`}</code></pre>
        </li>
        <li>Verify Node.js and npm Installation:
          <pre><code>{`node -v\nnpm -v`}</code></pre>
        </li>
      </ol>

      <h4>Installation Steps (Windows)</h4>
      <ol>
        <li>Download nvm-windows: Visit the nvm-windows GitHub repository and download the latest nvm-setup.zip.</li>
        <li>Install nvm-windows:
          <ul>
            <li>Extract the .zip file and run nvm-setup.exe.</li>
            <li>Follow the installation wizard.</li>
          </ul>
        </li>
        <li>Verify nvm Installation:
          <pre><code>{`nvm version`}</code></pre>
        </li>
        <li>Install Node.js Using nvm-windows:
          <ul>
            <li>List Available Node.js Versions:
              <pre><code>{`nvm list available`}</code></pre>
            </li>
            <li>Install a Specific Version (e.g., v18.16.0):
              <pre><code>{`nvm install 18.16.0`}</code></pre>
            </li>
            <li>Use a Node.js Version:
              <pre><code>{`nvm use 18.16.0`}</code></pre>
            </li>
          </ul>
        </li>
        <li>Verify Node.js and npm Installation:
          <pre><code>{`node -v\nnpm -v`}</code></pre>
        </li>
      </ol>

      <h3>Verifying the Installation</h3>
      <p>After installing Node.js, it's essential to verify that the installation was successful.</p>
      <ol>
        <li>Check Node.js Version:
          <pre><code>{`node -v`}</code></pre>
        </li>
        <li>Check npm Version:
          <pre><code>{`npm -v`}</code></pre>
        </li>
        <li>Run a Simple Node.js Script:
          <pre><code>{`console.log("Node.js is installed correctly!");`}</code></pre>
        </li>
      </ol>

      <h3>Post-Installation: Setting Up Your Development Environment</h3>
      <ol>
        <li>Install a Code Editor: Visual Studio Code (VS Code).</li>
        <li>Initialize a New Node.js Project:
          <pre><code>{`mkdir my-node-app\ncd my-node-app\nnpm init`}</code></pre>
        </li>
        <li>Install Essential npm Packages:
          <pre><code>{`npm install express`}</code></pre>
        </li>
        <li>Create a Basic Server in app.js:
          <pre><code>{`const express = require('express');\nconst app = express();\nconst port = 3000;\napp.get('/', (req, res) => {\n  res.send('Hello, Node.js!');\n});\napp.listen(port, () => {\n  console.log(\`Server is running at http://localhost:\${port}\`);\n});`}</code></pre>
        </li>
      </ol>

      <h3>Troubleshooting Common Issues</h3>
      <p>1. Node or npm Commands Not Found:</p>
      <p>2. Permission Issues When Installing Packages Globally:</p>
      <p>3. Incompatible Node.js Version:</p>
      <p>4. Network Issues During Installation:</p>

      <h3>Additional Resources</h3>
      <ul>
        <li>Official Node.js Documentation: <a href="https://nodejs.org/en/docs/">Node.js Docs</a></li>
        <li>nvm GitHub Repository: <a href="https://github.com/nvm-sh/nvm">nvm</a></li>
        <li>npm Documentation: <a href="https://docs.npmjs.com/">npm Docs</a></li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Installing Node.js is the first step toward developing powerful server-side applications using JavaScript. This guide provides the necessary steps to get you up and running, whether you choose the straightforward official installer or the flexible Node Version Manager (nvm). After installation, setting up a development environment will pave the way for efficient and effective development.
      </p>
    </div>
  );
};

export default NodeInstallation;
