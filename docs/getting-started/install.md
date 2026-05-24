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

## Hosted app

You can also use Orion without a local install at [app.orion-agent.ai](https://app.orion-agent.ai).

## More detail

See the full [Orion-app README](https://github.com/nicolasakf/Orion-app#quick-start) for CLI flags, publishing, and development setup.
