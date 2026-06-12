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

- You installed with `pip install orion-notebook` or the Windows install script fell back to pip.
- First run downloaded the app bundle, then crashed before Orion opened in the browser.
- Every later `orion` run fails the same way until you clear the cache.

## Fix (recommended)

Upgrade the launcher and let Orion download a fresh app bundle:

**macOS / Linux:**

```bash
pip install -U orion-notebook
orion --yes
```

**Windows (PowerShell):**

```powershell
pip install -U orion-notebook
orion --yes
```

If you installed with npm instead of pip:

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

If you installed from an Anaconda Prompt, `orion` may only be on PATH inside conda shells. For a shell-agnostic install, use the Windows install script again (it prefers **uv** when conda is detected), or install manually:

```powershell
powershell -ExecutionPolicy Bypass -c "iwr -useb https://www.orion-agent.ai/install.ps1 | iex"
```

## Still stuck?

- Open an issue on [GitHub](https://github.com/nicolasakf/Orion-app/issues/new) and include the full terminal output from `orion --yes`.
- Mention your OS, Python version, and whether you use Anaconda or Miniconda.

## Related

- [CLI reference](/configuration/cli-reference)
- [Install Orion](/getting-started/install)

---

*Last updated June 2026.*
