import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import {qrcode} from "vite-plugin-qrcode"

// https://vite.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === "production" ? "/" + process.env.REPO_NAME + "/" : "/",
  plugins: [vue(), tailwindcss(), qrcode()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "icons": path.resolve(__dirname, "node_modules/vue-material-design-icons")
    },
    extensions: [".vue"],
  },
})
