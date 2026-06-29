# Advanced settings keys (JSON)

This page describes Orion settings keys that are stored in JSON and are useful for fine-grained control. Some are available in the Settings UI; others are JSON-only. Use them in `~/.orion/settings.json` or `<workspace>/.orion/settings.json` when you need project-specific defaults or values the UI does not expose yet.

For file paths, merge order, and safe editing, start with [Workspace settings](/configuration/workspace-settings). You can also load **`/orion-settings`** in chat and ask the assistant to change specific keys.

## When you need this

- Tuning agent context compaction or tool limits for large repos.
- Standardizing notebook output collapse, plot height, or export fonts per project.
- Setting default panel sizes or sidebar tabs via committed workspace overrides.

## Notes

- Values must match the types and ranges below. Invalid JSON may fail to load; partial workspace files are merged with defaults.
- Changing `agent.filesystem.blockedBashCommandPatterns` affects Ask-mode shell safety — use valid regular-expression sources only.
- Most users should change `chat`, `editor`, empty editor shortcuts, and `notebook.presentationHideAllCellInputs` through the UI or simple overrides first.

## `chat.communicationStyle`

| Value | Effect |
| --- | --- |
| `default` | Minimal narration around tool calls |
| `narrative` | Step-by-step before and after each tool call |
| `friendly` | Warm, encouraging tone |
| `pragmatic` | Direct; only essential information |

Default: `default`.

## `notebook.output`

Controls how notebook outputs render (not the `.ipynb` file itself).

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `textOutputAutoCollapseThreshold` | integer | `2000` | Characters above which text outputs auto-collapse |
| `collapsedHeightDefaultPx` | integer | `192` | Default collapsed output height (px) |
| `collapsedHeightMinPx` | integer | `64` | Minimum collapsed height (px) |
| `defaultPlotHeightPx` | integer | `360` | Default Plotly chart height |
| `plotMinResizeWidthPx` | integer | `160` | Minimum Plotly width when resizing |
| `plotMinResizeHeightPx` | integer | `120` | Minimum Plotly height when resizing |
| `plotlyHoverCornerRatio` | number 0–1 | `0.15` | Plotly hover label rounding |
| `minimapOutputPreviewMaxLines` | integer | `4` | Lines shown in minimap output preview |
| `minimapHeadingNavigateDelayMs` | integer | `220` | Delay before minimap heading jump (ms) |
| `chartColors` | string array | 10 hex colors | Palette for table charts |

Example workspace override:

```json
{
  "version": 1,
  "overrides": {
    "notebook": {
      "output": { "defaultPlotHeightPx": 420 }
    }
  }
}
```

## `notebook.export`

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `sansFontFamily` | string | `'Saira', sans-serif` | Font stack for HTML/PDF export |

## `notebook.editor`

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `doublePressTimeoutMs` | integer | `400` | Window for double-key shortcuts (ms) |

## `editor.emptyEditor`

Controls the two shortcut cards shown when no file is open in the editor.

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `leftCard` | `recent_files`, `pinned_files`, or `pinned_workspaces` | `recent_files` | Content shown in the left empty-editor card |
| `rightCard` | `recent_files`, `pinned_files`, or `pinned_workspaces` | `pinned_files` | Content shown in the right empty-editor card |
| `maxItems` | integer 1–20 | `5` | Maximum entries shown per card |

Example workspace override:

```json
{
  "version": 1,
  "overrides": {
    "editor": {
      "emptyEditor": {
        "leftCard": "pinned_workspaces",
        "rightCard": "recent_files",
        "maxItems": 8
      }
    }
  }
}
```

## `agent.context`

Chat context and compaction behavior.

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `compactionAutoThreshold` | number 0–1 | `0.92` | Fraction of context cap that triggers auto-compaction before send |
| `compactionRetentionTurns` | integer ≥ 1 | `4` | Recent user turns kept verbatim after compaction |
| `optimizerRetentionTurns` | integer ≥ 1 | `6` | Recent user turns kept in wire payload optimizer |

## `agent.toolOutput`

Limits on tool results sent back to the model.

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `textCharBudget` | integer | `40000` | Max characters from text tool outputs |
| `imageBase64CharBudget` | integer | `100000` | Max base64 characters for image outputs |
| `maxOmittedRatio` | number 0–1 | `≈0.33` | Max fraction omitted when truncating |

## `agent.terminal`

Shell tool timing and output handling (milliseconds unless noted).

