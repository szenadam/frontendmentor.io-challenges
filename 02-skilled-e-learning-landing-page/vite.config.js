import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: 'frontendmentor.io-challenges/02-skilled-e-learning-landing-page/dist',
})
