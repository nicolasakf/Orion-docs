# Your first Orion session

Follow these steps after [installing Orion](/getting-started/install) to connect Jupyter, open a workspace, run a notebook cell, and try the assistant.

## Before you start

- Orion is running locally (`orion` in a terminal) or you opened [app.orion-agent.ai](https://app.orion-agent.ai).
- If you used the CLI, Orion may have already connected to its managed Jupyter server. If you see a green check on step 1 in the **Get started** card, skip to step 2.

Managed files are stored under:

- **macOS / Linux:** `~/.orion`
- **Windows:** `%USERPROFILE%\.orion`

## Step 1 — Connect to Jupyter

Orion needs a Jupyter server to run notebooks, browse files, and use the integrated terminal.

### If you ran `orion` (recommended)

The CLI starts Jupyter and opens Orion already connected. You should see step 1 marked complete in the **Get started** card.

### If you connect manually

1. Open a terminal.
2. Start Jupyter with CORS allowed so Orion can connect:

   **macOS / Linux (bash/zsh):**

   ```bash
   jupyter server --ServerApp.allow_origin='*'
   ```

   **Windows (PowerShell):**

   ```powershell
   jupyter server --ServerApp.allow_origin='*'
   ```

3. Copy the URL with token from the terminal output, for example:

   ```
   http://127.0.0.1:8888/?token=0123456789abcdef
   ```

4. In Orion, click the **kernel selector** in the toolbar and paste the URL to connect.

For more detail, see [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter).

## Step 2 — Open a workspace folder

1. In the **Files** panel on the left, browse to a project folder on your machine.
2. Open the folder so Orion can list notebooks and other files.

When a workspace is open, step 2 in the **Get started** card shows a checkmark and the card dismisses on its own.

## Step 3 — Open and run a notebook

1. In the Files panel, click a `.ipynb` file (or create one from the empty editor).
2. Select a **kernel** from the toolbar if prompted.
3. Click a code cell and press **Shift + Enter** to run it and move to the next cell.

If outputs appear, Jupyter and the kernel are working.

## Step 4 — Add a provider (for chat)

1. Open **Settings** (gear icon).
2. Go to **Providers**.
3. Add an API key for your preferred provider (OpenAI, Anthropic, Google, and others are supported).

See [API keys and providers](/configuration/api-keys-and-providers) for local models and ChatGPT OAuth.

## Step 5 — Try the assistant

1. Open the **chat** panel on the right.
2. Choose a **model** from the picker at the bottom.
3. Ask a question about your notebook, for example: "Summarize what the last cell produced."

Use `@` to attach files, cells, or variables to your message. Press **I** with a cell selected to mention that cell quickly.

## Next steps

- [What is Orion?](/getting-started/what-is-orion) — how Notebook view, App View, and chat fit together
- [App View](/notebooks/app-view) — build a dashboard from notebook content
- [Orion UI (`orion_ui`)](/notebooks/orion-ui) — interactive controls in code cells
- [Chat overview](/ai-assistant/chat-overview) — modes, slash commands, and skills

---

*Last updated May 2026.*
