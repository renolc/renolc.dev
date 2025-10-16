import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Set the base path for GitHub Pages
  build: {
    outDir: 'dist' // Output directory for the static bundle
  }
})
