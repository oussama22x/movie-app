import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow any external IP
    port: 5174,       // Use your port if different
    allowedHosts: [
      '3fbe08be997af7.lhr.life', // Add the external URL here
    ],
  },
});
