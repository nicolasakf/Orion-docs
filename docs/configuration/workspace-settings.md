# Workspace settings

Orion stores preferences in JSON files. **User settings** apply on your machine everywhere you use Orion; **workspace settings** override them for one project.

**API keys and OAuth tokens are never stored in settings files.** Local Orion stores provider credentials separately in `~/.orion/credentials.json` (Windows: `%USERPROFILE%\.orion\credentials.json`).

## When you need this

- You want the same chat font, pinned models, or notebook defaults for everyone on a team repo.
- You prefer editing JSON over the Settings UI for a one-off tweak.
- You are sharing project defaults via git in `.orion/settings.json`.

For appearance, models, and providers, use **Settings** in the app first. Use JSON when you need project-specific overrides or keys that are not in the UI yet (see [Advanced settings keys](/configuration/settings-json-advanced-keys)).

## User settings

### Path

| Platform | Path |
| --- | --- |
| **macOS / Linux** | `~/.orion/settings.json` |
| **Windows** | `%USERPROFILE%\.orion\settings.json` |

**Windows (full path example):** `C:\Users\<username>\.orion\settings.json`

You can edit this file from **Settings → Settings JSON** in the app.

### Shape

User files must include `"version": 1` and a full `"settings"` object. If you omit keys, Orion fills them from built-in defaults when the file loads.

```json
{
  "version": 1,
  "settings": {
    "appearance": { "theme": "system" },
    "chat": {
      "titleGenerationModelId": "gemini-3.1-flash-lite",
      "toolApprovalMode": "always_ask",
      "pinnedModelIds": [],
      "fontSize": 12,
      "communicationStyle": "default"
    },
    "fileTree": { "fontSize": 12 },
    "editor": {
      "fontSize": 12,
      "wordWrap": "off",
      "minimapEnabled": false,
      "tabSize": 2,
      "insertSpaces": true
    },
    "notebook": {
      "scrollbarVisible": true,
      "presentationHideAllCellInputs": false
    },
    "workspace": { "pinnedDirectoryPaths": [] },
    "providers": { "credentials": {} }
  }
}
```

Do not add real values under `providers.credentials`. Leave it `{}` or omit credentials entirely.

## Workspace settings

### Path

Relative to your open workspace folder:

```
.orion/settings.json
```

| Platform | Example |
| --- | --- |
| **macOS / Linux** | `/Users/you/projects/my-repo/.orion/settings.json` |
| **Windows** | `C:\Users\you\projects\my-repo\.orion\settings.json` |

Workspace files use partial **overrides** — only include keys you want to change:

```json
{
  "version": 1,
  "overrides": {
    "chat": {
      "fontSize": 14,
      "pinnedModelIds": ["gpt-5.4", "claude-sonnet-4-5"]
    }
  }
}
```

Orion merges: **built-in defaults → user settings → workspace overrides**. Workspace wins for any key it defines.

Workspace files may also use `"settings"` instead of `"overrides"` for compatibility; prefer `"overrides"` for new files.

## Settings sections (overview)

| Section | What it controls |
| --- | --- |
| `appearance` | App theme: `light`, `dark`, or `system` |
| `chat` | Title-generation model, tool approval (`always_ask` / `auto_run`), pinned models, chat font size (10–20), agent communication style |
| `fileTree` | Left sidebar file list font size (10–20) |
| `editor` | Code/markdown editor font size (10–28), word wrap, minimap, tab size, spaces vs tabs |
| `notebook` | Scrollbar, presentation mode (hide cell inputs), plus output/plot/export/editor tuning (see advanced doc) |
| `workspace` | Pinned folder paths in the workspace picker (max 50) |
| `agent` | Assistant context compaction, tool output limits, terminal/search/filesystem/web tool behavior (advanced; JSON only today) |
| `shell` | Panel layout, sidebar tabs, chat code-block display, mobile breakpoint (advanced; JSON only today) |
| `providers` | Safe credential summaries and added provider ids only — real credentials stay in `credentials.json` |

## Common overrides

| Goal | Example override path |
| --- | --- |
| Larger chat font in one repo | `overrides.chat.fontSize` |
| Team default pinned models | `overrides.chat.pinnedModelIds` |
| Auto-run tools in a sandbox repo | `overrides.chat.toolApprovalMode` → `"auto_run"` |
| Hide all cell inputs in presentations | `overrides.notebook.presentationHideAllCellInputs` |
| Pin frequently opened folders | `overrides.workspace.pinnedDirectoryPaths` |
| Friendlier agent tone | `overrides.chat.communicationStyle` → `"friendly"` |
| Stricter grep result cap for a huge repo | `overrides.agent.search.maxMatches` |

## Editing safely

1. Prefer the **Settings UI** for appearance, models, and providers.
2. Use workspace **overrides** for project-specific defaults you can commit to git (never commit secrets).
3. Keep `"version": 1`. Invalid JSON may prevent settings from loading.
4. After hand-editing JSON, reload the app or reconnect if changes do not appear immediately.
5. Ask Orion’s assistant with **`/orion-settings`** to merge partial updates without wiping unrelated keys.

## Related

- [Advanced settings keys](/configuration/settings-json-advanced-keys) — `agent`, `shell`, and extended `notebook` fields
- [Built-in skill: Orion settings](/ai-assistant/builtin-skills/orion-settings)
- [API keys and providers](/configuration/api-keys-and-providers)
- [Models and tool approval](/configuration/models-and-tool-approval)

---

*Last updated June 2026.*
