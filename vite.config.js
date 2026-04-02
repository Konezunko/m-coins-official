import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/m-coins-official/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'framer': path.resolve(__dirname, './src/framer.js')
    }
  }
})
