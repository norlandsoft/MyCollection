import {defineConfig} from "umi";

export default defineConfig({
  dva: {},
  links: [
    {rel: 'shortcut icon', href: '/icon.png'}
  ],
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