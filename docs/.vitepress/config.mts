import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/frontend-site/",
  title: "前端规范",
  description: "前端规范",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "规范",
        items: [
          { text: "Color 色彩", link: "/styles/color" },
          { text: "Form 表单", link: "/styles/form" },
        ],
      },
      {
        text: "场景化规范",
        items: [
          { text: "Table 未选择数据", link: "/scenario/form" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
