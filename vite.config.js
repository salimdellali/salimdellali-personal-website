import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5 SCSS uses deprecated Sass APIs — silence until Bootstrap 6
        silenceDeprecations: ['global-builtin', 'color-functions'],
      },
    },
  },
})
