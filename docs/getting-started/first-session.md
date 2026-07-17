# Your first Orion session

Follow these steps after [installing Orion](/getting-started/install) to finish onboarding, connect Jupyter, open a workspace, run a notebook cell, and try the assistant.

## Before you start

- Orion is running locally (`orion` in a terminal) or you opened [app.orion-agent.ai](https://app.orion-agent.ai).
- If you used the CLI, Orion may have already connected to its managed Jupyter server. If you see a green check on the Jupyter step in the **Get started** card, skip the manual Jupyter connection steps.

Managed files are stored under:

- **macOS / Linux:** `~/.orion`
- **Windows:** `%USERPROFILE%\.orion`

## Step 1 — Finish first-run onboarding

New installs show a short onboarding flow before the workspace opens.

1. On **Sign in to Orion**, sign in to Orion Cloud if you want cloud publishing and account features, or skip sign-in for now.
2. On **Welcome to Orion**, choose **Business** for a simpler data-and-chat workspace or **Pro** for the full notebook IDE. You can change this later in **Settings → Appearance**.
3. On **Connect an AI provider**, choose one:
   - **Log in with your ChatGPT account** to connect a ChatGPT Plus / Pro subscription. Orion opens a pop-up window and finishes setup after sign-in succeeds.
   - **Set up manually in Settings** to add an API key or local model endpoint under **Settings → Providers**.

If you connect ChatGPT during onboarding and have not pinned models yet, Orion pins a few ChatGPT models so the chat picker is ready to use.

## Step 2 — Connect to Jupyter

Orion needs a Jupyter server to run notebooks, browse files, and use the integrated terminal.

### If you ran `orion` (recommended)

The CLI starts Jupyter and opens Orion already connected. You should see the Jupyter step marked complete in the **Get started** card.

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

4. In Orion, click the **kernel selector** in the toolbar and paste the URL to connect. If you paste a base URL and token separately, Orion combines them for you.

For more detail, see [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter).

## Step 3 — Open a workspace folder

1. In the **Files** panel on the left, browse to a project folder on your machine.
2. Open the folder so Orion can list notebooks and other files.

When a workspace is open, the workspace step in the **Get started** card shows a checkmark and the card dismisses on its own.

### In the desktop app

If no project is open, select **New project** and choose a folder in the system dialog. You can create a folder directly in that dialog, then select it as your project.

To work in another Orion window, choose **File → New Window**:

- **macOS:** press **Command + Shift + N**.
- **Windows:** press **Ctrl + Shift + N**.

## Step 4 — Open and run a notebook

1. In the Files panel, click a `.ipynb` file (or create one from the empty editor).
2. Select a **kernel** from the toolbar if prompted.
3. Click a code cell and press **Shift + Enter** to run it and move to the next cell.

If outputs appear, Jupyter and the kernel are working.

## Step 5 — Add a provider (for chat)

Skip this step if you connected ChatGPT or another provider during onboarding.

1. Open **Settings** (gear icon).
2. Go to **Providers**.
3. Add an API key for your preferred provider (OpenAI, Anthropic, Google, and others are supported).

See [API keys and providers](/configuration/api-keys-and-providers) for local models and ChatGPT OAuth.

## Step 6 — Try the assistant

1. Open the **chat** panel on the right.
2. Choose a **model** from the picker at the bottom. The picker shows pinned models from **Settings → Models**.
3. Ask a question about your notebook, for example: "Summarize what the last cell produced."

Use `@` to attach files, cells, or variables to your message. Press **I** with a cell selected to mention that cell quickly.

## Next steps

- [What is Orion?](/getting-started/what-is-orion) — how Notebook view, App View, and chat fit together
- [App View](/notebooks/app-view) — build a dashboard from notebook content
- [Orion UI (`orion_ui`)](/notebooks/orion-ui) — interactive controls in code cells
- [Chat overview](/ai-assistant/chat-overview) — modes, slash commands, and skills

---

*Last updated July 2026.*
