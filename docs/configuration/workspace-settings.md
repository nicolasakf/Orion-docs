# Workspace settings

Orion stores preferences in JSON files. **User settings** apply everywhere; **workspace settings** override them for one project.

**API keys and OAuth tokens are never stored in these files** — they live in browser storage only.

## User settings

**Path:**

- **macOS / Linux:** `~/.orion/settings.json`
- **Windows:** `%USERPROFILE%\.orion\settings.json`

You can edit this file from **Settings → Settings JSON** in the app.

Shape:

```json
{
  "version": 1,
  "settings": {
    "appearance": { "theme": "system" },
    "chat": {
      "titleGenerationModelId": "gemini-3-flash-preview",
      "toolApprovalMode": "always_ask",
      "pinnedModelIds": [],
      "fontSize": 14
    },
    "editor": { "fontSize": 14, "wordWrap": "on", "minimapEnabled": true, "tabSize": 4, "insertSpaces": true },
    "notebook": { "scrollbarVisible": true, "presentationHideAllCellInputs": false },
    "workspace": { "pinnedDirectoryPaths": [] },
    "fileTree": { "fontSize": 14 }
  }
}
```

Do not add `providers.credentials` to this file.

## Workspace settings

**Path:** `<workspace>/.orion/settings.json` relative to your open workspace folder.

Workspace files use partial **overrides**:

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

Orion merges: **defaults → user settings → workspace overrides**.

## Merge order

1. Built-in Orion defaults
2. `~/.orion/settings.json`
3. `<workspace>/.orion/settings.json`

Workspace wins for keys it defines.

## Common overrides

| Goal | Example override path |
| --- | --- |
| Larger chat font in one repo | `overrides.chat.fontSize` |
| Team default pinned models | `overrides.chat.pinnedModelIds` |
| Hide all cell inputs in presentations | `overrides.notebook.presentationHideAllCellInputs` |
| Pin frequently opened folders | `overrides.workspace.pinnedDirectoryPaths` |

## Editing safely

1. Prefer the Settings UI for appearance, models, and providers.
2. Use workspace overrides for project-specific defaults shared via git (never commit secrets).
3. Invalid JSON may prevent settings from loading — keep `version: 1`.

## Related

- [Built-in skill: Orion settings](/ai-assistant/builtin-skills/orion-settings)
- [API keys and providers](/configuration/api-keys-and-providers)
- [Models and tool approval](/configuration/models-and-tool-approval)

---

*Last updated May 2026.*
