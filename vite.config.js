import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  preview: {},
  build: {
    rollupOptions: {
      output: {
        dir:"dist",
        // file: 'bundle.js', // Specify the name of the output JavaScript file
        chunkFileNames: 'index.js', // For dynamic imports
      },
      external: ['~src/views/Customer.vue'],
    },
    outDir: 'dist',
    
  },
});
