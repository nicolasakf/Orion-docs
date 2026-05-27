# Mentions in chat

Use **@ mentions** to attach workspace context to a chat message so the assistant knows exactly what you mean—cells, variables, files, folders, terminal output, or parts of the conversation.

## Open the mention picker

In the chat input, type **`@`** to open the mention menu. You can also:

- **Right-click** a file in the Files panel and choose to mention it in chat
- Select a notebook cell and press **`I`** to mention that cell
- Use the floating **@** popover when text is selected in assistant messages or tool output (Orion 0.6+)

## What you can mention

| Type | Example use |
| --- | --- |
| **Files** | `@src/utils.py` — include a script in context |
| **Folders** | `@data/` — scope analysis to a directory |
| **Notebook cells** | Selected cell via **`I`** or cell mention picker |
| **Variables** | Kernel variables from the variable inspector |
| **Terminal** | Recent terminal output |
| **Conversation** | Snippets from prior assistant or tool messages |

## Tips

- Mention **specific cells** when asking about a chart or error from that cell's output.
- Mention **variables** when debugging dtype, shape, or missing values—the assistant sees inspector state, not just source code.
- Combine mentions with a clear question: `@df Describe null counts and suggest imputation."

## Related

- [Chat overview](/ai-assistant/chat-overview)
- [Notebook basics](/notebooks/notebook-basics) — variable inspector and cell shortcuts

---

*Last updated May 2026.*
