# API keys and providers

Orion uses **bring your own key** (BYOK) for cloud models and supports local inference. Configure providers in **Settings → Providers**.

Credentials are stored **in your browser only**. They are not written to `settings.json` on disk.

## Open Settings → Providers

1. Open Orion in your browser.
2. Click the **gear** icon to open Settings.
3. Select the **Providers** tab.

Add keys or connect OAuth for each provider you use.

## Supported providers

| Provider | Connection type |
| --- | --- |
| **OpenAI** | API key; optional ChatGPT Plus/Pro OAuth |
| **Anthropic** | API key |
| **Google** | API key |
| **xAI** | API key |
| **Ollama** | Local base URL + model id |
| **LM Studio** | Local base URL + model id |
| **MLX** | Local base URL + model id (Apple Silicon) |
| **Custom local endpoints** | OpenAI-compatible base URL |

For local providers, enter the server URL (for example `http://127.0.0.1:11434` for Ollama) and pick or type a model id. Use **Refresh models** when the local server lists available models.

## ChatGPT Plus / Pro (OAuth)

OpenAI supports connecting a **ChatGPT subscription** instead of a pay-per-token API key. Use **Connect ChatGPT Plus / Pro** in the OpenAI provider section.

If the consent screen shows a disabled **Continue** button, enable **Device code authorization for Codex** in ChatGPT settings. See [Enable device code authorization for Codex](/troubleshooting/chatgpt-codex-device-authorization).

## Security notes

- Do not put API keys in `~/.orion/settings.json` or workspace settings files.
- Jupyter tokens used to connect Orion to a server are separate from LLM provider credentials.
- Revoke keys in your provider's dashboard if you suspect exposure.

## After adding keys

1. Open **Settings → Models** to pin favorite models.
2. Pick a model in the chat input.
3. Start in **Ask** mode if you want read-only answers first.

See [Models and tool approval](/configuration/models-and-tool-approval).

## Related

- [Chat overview](/ai-assistant/chat-overview)
- [Enable device code authorization for Codex](/troubleshooting/chatgpt-codex-device-authorization)

---

*Last updated May 2026.*
