# Built-in skill: Orion metadata

The **orion-metadata** built-in is Orion's reference for **notebook and cell metadata** under `metadata.orion`. The assistant loads it when editing App View layouts, sub-agent options, cell visibility, or any notebook JSON that must stay compatible with Orion.

Load it with **`/orion-metadata`** or ask the assistant to update App View schema, cell state, or sub-agent metadata.

## Why metadata matters

Orion notebooks carry structured data beside cell source code:

- **Notebook-level** `metadata.orion` — App View layout, sub-agent options
- **Cell-level** `cells[i].metadata.orion` — stable cell ids, visibility, execution UI state

The assistant edits these fields through notebook tools. This skill keeps keys valid and prevents accidental damage to protected fields.

## Notebook-level fields

### `metadata.orion.appView`

Controls [App View](/notebooks/app-view) rendering.

| Key | Purpose |
| --- | --- |
| `appView.schema` | Declarative layout tree (version `1`, built-in primitives only) |
| `appView.css` | Optional scoped CSS for semantic `className` hooks |

App View is **layout and composition**. Interactive sliders, buttons, and forms belong in Python [`orion_ui`](/notebooks/orion-ui) cells; App View references their outputs with `Output`.

Legacy keys `appView.grid`, `appView.layout`, and `cell.metadata.orion.app` may exist in old notebooks but are **ignored** by the current renderer.

### `metadata.orion.subagent`

Options for [sub-agent](/ai-assistant/sub-agents) notebooks:

| Key | Type | Purpose |
| --- | --- | --- |
| `subagent.model` | string | Pin a model catalog id for this sub-agent |
| `subagent.disable-model-invocation` | boolean | When `true`, slash command works but parent won't auto-delegate |

Do not write legacy `subagent.autoDiscover`.

## Cell-level fields

### `cells[i].metadata.orion.id` (protected)

Stable Orion cell identifier. **Never edit manually** — the assistant refuses to set, replace, or delete this field. Orion may generate ids during editor flows.

When you need a cell id for App View or `orion_ui` button actions, ask the assistant to **read** existing ids from metadata.

### `cells[i].metadata.orion.cellState`

UI and execution presentation for a cell:

**Visibility flags (boolean):**

- `isInputHidden`, `isOutputHidden`, `isWholeCellHidden`
- `isMuted`, `isInputCollapsed`, `isOutputCollapsed`

**Execution info** under `cellState.executionInfo`:

- `status`: `idle` | `running` | `success` | `error`
- Timing fields: `startTime`, `endTime`, `lastExecuted`, `duration`
- Optional `statistics`: `wallTime`, `cpuTime`, `memoryUsage`, etc.

## App View schema primitives (v1)

Supported node `type` values include:

**Layout:** `Page`, `Stack`, `Grid`, `Section`, `Card`, `Tabs`, `Accordion`, `Collapsible`, `Carousel`, `Separator`

**Notebook content:** `MarkdownCell`, `Output`

**Static controls (local-only):** `Input`, `Select`, `Slider`, `Button`, and others — display compatibility only; real interactivity uses `orion_ui`.

Each node may have `props` (no inline `style`) and `children`. Notebook references use `cellId` and `outputIndex`.

See [Create app](/ai-assistant/builtin-skills/create-app) and [App View](/notebooks/app-view) for user-facing layout workflows.

## Legacy and internal keys

Do not author these in new notebooks:

- `cell.metadata.orion.app` — use `appView.schema` instead
- `cell.metadata.orion.cellType = "raw"` — prefer `cellState`
- Old top-level visibility flags under `cell.metadata.orion`
- `cell.metadata.orion._parseError` — internal recovery marker

## What you can ask the assistant

- "Add this chart output to App View in a two-column grid."
- "Hide input for all setup cells in presentation mode."
- "Set this sub-agent to use Claude and only run when I slash-invoke it."
- "Show me the Orion cell id for the plot cell."

Invalid schema values render a non-crashing error panel in App View — see [Fix App View schema errors](/troubleshooting/app-view-schema-errors).

## Related

- [App View](/notebooks/app-view)
- [Create app](/ai-assistant/builtin-skills/create-app)
- [Orion UI](/notebooks/orion-ui)
- [Built-in skills hub](/ai-assistant/builtin-skills)

---

*Last updated May 2026.*
