# Built-in skill: Chat history

The **chat-history** built-in lets Orion's assistant **search, summarize, and quote past conversations** stored on your machine. Use it when you need to recall earlier decisions, instructions, or context from previous Orion sessions.

Load it with **`/chat-history`** or ask: "What did we decide about … in a previous chat?"

## Where chat history is stored

Orion saves conversations in a local **SQLite** database:

| Platform | Path |
| --- | --- |
| **macOS / Linux** | `~/.orion/orion.db` |
| **Windows** | `%USERPROFILE%\.orion\orion.db` |

The database exists only on the machine where Orion runs. It is not synced to the cloud unless you back it up yourself.

Hosted Orion at [app.orion-agent.ai](https://app.orion-agent.ai) stores history according to that deployment; the paths above apply to **local** Orion installs and local app data.

## What the assistant can do

With this skill loaded, the assistant can:

- List recent chats by title and date
- Search chat titles or message text for keywords
- Read messages from a specific conversation
- Summarize prior decisions or quote relevant snippets
- Read compaction summaries when a long chat was compacted

It uses **read-only** queries unless you explicitly ask for database maintenance (which this skill discourages).

## Privacy and safety

Past chats may contain private code, file paths, credentials pasted by mistake, or sensitive context. The assistant is instructed to:

- Inspect only what your request requires
- Quote short relevant snippets, not full transcripts (unless you ask)
- Never write, delete, or repair the database while using this skill

Treat chat history search like searching your local mail archive — useful, but handle outputs carefully in shared screens.

## Database structure (overview)

Three main tables:

| Table | Holds |
| --- | --- |
| `chats` | Chat id, title, created/updated timestamps, optional compaction summary |
| `chat_messages` | Ordered messages per chat (`role`, timestamp, JSON payload) |
| `subagent_sessions` | Nested sub-agent run metadata linked to a chat |

Message text usually lives inside `message_json` as AI SDK UI message parts.

You do not need to query SQLite yourself; ask the assistant in natural language. Power users can inspect the file with any SQLite client.

## Example requests

- "Find chats where we discussed the embedding model choice."
- "Summarize what we decided about the data pipeline last week."
- "Quote the exact instructions I gave for the export format in yesterday's chat."
- "List my ten most recent conversations."

If several chats match, the assistant should show candidates and ask which to open.

## When history is missing

If `orion.db` does not exist or is empty, the assistant reports that no local chat history is available. That can happen on a fresh install, after manual deletion, or when using a different user profile on Windows.

## Related

- [Chat overview](/ai-assistant/chat-overview) — how conversations work in Orion
- [Tool approval and compaction](/ai-assistant/tool-approval-and-compaction) — long-chat compaction
- [CLI reference](/configuration/cli-reference) — mentions `orion.db` in the data directory
- [Built-in skills hub](/ai-assistant/builtin-skills)

---

*Last updated May 2026.*
