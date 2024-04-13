import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// this file config how vite will bundle react app
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
