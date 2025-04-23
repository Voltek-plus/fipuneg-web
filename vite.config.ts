import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase' // Esto permite usar guiones en CSS pero camelCase en JS
    }
  },
  build: {
    outDir: 'dist', // Asegúrate que coincide con la configuración de Netlify
    emptyOutDir: true
  },
  base: './' //
})
