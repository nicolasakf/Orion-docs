# Built-in skill: Orion settings

The **orion-settings** built-in teaches Orion's assistant to **read and change settings** safely — user defaults in your home directory and workspace overrides in the open project. Use it when you want team-wide font sizes, pinned models, notebook presentation defaults, or other preferences applied through JSON.

Load it with **`/orion-settings`** or ask: "Set the chat font to 14 for this workspace."

## Settings files and precedence

Orion merges settings in this order (later wins):

1. Built-in Orion defaults
2. **User settings** — global for your account on this machine
3. **Workspace settings** — overrides for the open Jupyter workspace

### User settings path

| Platform | Path |
| --- | --- |
| **macOS / Linux** | `~/.orion/settings.json` |
| **Windows** | `%USERPROFILE%\.orion\settings.json` |

Edit from **Settings → Settings JSON** in the app, or ask the assistant to update specific keys.

### Workspace settings path

Relative to your open workspace folder:

```
.orion/settings.json
```

| Platform | Example |
| --- | --- |
| **macOS / Linux** | `/Users/you/projects/my-repo/.orion/settings.json` |
| **Windows** | `C:\Users\you\projects\my-repo\.orion\settings.json` |

Workspace files are read through Jupyter's ContentsManager, so they live in the project tree and can be committed to git (never commit secrets).

## Document shapes

**User settings** — full settings object:

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
      "insertSpaces": true,
      "unopenableFileAction": "mention_in_chat",
      "emptyEditor": {
        "leftCard": "recent_files",
        "rightCard": "pinned_files",
        "maxItems": 5
      }
    },
    "notebook": {
      "scrollbarVisible": true,
      "presentationHideAllCellInputs": false
    },
    "workspace": {
      "pinnedDirectoryPaths": [],
      "pinnedFilePaths": []
    },
    "providers": { "credentials": {} }
  }
}
```

**Workspace settings** — partial overrides (preferred):

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

Workspace files may also use `"settings"` instead of `"overrides"` for compatibility; prefer `"overrides"` when authoring new files.

## What settings control

| Section | Examples |
| --- | --- |
| `appearance.theme` | `light`, `dark`, `system` |
| `chat.titleGenerationModelId` | Model used to auto-title chats |
| `chat.toolApprovalMode` | `always_ask` or `auto_run` |
| `chat.pinnedModelIds` | Models shown pinned in the picker |
| `chat.fontSize` | Chat UI font size (10–20) |
| `chat.communicationStyle` | `default`, `narrative`, `friendly`, `pragmatic` |
| `editor.*` | Font size, word wrap, minimap, tab size, unsupported-file behavior, empty-editor shortcuts |
| `notebook.presentationHideAllCellInputs` | Hide inputs in presentation-style notebooks |
| `notebook.scrollbarVisible` | Notebook scrollbar visibility |
| `notebook.output`, `notebook.export`, `notebook.editor` | Plot/output UI, export font, editor shortcuts (see advanced doc) |
| `workspace.pinnedDirectoryPaths` / `workspace.pinnedFilePaths` | Quick-access folders and files (max 50 each) |
| `fileTree.fontSize` | File tree font size |
| `agent.*` | Context compaction, tool limits, terminal/search/filesystem/web (advanced) |
| `shell.*` | Panels, sidebar, chat chrome (advanced) |

See [Workspace settings](/configuration/workspace-settings) and [Advanced settings keys](/configuration/settings-json-advanced-keys) for paths and field-level detail. Use [Models and tool approval](/configuration/models-and-tool-approval) for UI-first model configuration.

## Security: no secrets in JSON

**API keys, OAuth tokens, and Jupyter tokens are never stored in settings files.** Local Orion stores provider credentials in `~/.orion/credentials.json` (Windows: `%USERPROFILE%\.orion\credentials.json`).

Do not ask the assistant to write `providers.credentials` into `settings.json`. If an old file contains credentials, remove them and configure providers through **Settings → API keys and providers**.

## Common workspace override examples

Larger chat font for one repo:

```json
{
  "version": 1,
  "overrides": {
    "chat": { "fontSize": 16 }
  }
}
```

Team default pinned models:

```json
{
  "version": 1,
  "overrides": {
    "chat": {
      "pinnedModelIds": ["gpt-5.4", "claude-sonnet-4-5"]
    }
  }
}
```

Hide all cell inputs for slide-style notebooks:

```json
{
  "version": 1,
  "overrides": {
    "notebook": { "presentationHideAllCellInputs": true }
  }
}
```

## Editing safely

1. Prefer the **Settings UI** for appearance, models, and providers.
2. Use workspace **overrides** for project-specific defaults shared via git.
3. Keep `"version": 1` — invalid JSON may prevent settings from loading.
4. The assistant preserves unrelated keys when merging partial updates.

## Related

- [Workspace settings](/configuration/workspace-settings)
- [Advanced settings keys](/configuration/settings-json-advanced-keys)
- [API keys and providers](/configuration/api-keys-and-providers)
- [Models and tool approval](/configuration/models-and-tool-approval)
- [Built-in skills hub](/ai-assistant/builtin-skills)

---

*Last updated June 2026.*
