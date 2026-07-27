# Models and tool approval

Configure which models appear in chat, how tools run, which model generates chat titles, and model intelligence settings.

Open **Settings → Models**.

## Pin models

**Pinned models** are the models shown in the chat model picker. Pin the models you use most often across providers.

Browse the full **model catalog** in the Models tab to find ids for newer releases. Use search to filter by label, provider, or model id. In list view, drag pinned models to reorder them; the chat picker uses the same order.

If no models are pinned, Orion uses the catalog defaults for providers that are visible and configured. During ChatGPT onboarding, Orion may pin default ChatGPT models for you if your pinned list is empty.

The chat picker only lists pinned models. If the picker says no models are pinned, open **Settings → Models** from the picker and add one.

## Model intelligence

For OpenAI and Anthropic models, the chat input can show an **Intelligence** button next to the model picker. Use it to choose how much reasoning effort the selected model should use for the current browser tab.

- OpenAI models support **Low**, **Medium**, **High**, and, for larger models, **Extra High**.
- Anthropic models support **Low**, **Medium**, **High**, **Extra High**, and **Max**.

Higher intelligence levels can improve harder answers, but may take longer and use more tokens. The setting is saved per selected model in the current browser tab, not as a global Settings value.

## Tool approval

**Tool approval** controls whether Agent mode asks before each tool call:

- **Always ask** — approve or deny run cell, edit file, terminal, and similar actions individually
- **Auto-run** — execute tools without per-call prompts

See [Tool approval and compaction](/ai-assistant/tool-approval-and-compaction).

## Title generation model

Orion generates short titles for new conversations using a separate **title generation model**. Pick a fast, inexpensive model here so chat titles stay cheap and responsive.

This is independent of the model you select for messages in the chat input.

When you choose a title generation model, Orion tests it before saving the setting. If verification fails, select a model from a configured provider that can complete a short non-streaming request, then try again. Your previous title model remains selected until verification succeeds.

## Unavailable models

If a model is grayed out, locked, or missing:

1. Confirm the provider is configured under **Settings → Providers**
2. For local models, confirm the server is running and the model id is correct
3. Pin the model in **Settings → Models**
4. Pick a pinned model in the chat input

## Workspace overrides

Project teams can override chat settings (including pins and title model) in `<workspace>/.orion/settings.json`. See [Workspace settings](/configuration/workspace-settings).

## Related

- [API keys and providers](/configuration/api-keys-and-providers)
- [Chat overview](/ai-assistant/chat-overview)

---

*Last updated July 2026.*
