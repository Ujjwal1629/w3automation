import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './',  // Ensure Vite points to the root of the project
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for production build
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: 5176,
    strictPort: true,
    proxy: {
        '^/api/': {
            target: 'https://restful-booker.herokuapp.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            configure: (proxy, _options) => {
                proxy.on('proxyReq', (proxyReq, req, _res) => {
                    const token = req.headers['x-auth-token'];
                    if (token) {
                        proxyReq.setHeader('Cookie', `token=${token}`);
                    }
                });
            }
        }
    }
  },
  preview: {
    port: 5176,
    strictPort: true,
  },
})
