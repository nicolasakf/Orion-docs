# Restore user settings from backup

Orion saves a copy of your **user settings** before each overwrite of `settings.json`. If a bad edit broke preferences or JSON syntax, you can roll back to an earlier backup.

This guide covers **global user settings** only. Workspace overrides in `.orion/settings.json` inside a project folder are not backed up automatically.

## When you need this

- Settings stopped loading after editing **Settings → Settings JSON**.
- You want to undo a recent change to chat, editor, or agent defaults.
- Orion shows a settings load error and you need a known-good file.

## Where backups are stored

Orion keeps up to **30** timestamped copies here:

| Platform | Backup folder | Active settings file |
| --- | --- | --- |
| **macOS / Linux** | `~/.orion/settings-backup/` | `~/.orion/settings.json` |
| **Windows** | `%USERPROFILE%\.orion\settings-backup\` | `%USERPROFILE%\.orion\settings.json` |

Backup filenames look like `settings-2026-06-06T13-00-45Z.json` (UTC time in the name).

Backups are created when Orion saves user settings through the app (Settings UI, Settings JSON editor, or the assistant). Copying files manually does not create a new backup.

## Steps

### Option A — Ask the Orion assistant (recommended)

1. Load the built-in skill with **`/orion-settings`**, or ask in chat: *"Restore my user settings from the most recent backup."*
2. If you need a specific point in time, say when the good settings were last working.
3. When the assistant finishes, **refresh the Orion window** so the UI reloads the restored file.

### Option B — Restore manually

1. **Quit editing** `settings.json` in Orion so you do not overwrite the file again mid-restore.

2. **List backups** (newest first) and note the file you want:

   **macOS / Linux (bash/zsh):**

   ```bash
   ls -lt "$HOME/.orion/settings-backup"/settings-*.json
   ```

   **Windows (PowerShell):**

   ```powershell
   Get-ChildItem "$env:USERPROFILE\.orion\settings-backup\settings-*.json" |
     Sort-Object LastWriteTime -Descending
   ```

3. **Optional:** copy today's broken file aside so you can undo the restore:

   **macOS / Linux:**

   ```bash
   cp "$HOME/.orion/settings.json" \
     "$HOME/.orion/settings-backup/settings-manual-$(date -u +%Y-%m-%dT%H-%M-%SZ).json"
   ```

   **Windows (PowerShell):**

   ```powershell
   $stamp = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH-mm-ssZ")
   Copy-Item "$env:USERPROFILE\.orion\settings.json" `
     "$env:USERPROFILE\.orion\settings-backup\settings-manual-$stamp.json"
   ```

4. **Copy the chosen backup** over the active settings file. Replace the example filename with yours:

   **macOS / Linux:**

   ```bash
   cp "$HOME/.orion/settings-backup/settings-2026-06-06T13-00-45Z.json" \
     "$HOME/.orion/settings.json"
   ```

   **Windows (PowerShell):**

   ```powershell
   Copy-Item "$env:USERPROFILE\.orion\settings-backup\settings-2026-06-06T13-00-45Z.json" `
     "$env:USERPROFILE\.orion\settings.json" -Force
   ```

   To restore the **newest** backup in one step:

   **macOS / Linux:**

   ```bash
   latest="$(ls -t "$HOME/.orion/settings-backup"/settings-*.json | head -1)"
   test -n "$latest" && cp "$latest" "$HOME/.orion/settings.json"
   ```

   **Windows (PowerShell):**

   ```powershell
   $latest = Get-ChildItem "$env:USERPROFILE\.orion\settings-backup\settings-*.json" |
     Sort-Object LastWriteTime -Descending |
     Select-Object -First 1
   if ($latest) { Copy-Item $latest.FullName "$env:USERPROFILE\.orion\settings.json" -Force }
   ```

5. **Refresh the Orion window** (browser reload or restart the desktop app). Files changed outside the app are not picked up until Orion reloads settings.

6. If settings still fail to load, try an **older** backup or fix JSON syntax in the restored file.

## Notes

- **Workspace settings** live in `<your-project>/.orion/settings.json`. To revert those, edit or delete that file in the project — backups in `settings-backup` do not include workspace overrides.
- **API keys and OAuth tokens** are stored in `credentials.json`, not in settings backups. Restoring settings does not remove or restore provider credentials.
- If `settings-backup` is empty, Orion has nothing to restore from. Use **Settings → Export** in the future, or rebuild preferences from [Workspace settings](/configuration/workspace-settings) and the Settings UI.
- If you set a custom data directory with **`ORION_HOME_DIR`**, use that path instead of `~/.orion` or `%USERPROFILE%\.orion`.

## Related

- [Built-in skill: Orion settings](/ai-assistant/builtin-skills/orion-settings)
- [Workspace settings](/configuration/workspace-settings)
- [Advanced settings keys](/configuration/settings-json-advanced-keys)

---

*Last updated June 2026.*
