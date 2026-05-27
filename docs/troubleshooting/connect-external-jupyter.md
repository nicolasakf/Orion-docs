# Connect to an external Jupyter server

Use this guide when Orion is **not** started by the `orion` CLI, or when you want to use an existing Jupyter installation instead of Orion's managed environment.

Orion needs a running **Jupyter Server** (1.x or 2.x) with the APIs for kernels, sessions, contents, and terminals.

## When you need this

- You ran `orion --app-only` and will connect from the UI
- You use conda, pyenv, or a corporate Jupyter setup
- Orion's managed venv is not compatible with your project
- The **Get started** card asks you to connect manually

## Quick connect

1. Open a terminal in the environment where Jupyter is installed.
2. Start the server with CORS allowed:

   **macOS / Linux (bash/zsh):**

   ```bash
   jupyter server --ServerApp.allow_origin='*'
   ```

   **Windows (PowerShell):**

   ```powershell
   jupyter server --ServerApp.allow_origin='*'
   ```

3. Copy the full URL with token from the terminal, for example:

   ```
   http://127.0.0.1:8888/?token=0123456789abcdef
   ```

4. In Orion, open the **kernel selector** in the toolbar.
5. Paste the URL and connect.

Orion saves successful connections for next time.

## CLI alternatives

| Goal | Command |
| --- | --- |
| Orion app only (no auto-start Jupyter) | `orion --app-only` |
| Default: Orion starts Jupyter and auto-connects | `orion` |
| Jupyter root = current folder | `orion --here` |

See [CLI reference](/configuration/cli-reference).

## Required Jupyter capabilities

Orion checks that the server exposes:

- Kernel specs and running kernels
- Sessions
- Contents (file browser)
- Terminals (integrated terminal panel)

If connection fails with capability errors, upgrade Jupyter Server:

```bash
python -m pip install -U jupyter_server
```

More options: [Jupyter Server installation docs](https://jupyter-server.readthedocs.io/en/latest/users/installation.html).

## Install Jupyter if missing

```bash
python -m pip install jupyter_server
```

Then run the `jupyter server` command above.

## CORS and connection errors

If the browser blocks the connection or Orion shows CORS-related errors, confirm you started Jupyter with `--ServerApp.allow_origin='*'`. See [Fix Jupyter CORS connection errors](/troubleshooting/jupyter-cors-connection-failed).

## Workspace skills in hidden folders

Skills under `.agents/skills` or `.orion/skills` may not load until Jupyter allows hidden directories. See [Jupyter hidden folders and skills](/troubleshooting/jupyter-hidden-folders-and-skills).

## Related

- [Your first session](/getting-started/first-session)
- [Kernel and Python selection](/troubleshooting/kernel-python-selection)

---

*Last updated May 2026.*
