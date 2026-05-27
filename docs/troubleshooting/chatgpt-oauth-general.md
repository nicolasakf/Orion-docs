# Fix ChatGPT OAuth issues

Use this guide when connecting **ChatGPT Plus** or **ChatGPT Pro** in **Settings → Providers → OpenAI** and the OAuth flow fails for reasons other than the disabled **Continue** button.

For the specific **device code authorization** error, see [Enable device code authorization for Codex](/troubleshooting/chatgpt-codex-device-authorization)—that fix applies first for most Plus/Pro connection failures.

## Steps

1. Confirm you sign in with the ChatGPT account that has the subscription you intend to use.
2. Complete [device code authorization](/troubleshooting/chatgpt-codex-device-authorization) if **Continue** is disabled on the consent screen.
3. In Orion, disconnect and use **Connect ChatGPT Plus / Pro** again.
4. Allow the OAuth pop-up window if your browser blocks it (same as [PDF pop-up](/troubleshooting/pdf-export-blocked) settings).
5. If the flow still fails, try an **OpenAI API key** instead under the same provider section for pay-per-token access.

## When you need this

- OAuth window closes without connecting
- Error after email verification but before Orion shows connected
- Subscription account differs from the one used in ChatGPT web

## Notes

- ChatGPT OAuth credentials stay in **browser storage** only—not in `settings.json`.
- OpenAI may change consent screen labels over time; search settings for **Codex** or **device** if menu paths differ.

## Related

- [API keys and providers](/configuration/api-keys-and-providers)
- [Enable device code authorization for Codex](/troubleshooting/chatgpt-codex-device-authorization)

---

*Last updated May 2026.*
