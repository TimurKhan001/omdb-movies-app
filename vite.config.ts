import react from '@vitejs/plugin-react'
import Svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react(), Svgr()],
  server: {
    host: true,
    port: 3000,
  },
})
