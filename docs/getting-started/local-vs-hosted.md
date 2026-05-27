# Local vs hosted app

Orion is available as a **local install** (CLI + browser) and as a **hosted web app**. Both give you a notebook IDE with an AI assistant; they differ in where code runs and how you connect Jupyter.

## Local install (CLI)

Run Orion on your machine with:

```bash
orion
```

The `orion` command (from the `orion-notebook` package) starts Jupyter, launches the Orion app locally, and opens your browser. Data and managed environments live under:

- **macOS / Linux:** `~/.orion`
- **Windows:** `%USERPROFILE%\.orion`

**Best for:**

- Full control over files and kernels on your computer
- Using your own Python environments or conda stacks
- Offline or air-gapped workflows (with local models such as Ollama)
- Custom workspace skills and sub-agents in project folders

See [Install Orion](/getting-started/install) and the [CLI reference](/configuration/cli-reference).

## Hosted app

Open [app.orion-agent.ai](https://app.orion-agent.ai) in your browser without installing the CLI.

**Best for:**

- Trying Orion quickly
- Machines where you cannot install Node.js or Python locally

Hosted behavior may differ from the open-source local app (for example account features or billing). The open-source tree documents **bring-your-own-key, local-first** usage; see the [Orion-app architecture](https://github.com/nicolasakf/Orion-app/blob/main/docs/architecture.md) for technical details.

## Jupyter connection

Both local and hosted Orion need a **Jupyter server** to execute notebooks:

- **CLI default:** Orion creates and connects to a managed Jupyter environment under `~/.orion/runtime/venv`.
- **Manual:** Start your own server and connect via the kernel selector. See [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter).

## Credentials and settings

- **API keys** are entered in **Settings → Providers** and stored in your browser, not in settings JSON files on disk.
- **User settings** (theme, pinned models, editor preferences) live in `~/.orion/settings.json` on the machine running the Orion app.
- **Workspace settings** can override user settings per project in `<workspace>/.orion/settings.json`. See [Workspace settings](/configuration/workspace-settings).

## Related

- [Install Orion](/getting-started/install)
- [Your first session](/getting-started/first-session)

---

*Last updated May 2026.*
