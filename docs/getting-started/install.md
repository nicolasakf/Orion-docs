# Install Orion

Orion runs locally: the `orion` CLI starts Jupyter, launches the Orion IDE in your browser, and stores managed files under `~/.orion` (Windows: `%USERPROFILE%\.orion`).

**Prerequisites:** Node.js 20+ and Python 3.8+ (for notebooks).

## Install script (macOS / Linux)

```bash
curl -fsSL https://www.orion-agent.ai/install.sh | bash
```

The script installs `orion-notebook` via npm when Node.js 20+ is available, otherwise via pip. Pin a version with `ORION_VERSION=0.5.1` or force a method with `ORION_INSTALL_METHOD=npm|pip`.

## Install via npm (recommended)

Both npm and PyPI use the package name **`orion-notebook`**:

```bash
npm install -g orion-notebook
```

## Install via pip

```bash
pip install orion-notebook
```

## Run Orion

```bash
orion
```

This opens Orion in your browser and connects to the local Jupyter server.

On first run, Orion may create a managed Python environment under `~/.orion/runtime/venv` (Windows: `%USERPROFILE%\.orion\runtime\venv`). That environment includes Jupyter and **`orion-ui`**, the library for Orion notebook UI components (`import orion_ui as ui`). You do not need a separate `pip install orion-ui` when using this default setup.

If you use your own Python or Jupyter kernel instead, install `orion-ui` into that kernel's environment. See [Fix: orion_ui import error](/troubleshooting/orion-ui-import-error).

## Hosted app

You can also use Orion without a local install at [app.orion-agent.ai](https://app.orion-agent.ai).

## Run from source (developers)

If you clone [Orion-app](https://github.com/nicolasakf/Orion-app) to run or build locally, copy `.env.example` to `.env` in the repo root before `npm install` or `npm run build`. Next.js loads `.env`, not `.env.example`. The example file includes Orion Cloud settings (API URL, Supabase) used for publish and sign-in.

**macOS / Linux:**

```bash
git clone https://github.com/nicolasakf/Orion-app.git
cd Orion-app
cp .env.example .env
npm install
```

**Windows (PowerShell):**

```powershell
git clone https://github.com/nicolasakf/Orion-app.git
cd Orion-app
Copy-Item .env.example .env
npm install
```

### Dev mode

Both commands start the Next.js dev server on port 3001 with hot reload:

| Command | What it starts | When to use |
| --- | --- | --- |
| `npm run dev` | Next.js only | UI and app work. Connect Jupyter yourself in the app. |
| `npm run dev:notebook` | Jupyter + Next.js (same bootstrap as the `orion` CLI) | Notebook and kernel work. Orion auto-connects to the local Jupyter server. |

```bash
npm run dev              # Next.js dev server only
npm run dev:notebook     # Jupyter + Next.js (recommended for notebooks)
```

For `dev:notebook`, useful flags include `--here` (Jupyter root = current directory) and `--pick-python` (interactive Python selection).

See the [Orion-app README](https://github.com/nicolasakf/Orion-app#run-from-source-developers) and [Contributing guide](https://github.com/nicolasakf/Orion-app/blob/main/CONTRIBUTING.md) for production-like CLI runs, publishing, and local development details.

## Next steps

- [Your first session](/getting-started/first-session) — connect Jupyter, open a workspace, run a cell
- [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter) — manual server setup
- [CLI reference](/configuration/cli-reference) — flags, `orion config`, and uninstall

## More detail

See the full [Orion-app README](https://github.com/nicolasakf/Orion-app#quick-start) for publishing and development setup.
