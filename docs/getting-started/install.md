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

## Next steps

- [Your first session](/getting-started/first-session) — connect Jupyter, open a workspace, run a cell
- [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter) — manual server setup
- [CLI reference](/configuration/cli-reference) — flags, `orion config`, and uninstall

## More detail

See the full [Orion-app README](https://github.com/nicolasakf/Orion-app#quick-start) for publishing and development setup.