| Key | Default | Description |
| --- | --- | --- |
| `pollIntervalMs` | `150` | Poll interval for bash / await |
| `foregroundBudgetMs` | `5000` | Foreground wait before bash returns “still running” |
| `awaitBudgetMs` | `30000` | await_command wait budget |
| `maxBlockMs` | `600000` | Maximum block wait (10 minutes) |
| `outputSpillThresholdChars` | `200000` | Bash output size that spills to a file |
| `outputPreviewHeadChars` | `6000` | Head preview when spilled |
| `outputPreviewTailChars` | `6000` | Tail preview when spilled |
| `executorTimeoutMs` | `15000` | System command timeout |
| `executorAvailabilityTimeoutMs` | `3000` | Availability probe timeout |
| `executorPollIntervalMs` | `300` | Executor poll interval |
| `poolIdleTimeoutMs` | `3600000` | Idle terminal reclaim (1 hour) |
| `poolSystemSize` | `2` | Warm system terminals |
| `poolReaperIntervalMs` | `60000` | Pool reaper interval |

## `agent.search`

Grep and glob tool limits.

| Key | Default | Description |
| --- | --- | --- |
| `maxMatches` | `100` | Max grep matches returned |
| `maxLineLength` | `200` | Max grep line length |
| `globTerminalMaxResults` | `500` | Max paths from glob |
| `globMaxDisplayResults` | `100` | Max glob paths shown to the model |
| `grepTimeoutMs` | `15000` | Grep timeout |
| `whichTimeoutMs` | `3000` | `which` check timeout |

## `agent.filesystem`

| Key | Description |
| --- | --- |
| `ignoreDirs` | Directory **names** skipped in listings (e.g. `node_modules`, `.git`) |
| `binaryExtensions` | Extensions treated as binary in search (e.g. `.png`, `.pdf`) |
| `blockedBashCommandPatterns` | RegExp sources blocked in Ask-mode bash (destructive commands) |

Defaults include standard Node/Python build and cache folders. Override only when your repo needs extra ignores — use directory names, not full paths.

Example:

```json
{
  "version": 1,
  "overrides": {
    "agent": {
      "filesystem": {
        "ignoreDirs": ["node_modules", ".git", "vendor", "my-large-artifacts"]
      }
    }
  }
}
```

## `agent.web`

| Key | Default | Description |
| --- | --- | --- |
| `toolTimeoutMs` | `30000` | web_fetch / web_search timeout (ms) |
| `fetchMaxResponseBytes` | `5242880` | Max download size (5 MiB) |
| `fetchMaxRedirects` | `5` | Max HTTP redirects |
| `searchDefaultNumResults` | `8` | Default web_search result count |
| `exaMcpUrl` | `https://mcp.exa.ai/mcp` | Search MCP endpoint URL |

## `shell`

App chrome defaults. Session-only UI state may still override these until Orion persists shell settings from JSON.

### `shell.panelVisibility`

| Key | Default | Description |
| --- | --- | --- |
| `leftCollapsed` | `false` | Left sidebar collapsed |
| `rightCollapsed` | `false` | Chat sidebar collapsed |
| `bottomCollapsed` | `true` | Bottom panel collapsed |
| `isFocusMode` | `false` | Focus mode |

### `shell.panelLayout`

| Key | Default | Description |
| --- | --- | --- |
| `horizontal` | `[15, 50, 20]` | Left / center / right size weights (positive numbers) |
| `vertical` | `[70, 30]` | Main / bottom size weights |

### `shell.sidebar`

| Key | Default | Description |
| --- | --- | --- |
| `activeViews` | `["files"]` | Visible sidebar tabs: `files`, `search`, `toc`, `cpu`, `vars`, `dataSources`, `secrets` |
| `openAccordionItems` | `["files", "toc"]` | Expanded accordion sections |
| `showHiddenFiles` | `true` | Show dotfiles in file tree |
| `showMinimapOutputs` | `true` | Show outputs in notebook minimap |
| `minimapPreviewMode` | `compact` | `compact` or `miniature` |
| `isSearchCaseSensitive` | `false` | Case-sensitive sidebar search |

### `shell.chat`

| Key | Default | Description |
| --- | --- | --- |
| `maxHighlightChars` | `15000` | Max chars for syntax highlighting in chat code |
| `maxInlineLines` | `24` | Lines before inline code scrolls |
| `codeBlockInlineMaxHeightClass` | `max-h-40` | Tailwind class for tall inline code |
| `markdownTableMaxHeightClass` | `max-h-80` | Tailwind class for chat tables |
| `awaitCommandCountdownSeconds` | `30` | UI countdown for long-running commands |

### `shell` (root)

| Key | Default | Description |
| --- | --- | --- |
| `mobileBreakpointPx` | `768` | Width at or below mobile layout applies |
| `minRefreshSpinMs` | `500` | Minimum refresh spinner duration |
| `toastLimit` | `1` | Max simultaneous toasts |

## Related

- [Workspace settings](/configuration/workspace-settings)
- [Built-in skill: Orion settings](/ai-assistant/builtin-skills/orion-settings)
- [Models and tool approval](/configuration/models-and-tool-approval)

---

*Last updated June 2026.*
