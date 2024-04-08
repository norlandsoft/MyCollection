import {defineConfig} from "umi";

export default defineConfig({
  title: 'MyCollection',
  routes: [
    {
      path: "/",
      component: "@/layouts/BasicLayout"
    }
  ],
  outputPath: "dist",
  plugins: ['umi-plugin-electron-builder'],
});