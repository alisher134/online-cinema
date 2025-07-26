import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/app/styles/colors" as *; 
        @use "@/app/styles/variables" as *;
        `,
        },
      },
    },
    resolve: {
      alias: {
        '@/app': path.resolve(__dirname, './src/app'),
        '@/pages': path.resolve(__dirname, './src/pages'),
        '@/widgets': path.resolve(__dirname, './src/widgets'),
        '@/features': path.resolve(__dirname, './src/features'),
        '@/entities': path.resolve(__dirname, './src/entities'),
        '@/shared': path.resolve(__dirname, './src/shared'),
      },
    },
    server: {
      port: 5173,
      proxy: {
        '/api/v1': {
          target: env.VITE_PROXY_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
