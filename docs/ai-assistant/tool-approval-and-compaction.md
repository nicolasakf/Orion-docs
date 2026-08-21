# Tool approval and compaction

Control how aggressively Orion's assistant uses tools and manage long conversations that fill the model's context window.

## Tool approval

Open **Settings → Models** and find **Tool approval**:

| Setting | Behavior |
| --- | --- |
| **Always ask** | Each tool call (run cell, edit file, terminal command, etc.) waits for your approve or deny |
| **Auto-run** | Tools execute without per-call prompts (subject to mode: Ask mode remains read-only) |

Use **Always ask** when you want to review every action. Use **Auto-run** for faster iteration when you trust the workflow.

Tool approval applies in **Agent** mode. **Ask** mode never runs tools. **Edit** mode allows file and terminal tools but not notebook execution.

## Compact conversation history

Long chats consume context. Orion can **summarize earlier messages** to free space while keeping recent turns.

The ring beside the send button shows how much of the selected model's context window the current chat uses. Hover over it to see the token total. When the ring warns that context is nearly full, click it to compact the chat.

Ways to compact:

- Type **`/compact`** in chat
- Use the **compact** control in the chat UI when context is nearly full

If a model rejects a message because the context is too large, Orion automatically tries one compaction, checks that the smaller request fits, and resends it. The chat stays intact while this runs. If Orion cannot make the request small enough, it stops and explains why; compact manually, start a new chat, or remove unneeded attachments and mentions before sending again.

After compaction, older detail is replaced by a summary. Re-mention important files or cells if the assistant loses specifics you still need.

Orion inserts a **Conversation compacted** marker in the chat history after a successful compaction. Click it to read the saved summary, including the model and the approximate tokens freed when that information is available.

## Session cost

Type **`/cost`** to see request totals and the best available cost for the current chat, including a breakdown by model.

Each cost shows a status so you can tell how it was calculated:

- **Exact** — Orion received a reported cost for every request in that row.
- **Estimated** or **Mixed** — at least some requests use a price estimate or a different cost source.
- **Pending** — Orion is still waiting for a provider to report usage; use the refresh button on the cost card to check again.
- **Unavailable** — Orion does not have enough pricing or usage information to calculate the cost.

Treat this as a session-usage summary, not a provider invoice.

## Related

- [Chat overview](/ai-assistant/chat-overview)
- [Slash commands](/ai-assistant/slash-commands)
- [Models and tool approval](/configuration/models-and-tool-approval)

---

*Last updated July 2026.*
