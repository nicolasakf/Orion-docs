import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Orion Docs",
  description: "Help and guides for Orion users",
  lang: "en-US",
  appearance: "force-dark",
  head: [
    ["link", { rel: "icon", href: "/icon.png", sizes: "512x512", type: "image/png" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Saira:wght@100..900&display=swap",
      },
    ],
  ],
  themeConfig: {
    logo: { src: "/logo.png", alt: "Orion" },
    nav: [
      { text: "Getting started", link: "/getting-started/install" },
      {
        text: "Troubleshooting",
        link: "/troubleshooting/jupyter-hidden-folders-and-skills",
      },
      { text: "Website", link: "https://www.orion-agent.ai" },
      { text: "App", link: "https://app.orion-agent.ai" },
    ],
    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "Overview", link: "/" },
          { text: "Install Orion", link: "/getting-started/install" },
        ],
      },
      {
        text: "Troubleshooting",
        items: [
          {
            text: "Jupyter hidden folders & skills",
            link: "/troubleshooting/jupyter-hidden-folders-and-skills",
          },
          {
            text: "Plotly version compatibility",
            link: "/troubleshooting/plotly-version-compatibility",
          },
          {
            text: "ChatGPT Codex device authorization",
            link: "/troubleshooting/chatgpt-codex-device-authorization",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/nicolasakf/Orion-app" },
    ],
    footer: {
      message: "Apache-2.0 Licensed",
      copyright: "Copyright © Nebul4, Inc.",
    },
  },
});
