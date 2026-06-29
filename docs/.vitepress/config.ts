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
            collapsed: false,
            items: [
              {
                text: "Shared parameters",
                link: "/notebooks/orion-ui-component-reference#shared-parameters",
                collapsed: true,
                items: [
                  {
                    text: "Layout spacing",
                    link: "/notebooks/orion-ui-component-reference#layout-spacing",
                  },
                  {
                    text: "Styling hook",
                    link: "/notebooks/orion-ui-component-reference#styling-hook",
                  },
                  {
                    text: "Control state",
                    link: "/notebooks/orion-ui-component-reference#control-state",
                  },
                  {
                    text: "Option lists",
                    link: "/notebooks/orion-ui-component-reference#option-lists-select-radio-group-toggle-group",
                  },
                  {
                    text: "Date and time values",
                    link: "/notebooks/orion-ui-component-reference#date-and-time-values",
                  },
                  {
                    text: "Date presets",
                    link: "/notebooks/orion-ui-component-reference#date-presets",
                  },
                  {
                    text: "Button actions",
                    link: "/notebooks/orion-ui-component-reference#button-actions",
                  },
                ],
              },
              {
                text: "Layout and containers",
                link: "/notebooks/orion-ui-component-reference#layout-and-containers",
                collapsed: true,
                items: [
                  {
                    text: "ui.page",
                    link: "/notebooks/orion-ui-component-reference#ui-page-children-gap-md-padding-md-class-name-none",
                  },
                  {
                    text: "ui.stack",
                    link: "/notebooks/orion-ui-component-reference#ui-stack-children-gap-md-align-stretch-class-name-none",
                  },
                  {
                    text: "ui.grid",
                    link: "/notebooks/orion-ui-component-reference#ui-grid-children-columns-2-gap-md-class-name-none",
                  },
                  {
                    text: "ui.section",
                    link: "/notebooks/orion-ui-component-reference#ui-section-children-title-none-description-none-gap-md-padding-md-class-name-none",
                  },
                  {
                    text: "ui.card",
                    link: "/notebooks/orion-ui-component-reference#ui-card-children-title-none-description-none-gap-md-class-name-none",
                  },
                  {
                    text: "ui.tabs",
                    link: "/notebooks/orion-ui-component-reference#ui-tabs-children-default-value-none-class-name-none",
                  },
                  {
                    text: "ui.accordion",
                    link: "/notebooks/orion-ui-component-reference#ui-accordion-children-default-value-none-multiple-false-class-name-none",
                  },
                  {
                    text: "ui.collapsible",
                    link: "/notebooks/orion-ui-component-reference#ui-collapsible-children-label-none-title-none-default-open-false-content-none-description-none-class-name-none",
                  },
                  {
                    text: "ui.carousel",
                    link: "/notebooks/orion-ui-component-reference#ui-carousel-children-orientation-horizontal-show-controls-true-class-name-none",
                  },
                  {
                    text: "ui.separator",
                    link: "/notebooks/orion-ui-component-reference#ui-separator-class-name-none",
                  },
                ],
              },
              {
                text: "Controls",
                link: "/notebooks/orion-ui-component-reference#controls",
                collapsed: true,
                items: [
                  {
                    text: "ui.input",
                    link: "/notebooks/orion-ui-component-reference#ui-input-key-label-none-default-value-value-unset-placeholder-none-input-type-text-class-name-none",
                  },
                  {
                    text: "ui.textarea",
                    link: "/notebooks/orion-ui-component-reference#ui-textarea-key-label-none-default-value-value-unset-placeholder-none-class-name-none",
                  },
                  {
                    text: "ui.select",
                    link: "/notebooks/orion-ui-component-reference#ui-select-key-options-label-none-default-value-none-value-unset-placeholder-none-class-name-none",
                  },
                  {
                    text: "ui.slider",
                    link: "/notebooks/orion-ui-component-reference#ui-slider-key-label-none-min-0-max-100-default-value-0-value-unset-step-1-class-name-none",
                  },
                  {
                    text: "ui.checkbox",
                    link: "/notebooks/orion-ui-component-reference#ui-checkbox-key-label-none-default-value-false-value-unset-class-name-none",
                  },
                  {
                    text: "ui.switch",
                    link: "/notebooks/orion-ui-component-reference#ui-switch-key-label-none-default-value-false-value-unset-class-name-none",
                  },
                  {
                    text: "ui.radio_group",
                    link: "/notebooks/orion-ui-component-reference#ui-radio-group-key-options-label-none-default-value-none-value-unset-class-name-none",
                  },
                  {
                    text: "ui.toggle",
                    link: "/notebooks/orion-ui-component-reference#ui-toggle-key-label-none-default-value-false-value-unset-variant-none-class-name-none",
                  },
                  {
                    text: "ui.toggle_group",
                    link: "/notebooks/orion-ui-component-reference#ui-toggle-group-key-options-label-none-default-value-none-value-unset-variant-none-class-name-none",
                  },
                  {
                    text: "ui.calendar",
                    link: "/notebooks/orion-ui-component-reference#ui-calendar-key-label-none-mode-single-default-value-value-unset-caption-layout-none-from-year-none-to-year-none-number-of-months-none-show-outside-days-false-presets-none-class-name-none",
                  },
                  {
                    text: "ui.date_picker",
                    link: "/notebooks/orion-ui-component-reference#ui-date-picker-key-label-none-mode-single-default-value-value-unset-placeholder-none-caption-layout-none-from-year-none-to-year-none-number-of-months-none-show-outside-days-false-presets-none-class-name-none",
                  },
                  {
                    text: "ui.date_time_picker",
                    link: "/notebooks/orion-ui-component-reference#ui-date-time-picker-key-label-none-default-value-value-unset-start-time-key-none-end-time-key-none-start-time-label-start-time-end-time-label-end-time-default-start-time-09-00-00-default-end-time-17-00-00-caption-layout-none-from-year-none-to-year-none-show-outside-days-false-presets-none-class-name-none",
                  },
                  {
                    text: "ui.button",
                    link: "/notebooks/orion-ui-component-reference#ui-button-label-action-none-variant-none-size-none-class-name-none",
                  },
                ],
              },
              {
                text: "Display",
                link: "/notebooks/orion-ui-component-reference#display",
                collapsed: true,
                items: [
                  {
                    text: "ui.label",
                    link: "/notebooks/orion-ui-component-reference#ui-label-text-class-name-none",
                  },
                  {
                    text: "ui.badge",
                    link: "/notebooks/orion-ui-component-reference#ui-badge-text-variant-none-class-name-none",
                  },
                  {
                    text: "ui.alert",
                    link: "/notebooks/orion-ui-component-reference#ui-alert-children-title-none-description-none-text-none-variant-none-class-name-none",
                  },
                  {
                    text: "ui.progress",
                    link: "/notebooks/orion-ui-component-reference#ui-progress-key-none-label-none-default-value-0-value-unset-max-100-class-name-none",
                  },
                  {
                    text: "ui.avatar",
                    link: "/notebooks/orion-ui-component-reference#ui-avatar-src-none-alt-none-fallback-none-label-none-size-none-class-name-none",
                  },
                  {
                    text: "ui.popover",
                    link: "/notebooks/orion-ui-component-reference#ui-popover-children-label-none-trigger-none-text-none-content-none-description-none-class-name-none",
                  },
                  {
                    text: "ui.hover_card",
                    link: "/notebooks/orion-ui-component-reference#ui-hover-card-children-label-none-trigger-none-text-none-content-none-description-none-class-name-none",
                  },
                  {
                    text: "ui.tooltip",
                    link: "/notebooks/orion-ui-component-reference#ui-tooltip-children-label-none-trigger-none-text-none-content-none-description-none-class-name-none",
                  },
                  {
                    text: "ui.markdown_cell",
                    link: "/notebooks/orion-ui-component-reference#ui-markdown-cell-cell-id-none-text-none-class-name-none",
                  },
                  {
                    text: "ui.output",
                    link: "/notebooks/orion-ui-component-reference#ui-output-cell-id-output-index-0-class-name-none",
                  },
                ],
              },
              {
                text: "State API",
                link: "/notebooks/orion-ui-component-reference#state-api",
              },
              {
                text: "Plotly styling",
                link: "/notebooks/orion-ui-component-reference#plotly-styling",
                collapsed: true,
                items: [
                  {
                    text: "ui.theme.plotly",
                    link: "/notebooks/orion-ui-component-reference#ui-theme-plotly-name-orion-set-default-true",
                  },
                ],
              },
              {
                text: "Charts",
                link: "/notebooks/orion-ui-component-reference#charts",
              },
              {
                text: "Related",
                link: "/notebooks/orion-ui-component-reference#related",
              },
            ],
          },
          { text: "Style App View with CSS", link: "/notebooks/app-view-css" },
          { text: "Export notebooks", link: "/notebooks/export-notebooks" },
          { text: "Publish to Orion Cloud", link: "/notebooks/publish-notebooks" },
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
          {
            text: "Built-in skills",
            link: "/ai-assistant/builtin-skills",
            collapsed: true,
            items: [
              { text: "Overview", link: "/ai-assistant/builtin-skills" },
              { text: "Create skill", link: "/ai-assistant/builtin-skills/create-skill" },
              { text: "Create rule", link: "/ai-assistant/builtin-skills/create-rule" },
              {
                text: "Create sub-agent",
                link: "/ai-assistant/builtin-skills/create-subagent",
              },
              { text: "Orion UI", link: "/ai-assistant/builtin-skills/orion-ui" },
              { text: "Create app", link: "/ai-assistant/builtin-skills/create-app" },
              {
                text: "Orion metadata",
                link: "/ai-assistant/builtin-skills/orion-metadata",
              },
              {
                text: "Orion settings",
                link: "/ai-assistant/builtin-skills/orion-settings",
              },
              {
                text: "Chat history",
                link: "/ai-assistant/builtin-skills/chat-history",
              },
              {
                text: "Deep EDA",
                link: "/ai-assistant/builtin-skills/deep-eda",
              },
            ],
          },
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
          {
            text: "Advanced settings keys",
            link: "/configuration/settings-json-advanced-keys",
          },
          { text: "CLI reference", link: "/configuration/cli-reference" },
        ],
      },
      {
        text: "Troubleshooting",
        items: [
          { text: "Overview", link: "/troubleshooting/" },
          {
            text: "Desktop install security warnings",
            link: "/troubleshooting/desktop-install-security-warnings",
          },
          {
            text: "First-run native modules error",
            link: "/troubleshooting/first-run-native-modules-error",
          },
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
            text: "Orion Cloud publish and import",
            link: "/troubleshooting/orion-cloud-publish-and-import",
          },
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
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/nicolasakf/Orion-app" },
    ],
    footer: {
      message: "Apache-2.0 Licensed",
    },
  },
});
