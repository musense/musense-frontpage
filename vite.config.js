import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssImport from "postcss-import"
import postcssCacheBuster from 'postcss-cachebuster'
import autoprefixer from 'autoprefixer'
import path from 'path'

function _resolve(dir) {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  server: {
    port: 3000
  },
  css: {
    postcss: {
      plugins: [
        postcssImport,
        autoprefixer,
        postcssCacheBuster,
      ]
    }
  },
  plugins: [
    react(),

  ],
  base: "./",
  esbuild: {
    // pure: ['console.log'],
    minify: true
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return id
        //       .toString()
        //       .split('node_modules/')[1]
        //       .split('/')[0]
        //       .toString()
        //   }
        // }
      }
    }
  }
})
