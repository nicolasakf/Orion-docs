# Chat overview

The assistant panel on the right side of Orion helps you analyze data, edit notebooks, and work with files. This guide covers the basics: picking a model, sending messages, and built-in chat commands.

## Open chat

Click the chat icon in the right sidebar. If the panel is collapsed, expand it from the toolbar.

You need at least one **provider** configured under **Settings → Providers** before models become available. See [API keys and providers](/configuration/api-keys-and-providers).

## Choose a model

Use the **model picker** at the bottom of the chat input. Pinned models from **Settings → Models** appear first.

If your chosen model is unavailable (missing API key or local server offline), Orion falls back or prompts you to configure the provider.

## Interaction modes

Orion supports three modes, selectable near the chat input:

| Mode | Behavior |
| --- | --- |
| **Agent** | Full tools: notebook execution, file edits, terminal, sub-agents |
| **Ask** | Read-only: inspect and explain, no changes |
| **Edit** | Edit files and run terminal commands; does not execute notebook cells |

See [Agent, Ask, and Edit modes](/ai-assistant/agent-ask-edit-modes).

## Send messages and queue

Type a message and press **Enter** to send. While the agent is working, you can **queue** another message; it runs when the current turn finishes.

Use **@** to attach context (files, cells, variables). See [Mentions](/ai-assistant/mentions).

## Slash commands

Type `/` in the chat box to open the command palette. Built-in commands include:

| Command | Purpose |
| --- | --- |
| `/compact` | Summarize conversation history to free context |
| `/cost` | Show session cost and request totals |
| `/report-bug` | Open GitHub to report an Orion bug |

Workspace **skills** and **sub-agents** also appear as `/name` commands. See [Slash commands](/ai-assistant/slash-commands).

## Tool approval

When **Settings → Models** sets tool approval to **Always ask**, Orion shows each tool call for approve or deny before it runs. See [Tool approval and compaction](/ai-assistant/tool-approval-and-compaction).

## Chat history

Conversations are stored locally in Orion's SQLite database under your Orion data directory (`~/.orion/orion.db` on macOS/Linux, `%USERPROFILE%\.orion\orion.db` on Windows).

## Related

- [Agent, Ask, and Edit modes](/ai-assistant/agent-ask-edit-modes)
- [Mentions](/ai-assistant/mentions)
- [Skills](/ai-assistant/skills)
- [Sub-agents](/ai-assistant/sub-agents)

---

*Last updated May 2026.*
