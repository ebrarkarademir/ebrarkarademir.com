import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// Allow overriding base via env; default to '/'
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  plugins: [vue()],
  base,
})
