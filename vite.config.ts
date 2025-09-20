import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import {qrcode} from "vite-plugin-qrcode"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), qrcode()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [
      ".vue"
    ]
  }
})
