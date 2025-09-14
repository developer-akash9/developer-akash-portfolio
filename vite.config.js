import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Further increase chunk size warning limit (in kB)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Group three.js related dependencies
          if (id.includes('three') || id.includes('@react-three')) {
            return 'three';
          }
          // Group framer-motion
          if (id.includes('framer-motion')) {
            return 'framer';
          }
          // Group react related
          if (id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'react-vendor';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    minify: 'terser',
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'three', '@react-three/fiber', '@react-three/drei', 'framer-motion']
  }
})
