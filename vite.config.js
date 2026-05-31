import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/wp-content/themes/educacion-primaria/dist/',
  build: {
    outDir: '../wp-content/themes/educacion-primaria/dist',
    emptyOutDir: true,
  }
}))