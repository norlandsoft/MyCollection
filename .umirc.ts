import {defineConfig} from "umi";
const { resolve } = require('path');

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
  alias: {
    'aird': resolve(__dirname, 'node_modules/air-design/lib'),
  },
  outputPath: "dist",
  plugins: [
    'umi-plugin-electron-builder'
  ],
});