import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Tony-C/', // Ensure this matches your GitHub repo name
});
