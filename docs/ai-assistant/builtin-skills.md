# Built-in skills

Orion ships with **built-in skills** — instruction packages the assistant can load automatically or on demand with **`/skill-name`**. They teach the agent Orion-specific workflows: notebook UI, App View layouts, settings, metadata, sub-agents, custom skills, workspace rules, deep exploratory data analysis, and chat history search.

This page is the hub. Each built-in skill has a **longer user guide** linked below with examples, file locations, and troubleshooting. Workspace skills with the **same name** override the built-in copy.

## Built-in skill reference

| Skill | Slash command | What it is for |
| --- | --- | --- |
| [Create skill](/ai-assistant/builtin-skills/create-skill) | `/create-skill` | Scaffold a new workspace `SKILL.md` under `.agents/skills` |
| [Create rule](/ai-assistant/builtin-skills/create-rule) | `/create-rule` | Author `AGENTS.md` or `CLAUDE.md` workspace rules |
| [Create sub-agent](/ai-assistant/builtin-skills/create-subagent) | `/create-subagent` | Author a reusable `.agent.ipynb` sub-agent notebook |
| [Orion UI](/ai-assistant/builtin-skills/orion-ui) | `/orion-ui` | Build interactive notebook controls with Python `orion_ui` |
| [Create app](/ai-assistant/builtin-skills/create-app) | `/create-app` | Lay out App View dashboards from notebook metadata |
| [Orion metadata](/ai-assistant/builtin-skills/orion-metadata) | `/orion-metadata` | Valid keys under `metadata.orion` in notebooks |
| [Orion settings](/ai-assistant/builtin-skills/orion-settings) | `/orion-settings` | Read or change user and workspace settings JSON |
| [Chat history](/ai-assistant/builtin-skills/chat-history) | `/chat-history` | Search and summarize past Orion chats stored locally |
| [Deep EDA](/ai-assistant/builtin-skills/deep-eda) | `/deep-eda` | Run an exhaustive exploratory data analysis in the active notebook |

## How built-in skills load

1. **Automatic** — When your message matches a skill's description, the model may load it without a slash command (unless `disable-model-invocation` is set on a workspace override).
2. **Manual** — Type **`/orion-ui`**, **`/create-app`**, or any skill name in the chat slash palette.
3. **Override** — Place your own `SKILL.md` at `.agents/skills/<name>/` or `.orion/skills/<name>/` with the same `name` in frontmatter to replace the built-in version for that workspace.

## Built-in vs workspace skills

| | Built-in | Workspace |
| --- | --- | --- |
| Location | Shipped with Orion | `.agents/skills/<name>/` or `.orion/skills/<name>/` |
| Updates | With Orion releases | You edit in the Jupyter workspace |
| Override | — | Same `name` replaces built-in |

See [Skills](/ai-assistant/skills) for the full workspace skill format, precedence rules, and authoring checklist.

## Related Orion features

Built-in skills map to product areas documented elsewhere:

| Feature | User guide |
| --- | --- |
| Interactive notebook UI | [Orion UI (`orion_ui`)](/notebooks/orion-ui) · [Component reference](/notebooks/orion-ui-component-reference) |
| Dashboard layout | [App View](/notebooks/app-view) · [Style App View with CSS](/notebooks/app-view-css) |
| Delegated workflows | [Sub-agents](/ai-assistant/sub-agents) |
| Settings files | [Workspace settings](/configuration/workspace-settings) |
| Skills not appearing | [Jupyter hidden folders and skills](/troubleshooting/jupyter-hidden-folders-and-skills) |

## When to ask the assistant

You do not need to memorize skill names. Plain-language requests work:

- "Create a skill for our quarterly report workflow" → loads **create-skill**
- "Add our TypeScript conventions to AGENTS.md" → loads **create-rule**
- "Add sliders to this notebook" → loads **orion-ui**
- "Turn this notebook into a dashboard" → loads **create-app** (and often **orion-ui**)
- "Run a thorough EDA on this dataset" → loads **deep-eda**
- "What did we decide about the data pipeline last week?" → loads **chat-history**
- "Pin Gemini as the default model for this repo" → loads **orion-settings**

If a skill does not appear in the slash palette after you add workspace files, reconnect the Jupyter kernel or reload Orion.

## Related

- [Skills](/ai-assistant/skills)
- [Slash commands](/ai-assistant/slash-commands)
- [Sub-agents](/ai-assistant/sub-agents)

---

*Last updated June 2026.*
