import {defineConfig} from "umi";

export default defineConfig({
  dva: {},
  routes: [
    {
      path: "/",
      component: "@/layouts/BasicLayout"
    }
  ],
  outputPath: "dist",
  plugins: [
    'umi-plugin-electron-builder'
  ],
});