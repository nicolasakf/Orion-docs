# Agent, Ask, and Edit modes

Orion's assistant can work in three **interaction modes**. Each mode controls which tools the model may use.

Choose the mode from the selector near the chat input before you send a message.

## Agent mode (default)

**Agent** is the full-capability mode. The assistant can:

- Read and edit notebook cells
- Execute code cells and inspect outputs
- Read and edit workspace files
- Run terminal commands (with approval when configured)
- Delegate to sub-agents and load skills

Use Agent when you want the assistant to **do work** in your project: fix bugs, run analysis, refactor notebooks, or scaffold new files.

## Ask mode

**Ask** is **read-only**. The assistant can inspect notebooks, files, variables, and outputs but cannot change anything or run code.

Use Ask when you want explanations, reviews, or planning without risk of edits—for example, "Explain this traceback" or "What does this function assume about the dataframe?"

## Edit mode

**Edit** can modify **files** and use the **terminal**, but it **does not execute notebook cells**.

Use Edit when you want code or config changes outside the notebook runtime—for example, updating a Python module, README, or shell script while keeping notebook execution under your control.

## Choosing a mode

| You want… | Mode |
| --- | --- |
| Run cells and iterate on analysis | **Agent** |
| Understand code or data without changes | **Ask** |
| Edit project files without running the notebook | **Edit** |

You can switch modes between messages in the same conversation.

## Tool approval

In **Agent** mode, individual tool calls may still require your approval depending on **Settings → Models → Tool approval**. See [Tool approval and compaction](/ai-assistant/tool-approval-and-compaction).

## Related

- [Chat overview](/ai-assistant/chat-overview)
- [Mentions](/ai-assistant/mentions)

---

*Last updated May 2026.*
