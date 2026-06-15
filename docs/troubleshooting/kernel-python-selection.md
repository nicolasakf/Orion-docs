# Kernel and Python selection

Use this guide when Orion cannot find Jupyter, prompts repeatedly to create a managed environment, or you need to point the CLI at a specific Python installation.

## Use Orion's managed environment (default)

On first run, Orion may offer to create **`~/.orion/runtime/venv`** (Windows: `%USERPROFILE%\.orion\runtime\venv`) with Jupyter and `orion-ui` preinstalled.

Approve automatically:

```bash
orion --yes
```

This is the simplest path if you do not need a custom conda stack.

## Choose the right install path

| Goal | What to do |
| --- | --- |
| Let Orion manage Python/Jupyter | Use the install script, then run `orion --yes`. |
| Use an existing conda/venv/system Python | Install with npm, then run `orion config python pick`. |
| Keep Orion inside one Python environment | Activate that environment, then install Orion and Jupyter with pip. |
| Run your own Jupyter server | Start Orion with `orion --app-only` and connect manually. |

## Pick a different Python (npm CLI)

The **npm** `orion-notebook` CLI supports Python selection:

```bash
npm install -g orion-notebook
```

```bash
orion --pick-python
```

Or persist a choice:

```bash
orion config python pick
orion config python show
orion config python reset
```

Before choosing an environment, install Orion's required notebook packages in that environment:

```bash
python -m pip install -U jupyter_server ipykernel orion-ui
```

The **pip** launcher does not include `config` or `--pick-python`. Use managed Jupyter or connect manually with `--app-only`.

## Install Orion inside one Python environment

Activate the environment first, then install the launcher and notebook requirements:

```bash
python -m pip install -U orion-notebook jupyter_server ipykernel orion-ui
orion
```

Use this when you want the `orion` command tied to one conda environment or virtual environment. If you switch shells or deactivate the environment, `orion` may no longer be on PATH.

## Connect without CLI-managed Jupyter

1. Start your own server: [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter)
2. Or run Orion without starting Jupyter:

   ```bash
   orion --app-only
   ```

3. Connect via the kernel selector in the UI.

## Jupyter not installed

In the environment you want to use:

```bash
python -m pip install jupyter_server
```

Then start the server with CORS allowed. See [Fix Jupyter CORS connection errors](/troubleshooting/jupyter-cors-connection-failed).

## Incompatible Jupyter Server

Orion requires Jupyter Server APIs for kernels, sessions, contents, and terminals. Upgrade:

```bash
python -m pip install -U jupyter_server
```

## Related

- [CLI reference](/configuration/cli-reference)
- [Install Orion](/getting-started/install)

---

*Last updated June 2026.*
