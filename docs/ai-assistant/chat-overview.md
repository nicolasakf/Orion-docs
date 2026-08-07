# Chat overview

The assistant panel on the right side of Orion helps you analyze data, edit notebooks, and work with files. This guide covers the basics: picking a model, sending messages, and built-in chat commands.

## Open chat

Click the chat icon in the right sidebar. If the panel is collapsed, expand it from the toolbar.

You need at least one **provider** configured under **Settings → Providers** before models become available. See [API keys and providers](/configuration/api-keys-and-providers).

## Choose a model

Use the **model picker** at the bottom of the chat input. Pinned models from **Settings → Models** appear first.

If your chosen model is unavailable (missing API key or local server offline), Orion falls back or prompts you to configure the provider.

## Interaction modes

Orion supports several modes, selectable near the chat input:

| Mode | Behavior |
| --- | --- |
| **Agent** | Full tools: notebook execution, file edits, terminal, sub-agents |
| **Research** | Beta mode for evidence-driven, notebook-native investigations; hidden from the selector unless enabled in settings |
| **Ask** | Read-only: inspect and explain, no changes |
| **Edit** | Edit files and run terminal commands; does not execute notebook cells |

See [Agent, Research, Ask, and Edit modes](/ai-assistant/agent-ask-edit-modes).

## Fork a chat

After a completed assistant response, use **Fork from here** below that response when you want to try a different path without losing the original conversation. Orion opens a new chat containing the history through that response. Forking is unavailable while Orion is working.

Use **Copy message** below an assistant response to copy its text.

## Edit and resend a message

1. Wait for Orion to finish its current response.
2. Click the earlier **user message** you want to change. Orion loads its text and mentions into the chat input.
3. Revise the message and send it.

Orion replaces that message and continues from it, so the later turns in the current chat are replaced by the new response.

## Rename a chat with AI

Orion creates a short title after a chat receives its first response. To replace
it, double-click the title in the chat header, or choose **Rename chat** from
the chat menu. Select **Generate title with AI**, review the suggested title,
then press **Enter** or click away to save it.

You need at least one user message and one assistant response. Set the title
model and maximum title length under **Settings → Models → Chat titles**. See
[Models and tool approval](/configuration/models-and-tool-approval).

## Send messages and queue

Type a message and press **Enter** to send. While the agent is working, you can **queue** another message; it runs when the current turn finishes.

Use **@** to attach context (files, cells, variables). See [Mentions](/ai-assistant/mentions).

## Attach files from your computer

Use the **+** button beside the send button to attach files that are not already in the workspace. Add a short instruction with the file, such as “Summarize this CSV” or “Compare this image with the chart in the notebook,” then send the message.

- Non-image files need an active Jupyter connection. Orion copies them to managed storage on that Jupyter server so the assistant can use them with workspace tools.
- Image-capable models can receive image attachments directly. With a model that cannot see images, Orion still attaches the image as a file reference, but the model cannot inspect the pixels.
- Wait for an upload to finish before sending, switching chats, or deleting the chat.

Managed non-image attachments expire after 30 days without activity in the chat. Attach the file again if an older conversation says that its attachment is unavailable.

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

The assistant can search and summarize past chats when the **chat-history** built-in skill loads. See [Built-in skill: Chat history](/ai-assistant/builtin-skills/chat-history).

## Related

- [Agent, Research, Ask, and Edit modes](/ai-assistant/agent-ask-edit-modes)
- [Mentions](/ai-assistant/mentions)
- [Skills](/ai-assistant/skills)
- [Sub-agents](/ai-assistant/sub-agents)

---

*Last updated August 2026.*
