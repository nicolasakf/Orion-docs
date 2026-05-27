# Slash commands

Type **`/`** in the chat input to open Orion's slash command palette. Commands run actions or load specialized instructions without leaving chat.

## Built-in commands

| Command | Description |
| --- | --- |
| `/compact` | Summarize conversation history to free context window space |
| `/cost` | Show cost and request totals for the current session |
| `/report-bug` | Open GitHub to report a bug in [Orion-app](https://github.com/nicolasakf/Orion-app/issues/new) |

## Skill commands

Each **workspace skill** appears as `/skill-name`. Running the command loads that skill's instructions into the conversation so the assistant follows your team's workflow.

Skills live in:

- `.agents/skills/<name>/SKILL.md` (default, shared with other agent tooling)
- `.orion/skills/<name>/SKILL.md` (Orion-only override of the same name)

See [Skills](/ai-assistant/skills).

## Sub-agent commands

Each **sub-agent** appears as `/subagent-name`. The parent chat delegates work to that sub-agent's notebook workflow.

Sub-agents are notebooks named `*.agent.ipynb` under `.agents/subagents/` or `.orion/subagents/`. See [Sub-agents](/ai-assistant/sub-agents).

## Edit definitions from the palette

When a skill or sub-agent has a known definition file, the palette may offer **Edit definition** to open its `SKILL.md` or `.agent.ipynb` in the editor.

## Commands not listed

Skills with `disable-model-invocation: true` in frontmatter do not auto-load for the model but still appear as slash commands you can invoke manually.

## Related

- [Skills](/ai-assistant/skills)
- [Sub-agents](/ai-assistant/sub-agents)
- [Tool approval and compaction](/ai-assistant/tool-approval-and-compaction)

---

*Last updated May 2026.*
