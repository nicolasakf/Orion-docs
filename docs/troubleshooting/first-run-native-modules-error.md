# Fix: first-run `MODULE_NOT_FOUND` for `ensure-native-modules`

Upgrade the launcher and clear the cached app bundle if Orion installs successfully but the first `orion` run fails with a missing-module error like:

```text
Error: Cannot find module '../lib/cli/app-server'
Require stack:
- ...\.orion\app\0.7.0\ensure-native-modules.js
```

Or when the Python launcher exits while **Checking platform-native dependencies...** with a `CalledProcessError`.

This usually means the cached Orion app bundle under your Orion data directory is broken or from an older release.

## When you need this

- You installed with `pip install orion-notebook` or the managed installer downloaded the app bundle on first run.
- First run downloaded the app bundle, then crashed before Orion opened in the browser.
- Every later `orion` run fails the same way until you clear the cache.

## Fix (recommended)

Run diagnostics first so the support report captures the broken state:

```bash
orion doctor --json
```

Then upgrade the launcher and let Orion download a fresh app bundle:

**macOS / Linux:**

```bash
curl -fsSL https://www.orion-agent.ai/install.sh | bash
orion doctor --setup --json
```

**Windows (PowerShell):**

```powershell
powershell -ExecutionPolicy Bypass -c "iwr -useb https://www.orion-agent.ai/install.ps1 | iex"
orion doctor --setup --json
```

If you intentionally installed with npm instead of the managed installer:

```bash
npm install -g orion-notebook@latest
orion --yes
```

## Fix: clear the cached bundle

If upgrading does not help, remove the cached app bundle and retry:

```bash
orion uninstall --yes
orion --yes
```

To delete only the app bundle manually:

- **macOS / Linux:** remove `~/.orion/app/`
- **Windows:** remove `%USERPROFILE%\.orion\app\`

Then run `orion --yes` again. Orion will re-download the bundle on the next start.

To remove all Orion data (venv, settings, chat history, and caches), use `orion uninstall --all --yes`. See the [CLI reference](/configuration/cli-reference#orion-uninstall).

## Windows + Anaconda

If you installed from an Anaconda Prompt with pip, `orion` may only be on PATH inside conda shells. For a shell-agnostic install, use the Windows install script again. It uses a uv-managed tool environment by default:

```powershell
powershell -ExecutionPolicy Bypass -c "iwr -useb https://www.orion-agent.ai/install.ps1 | iex"
```

## Native SQLite on Windows and ARM64

Orion stores chat history in SQLite. Recent releases prefer Node's built-in **`node:sqlite`** module, which does **not** require compiling native modules on Windows or ARM64.

If you still see a **better-sqlite3** rebuild warning on first run:

- Upgrade `orion-notebook` so Orion can download a newer portable Node (Node 24+) that includes `node:sqlite`.
- Clear the cached app bundle with `orion uninstall --yes`, then run `orion --yes` again.

When native chat storage cannot be initialized, Orion continues with a warning and uses an in-memory fallback (chat history will not persist across restarts until storage is fixed).

## Still stuck?

- Open an issue on [GitHub](https://github.com/nicolasakf/Orion-app/issues/new) and include the full terminal output from `orion --yes`.
- Include the output from `orion doctor --json`.
- Mention your OS, Python version, and whether you use Anaconda or Miniconda.

## Related

- [CLI reference](/configuration/cli-reference)
- [Install Orion](/getting-started/install)

---

*Last updated June 2026.*
