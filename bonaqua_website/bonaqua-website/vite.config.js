import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import builtins from 'rollup-plugin-node-builtins'
import { resolve } from 'path'
import Pages from 'vite-plugin-pages'

const builtinsPlugin = builtins({crypto: true});
builtinsPlugin.name = 'builtins';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [ 
    react(), 
    builtinsPlugin,
    Pages()
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
    allowNodeBuiltins: ['crypto'],
  },
  build: {
    chunkSizeWarningLimit: 1600,
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        order: resolve(root, 'components/index.html')
      }
    }
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
