# Install Orion

Orion runs locally: the `orion` CLI starts Jupyter, launches the Orion IDE in your browser, and stores managed files under `~/.orion` (Windows: `%USERPROFILE%\.orion`).

**Prerequisites:** The install script manages Orion through uv by default. Orion can create its own Python/Jupyter runtime for notebooks on first run.

## Install script

**macOS / Linux:**

```bash
curl -fsSL https://www.orion-agent.ai/install.sh | bash
```

**Windows (PowerShell):**

```powershell
powershell -ExecutionPolicy Bypass -c "iwr -useb https://www.orion-agent.ai/install.ps1 | iex"
```

The script installs `orion-notebook` with uv-managed Python 3.12 so the `orion` command works across shells, including Windows machines with Anaconda. Pin a version with `ORION_VERSION=0.9.0` or force an advanced method with `ORION_INSTALL_METHOD=npm|pip|uv`.

## Install via npm (advanced)

Use npm only if you already want Node.js-managed global tools. Both npm and PyPI use the package name **`orion-notebook`**:

```bash
npm install -g orion-notebook
```

Use this path when you want Orion to use an existing Python or conda environment and you want Orion to remember that choice. After installing, run:

```bash
orion config python pick
orion
```

The Python environment you choose should include Jupyter and `orion-ui`:

```bash
python -m pip install -U jupyter_server ipykernel orion-ui
```

## Install via pip

Use pip only when you want Orion installed into a specific Python environment:

```bash
python -m pip install orion-notebook
```

If this environment should also run notebooks for Orion, install Jupyter and `orion-ui` there too:

```bash
python -m pip install -U jupyter_server ipykernel orion-ui
orion
```

This makes `orion` available only when that environment is active. The pip launcher does not include `orion config python pick`; use npm if you want to install Orion once and choose among multiple Python environments.

## Which install path should I use?

| Goal | Recommended path |
| --- | --- |
| I just want Orion to work | Use the install script. Orion manages uv, Node, Jupyter, and `orion-ui`. |
| I want Orion to use an existing conda/venv Python | Use `npm install -g orion-notebook`, then `orion config python pick`. |
| I want Orion installed inside one Python env | Activate that env, then run `python -m pip install orion-notebook jupyter_server ipykernel orion-ui`. |
| I already run Jupyter myself | Start Orion with `orion --app-only`, then connect to your Jupyter URL in the UI. |

## Run Orion

```bash
orion
```

This opens Orion in your browser and connects to the local Jupyter server.

On first run, Orion may create a managed Python environment under `~/.orion/runtime/venv` (Windows: `%USERPROFILE%\.orion\runtime\venv`). That environment includes Jupyter and **`orion-ui`**, the library for Orion notebook UI components (`import orion_ui as ui`). You do not need a separate `pip install orion-ui` when using this default setup.

If you use your own Python or Jupyter kernel instead, install `orion-ui` into that kernel's environment. See [Fix: orion_ui import error](/troubleshooting/orion-ui-import-error).

## Diagnose an install

If Orion does not start after installation, run:

```bash
orion doctor --json
```

To verify first-run setup without opening the browser:

```bash
orion doctor --setup --json
```

Share the JSON output when opening a GitHub issue. It redacts common home-directory paths and reports OS, PATH summary, install method, app bundle, Node, Python/Jupyter, and network checks.

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
