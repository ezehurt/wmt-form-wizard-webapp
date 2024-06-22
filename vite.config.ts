/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import sass from "sass"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
