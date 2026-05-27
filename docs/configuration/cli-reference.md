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

## `orion config`

**npm CLI only.** Manage CLI runtime preferences under `~/.orion/runtime`.

```bash
orion config show
orion config python show
orion config python pick
orion config python reset
```

Use `python pick` when Orion should use a specific Python installation for Jupyter instead of the managed venv.

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

## npm vs pip

| Feature | npm | pip |
| --- | --- | --- |
| Ships full app bundle | Yes | Downloads on first run |
| `orion config` | Yes | No |
| `--pick-python` | Yes | No |
| Managed Jupyter + `orion-ui` sync | Yes | Yes |

## Related

- [Install Orion](/getting-started/install)
- [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter)
- [Kernel and Python selection](/troubleshooting/kernel-python-selection)

---

*Last updated May 2026.*
