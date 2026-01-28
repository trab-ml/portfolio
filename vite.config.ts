import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import {qrcode} from "vite-plugin-qrcode"

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())

  return {
    define: {
      'import.meta.env.VITE_REPO_NAME': JSON.stringify(env.VITE_REPO_NAME)
    },
    base: `/${env.VITE_REPO_NAME}/`,
    plugins: [vue(), tailwindcss(), qrcode()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "icons": path.resolve(__dirname, "node_modules/vue-material-design-icons")
      },
      extensions: [".vue"],
    },
    darkMode: "class",
  }
})
