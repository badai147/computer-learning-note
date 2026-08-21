import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/computer-learning-note/",
  title: "computer-learning-note",
  description: "计算机学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/about" },
    ],

    sidebar: [
      {
        text: "笔记",
        items: [{ text: "SSE 流式输出" }, { text: "关于", link: "/about" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/badai147" }],
  },
})
