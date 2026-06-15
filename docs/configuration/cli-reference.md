# CLI reference

The `orion` command starts Orion locally, manages Jupyter, and maintains cached data under your Orion home directory.

Install via [Install Orion](/getting-started/install) (`orion-notebook` on npm and PyPI).

## Orion home directory

Default location:

- **macOS / Linux:** `~/.orion`
- **Windows:** `%USERPROFILE%\.orion`

Override with environment variable **`ORION_HOME_DIR`**.

Common paths inside:

| Path | Purpose |
| --- | --- |
| `runtime/venv` | Managed Python + Jupyter + `orion-ui` |
| `runtime/jupyter-connection.json` | Auto-connect handoff from CLI |
| `app/<version>` | Downloaded app bundle (pip installs) |
| `orion.db` | Local chat history |
| `settings.json` | User settings (no API keys) |

## Main command

```bash
orion [options]
```

Starts the Orion app, starts Jupyter (unless `--app-only`), opens the browser, and connects automatically.

### Options

| Option | Description |
| --- | --- |
| `-y`, `--yes` | Approve managed setup prompts (venv, downloads) without asking |
| `--no-browser` | Start services without opening a browser |
| `--here` | Use current directory as Jupyter root instead of home |
| `--app-only` | Start Orion only; connect to existing Jupyter in the UI |
| `--pick-python` | Show Python selection menu (npm CLI only) |
| `-V`, `--version` | Print CLI version and exit |

### Environment variables

| Variable | Purpose |
| --- | --- |
| `ORION_HOME_DIR` | Override Orion data directory |
| `ORION_PORT` | Port for local Orion app server |
| `ORION_NO_BROWSER` | Same as `--no-browser` when set |
| `ORION_APP_BUNDLE_URL` | Custom app bundle URL (advanced) |
| `ORION_VERSION` | Pin version for install script |
| `ORION_INSTALL_METHOD` | Force install script method: `npm`, `pip`, or `uv` |
| `ORION_NPM_PACKAGE_SPEC` | Install-script override for npm tarballs/specs (CI) |
| `ORION_PYTHON_PACKAGE_SPEC` | Install-script override for Python wheels/specs (CI) |
| `ORION_UI_PACKAGE_SPEC` | Managed-runtime override for `orion-ui` wheels/specs (CI) |

## `orion doctor`

Diagnose installation, app bundle, Python/Jupyter, Node, PATH, and network state:

```bash
orion doctor
orion doctor --json
orion doctor --setup --json
```

Use `--setup` to run first-run setup checks without opening the browser. This may download the app bundle, portable Node, or managed Jupyter runtime if they are missing. Use `--json` for CI and support reports.

## `orion config`

**npm CLI only.** Manage CLI runtime preferences under `~/.orion/runtime`.

```bash
orion config show
orion config python show
orion config python pick
orion config python reset
```

Use `python pick` when Orion should use a specific Python installation for Jupyter instead of the managed venv. Install the required notebook packages in that Python environment first:

```bash
python -m pip install -U jupyter_server ipykernel orion-ui
```

The **pip** launcher does not include `config` or `--pick-python`; it falls back to managed Jupyter when system Jupyter is incompatible.

## `orion uninstall`

Remove cached Orion data before uninstalling the package:

```bash
orion uninstall --yes
orion uninstall --all --yes
```

| Flag | Effect |
| --- | --- |
| (default) | Remove app bundle cache for current version |
| `--all` | Remove entire `~/.orion` directory (venv, portable Node, all caches) |
| `-y`, `--yes` | Skip confirmation prompts |

Then remove the package:

```bash
npm uninstall -g orion-notebook
# or
pip uninstall orion-notebook
```

## Managed installer vs npm vs pip

| Feature | Managed installer (uv) | npm | pip |
| --- | --- | --- | --- |
| Recommended for end users | Yes | No | No |
| Ships full app bundle | Downloads on first run | Yes | Downloads on first run |
| `orion config` | No | Yes | No |
| `--pick-python` | No | Yes | No |
| Managed Jupyter + `orion-ui` sync | Yes | Yes | Yes |

## Related

- [Install Orion](/getting-started/install)
- [Fix: first-run native modules error](/troubleshooting/first-run-native-modules-error)
- [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter)
- [Kernel and Python selection](/troubleshooting/kernel-python-selection)

---

*Last updated June 2026.*
