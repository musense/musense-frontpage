// vite.config.js
import { defineConfig } from "file:///C:/Users/user/Documents/musense-frontpage/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/user/Documents/musense-frontpage/node_modules/@vitejs/plugin-react-swc/index.mjs";
import postcssImport from "file:///C:/Users/user/Documents/musense-frontpage/node_modules/postcss-import/index.js";
import autoprefixer from "file:///C:/Users/user/Documents/musense-frontpage/node_modules/autoprefixer/lib/autoprefixer.js";
import copyAssets from "file:///C:/Users/user/Documents/musense-frontpage/node_modules/postcss-copy-assets/index.js";
var vite_config_default = defineConfig({
  server: {
    port: 3e3
  },
  css: {
    postcss: {
      plugins: [
        postcssImport,
        autoprefixer
      ]
    }
  },
  plugins: [
    react()
  ],
  base: "./",
  esbuild: {
    // pure: ['console.log'],
    minify: true
  },
  build: {
    chunkSizeWarningLimit: 1e3,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
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
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvY3VtZW50c1xcXFxtdXNlbnNlLWZyb250cGFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEb2N1bWVudHNcXFxcbXVzZW5zZS1mcm9udHBhZ2VcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3VzZXIvRG9jdW1lbnRzL211c2Vuc2UtZnJvbnRwYWdlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcclxuaW1wb3J0IHBvc3Rjc3NJbXBvcnQgZnJvbSBcInBvc3Rjc3MtaW1wb3J0XCJcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXHJcbmltcG9ydCBjb3B5QXNzZXRzIGZyb20gXCJwb3N0Y3NzLWNvcHktYXNzZXRzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5mdW5jdGlvbiBfcmVzb2x2ZShkaXIpIHtcclxuICByZXR1cm4gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgZGlyKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwb3N0Y3NzOiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBwb3N0Y3NzSW1wb3J0LFxyXG4gICAgICAgIGF1dG9wcmVmaXhlcixcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuXHJcbiAgXSxcclxuICBiYXNlOiBcIi4vXCIsXHJcbiAgZXNidWlsZDoge1xyXG4gICAgLy8gcHVyZTogWydjb25zb2xlLmxvZyddLFxyXG4gICAgbWluaWZ5OiB0cnVlXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJ1xyXG4gICAgICAgIC8vIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgIC8vICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gaWRcclxuICAgICAgICAvLyAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgIC8vICAgICAgIC5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdXHJcbiAgICAgICAgLy8gICAgICAgLnNwbGl0KCcvJylbMF1cclxuICAgICAgICAvLyAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VCxTQUFTLG9CQUFvQjtBQUNwVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxnQkFBZ0I7QUFPdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBRVI7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLElBRVAsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLHVCQUF1QjtBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVWxCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
