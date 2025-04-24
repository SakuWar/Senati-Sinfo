import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Senati-Sinfo/", // Ej: "/mi-proyecto/"
  plugins: [react()],
})
