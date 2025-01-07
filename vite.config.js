import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './',  // Ensure Vite points to the root of the project
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for production build
  },
})
