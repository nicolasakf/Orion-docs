# Models and tool approval

Configure which models appear in chat, how tools run, and which model generates chat titles.

Open **Settings → Models**.

## Pin models

**Pinned models** show at the top of the model picker in chat. Pin the models you use most often across providers.

Browse the full **model catalog** in the Models tab to find ids for newer releases.

## Tool approval

**Tool approval** controls whether Agent mode asks before each tool call:

- **Always ask** — approve or deny run cell, edit file, terminal, and similar actions individually
- **Auto-run** — execute tools without per-call prompts

See [Tool approval and compaction](/ai-assistant/tool-approval-and-compaction).

## Title generation model

Orion generates short titles for new conversations using a separate **title generation model**. Pick a fast, inexpensive model here so chat titles stay cheap and responsive.

This is independent of the model you select for messages in the chat input.

## Unavailable models

If a model is grayed out or missing:

1. Confirm the provider is configured under **Settings → Providers**
2. For local models, confirm the server is running and the model id is correct
3. Pick a pinned model or another entry from the catalog

## Workspace overrides

Project teams can override chat settings (including pins and title model) in `<workspace>/.orion/settings.json`. See [Workspace settings](/configuration/workspace-settings).

## Related

- [API keys and providers](/configuration/api-keys-and-providers)
- [Chat overview](/ai-assistant/chat-overview)

---

*Last updated May 2026.*
