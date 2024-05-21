import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'useMediaQuery',
      formats: ['es', 'cjs'],
      fileName: 'use-media-query'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})
