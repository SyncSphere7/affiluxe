import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'Affiluxe_GitHub_Repo',
  publicDir: 'assets'
})