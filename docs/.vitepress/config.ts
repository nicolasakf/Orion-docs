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
      { text: "Getting started", link: "/getting-started/what-is-orion" },
      { text: "Notebooks", link: "/notebooks/notebook-basics" },
      { text: "AI assistant", link: "/ai-assistant/chat-overview" },
      { text: "Configuration", link: "/configuration/api-keys-and-providers" },
      { text: "Troubleshooting", link: "/troubleshooting/" },
      { text: "Website", link: "https://www.orion-agent.ai" },
      { text: "App", link: "https://app.orion-agent.ai" },
    ],
    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "Overview", link: "/" },
          { text: "What is Orion?", link: "/getting-started/what-is-orion" },
          { text: "Install Orion", link: "/getting-started/install" },
          { text: "Your first session", link: "/getting-started/first-session" },
          { text: "Local vs hosted app", link: "/getting-started/local-vs-hosted" },
        ],
      },
      {
        text: "Notebooks and UI",
        items: [
          { text: "Notebook basics", link: "/notebooks/notebook-basics" },
          { text: "App View", link: "/notebooks/app-view" },
          { text: "Orion UI (orion_ui)", link: "/notebooks/orion-ui" },
          {
            text: "Orion UI component reference",
            link: "/notebooks/orion-ui-component-reference",
          },
          { text: "Style App View with CSS", link: "/notebooks/app-view-css" },
          { text: "Export notebooks", link: "/notebooks/export-notebooks" },
        ],
      },
      {
        text: "AI assistant",
        items: [
          { text: "Chat overview", link: "/ai-assistant/chat-overview" },
          {
            text: "Agent, Ask, and Edit modes",
            link: "/ai-assistant/agent-ask-edit-modes",
          },
          { text: "Mentions", link: "/ai-assistant/mentions" },
          { text: "Slash commands", link: "/ai-assistant/slash-commands" },
          { text: "Skills", link: "/ai-assistant/skills" },
          { text: "Sub-agents", link: "/ai-assistant/sub-agents" },
          {
            text: "Tool approval and compaction",
            link: "/ai-assistant/tool-approval-and-compaction",
          },
        ],
      },
      {
        text: "Configuration",
        items: [
          {
            text: "API keys and providers",
            link: "/configuration/api-keys-and-providers",
          },
          {
            text: "Models and tool approval",
            link: "/configuration/models-and-tool-approval",
          },
          { text: "Workspace settings", link: "/configuration/workspace-settings" },
          { text: "CLI reference", link: "/configuration/cli-reference" },
        ],
      },
      {
        text: "Troubleshooting",
        items: [
          { text: "Overview", link: "/troubleshooting/" },
          {
            text: "Connect to external Jupyter",
            link: "/troubleshooting/connect-external-jupyter",
          },
          {
            text: "Jupyter CORS connection errors",
            link: "/troubleshooting/jupyter-cors-connection-failed",
          },
          {
            text: "Kernel and Python selection",
            link: "/troubleshooting/kernel-python-selection",
          },
          {
            text: "Jupyter hidden folders and skills",
            link: "/troubleshooting/jupyter-hidden-folders-and-skills",
          },
          {
            text: "Plotly version compatibility",
            link: "/troubleshooting/plotly-version-compatibility",
          },
          {
            text: "orion_ui import error",
            link: "/troubleshooting/orion-ui-import-error",
          },
          {
            text: "App View schema errors",
            link: "/troubleshooting/app-view-schema-errors",
          },
          { text: "PDF export blocked", link: "/troubleshooting/pdf-export-blocked" },
          {
            text: "ChatGPT Codex device authorization",
            link: "/troubleshooting/chatgpt-codex-device-authorization",
          },
          {
            text: "ChatGPT OAuth issues",
            link: "/troubleshooting/chatgpt-oauth-general",
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
