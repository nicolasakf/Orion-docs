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

Ways to compact:

- Type **`/compact`** in chat
- Use the **compact** control in the chat UI when context is nearly full

After compaction, older detail is replaced by a summary. Re-mention important files or cells if the assistant loses specifics you still need.

## Session cost

Type **`/cost`** to see approximate **cost and request totals** for the current chat session. Useful when comparing models or long agent runs.

## Related

- [Chat overview](/ai-assistant/chat-overview)
- [Slash commands](/ai-assistant/slash-commands)
- [Models and tool approval](/configuration/models-and-tool-approval)

---

*Last updated May 2026.*
