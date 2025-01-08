import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(() => {
  const isProduction = process.env.NODE_ENV === 'production';
  const repoName = '/stik/'; 
  return {
    base: isProduction ? repoName : '/',
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
     build: {
       outDir: 'docs',
       rollupOptions:{
        external: ['swiper']
        }
      },
      optimizeDeps:{
        include:['swiper']
      }
  };
});