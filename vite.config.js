import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://auth-server-url', // replace with your auth server URL
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: 'http://api-server-url', // replace with your API server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
