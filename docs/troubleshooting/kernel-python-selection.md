# Kernel and Python selection

Use this guide when Orion cannot find Jupyter, prompts repeatedly to create a managed environment, or you need to point the CLI at a specific Python installation.

## Use Orion's managed environment (default)

On first run, Orion may offer to create **`~/.orion/runtime/venv`** (Windows: `%USERPROFILE%\.orion\runtime\venv`) with Jupyter and `orion-ui` preinstalled.

Approve automatically:

```bash
orion --yes
```

This is the simplest path if you do not need a custom conda stack.

## Pick a different Python (npm CLI)

The **npm** `orion-notebook` CLI supports Python selection:

```bash
orion --pick-python
```

Or persist a choice:

```bash
orion config python pick
orion config python show
orion config python reset
```

The **pip** launcher does not include `config` or `--pick-python`. Use managed Jupyter or connect manually with `--app-only`.

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

*Last updated May 2026.*
