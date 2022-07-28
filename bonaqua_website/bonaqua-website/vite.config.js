import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import builtins from 'rollup-plugin-node-builtins'

const builtinsPlugin = builtins({crypto: true});
builtinsPlugin.name = 'builtins';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [ 
    react(), 
    builtinsPlugin,
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
    allowNodeBuiltins: ['crypto'],
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  rollupInputOptions: {
    plugins: [
        builtinsPlugin
    ]
  },
  resolve: {
    alias: {
      crypto: require.resolve('rollup-plugin-node-builtins'),
    }
  }
})
