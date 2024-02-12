import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/dx-admin/",
  head: [["link", { rel: "icon", href: "/dx-admin/logo.svg" }]],
  // Home 标题
  title: "Dx-admin",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "目录",
    outline: [1, 6], // 2 - 6几标题
    // 导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "介绍", link: "/guid/" },
      { text: "前端指南", link: "/frontend/vue3/Vue3介绍.md" },
      { text: "后端指南", link: "/backend/nestjs/nestjs介绍.md" },
      // 设置导航二级菜单
      // {
      //   text: "二级",
      //   items: [{ text: "Sub 1", link: "/sub-1" }],
      // },
    ],
    // 侧边栏
    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/getting-start" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    // sidebar: {
    //   "/frontend/vue3": set_sidebar("/frontend/vue3"),
    //   "/backend/nestjs": set_sidebar("/backend/nestjs"),
    //   "/guid": set_sidebar("/guid"),
    // },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    sidebar: false,
    aside: "left",

    // 首页右上角链接
    socialLinks: [
      { icon: "github", link: "https://github.com/996wuxian/dx-admin" },
    ],

    // 页脚
    footer: {
      copyright: "Copyright@ 2024 Wuxian",
    },
  },
});
