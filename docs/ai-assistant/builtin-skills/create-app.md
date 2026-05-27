# Built-in skill: Create app

The **create-app** built-in teaches Orion's assistant to build and edit **App View** layouts — polished dashboards and reports from notebook cells and outputs, stored in `metadata.orion.appView`. Use it when you want a shareable presentation layer without building a separate web app.

Load it with **`/create-app`** or ask: "Turn this notebook into a dashboard."

## What App View is

App View is Orion's **layout mode** for notebooks. Switch with the **Notebook / App View** toggle in the toolbar.

It arranges:

- Markdown narrative (`MarkdownCell`)
- Code outputs such as charts (`Output`)
- Interactive control panels from [`orion_ui`](/notebooks/orion-ui) (`Output` referencing the UI cell)

App View metadata is **declarative composition**. It does not replace Python for runtime interactivity.

## What the assistant does

With **create-app** loaded, the assistant:

1. Inspects the notebook including Orion metadata.
2. Reads stable cell ids from `cells[i].metadata.orion.id` (never invents or edits them).
3. Writes or updates `metadata.orion.appView.schema` and optional `appView.css`.
4. References existing cell outputs instead of duplicating content in metadata.

For sliders, forms, and run buttons, it should implement [`orion_ui`](/notebooks/orion-ui) in code cells first, then wire App View around those outputs.

## Quick start (UI)

1. Open a notebook with content you want to show.
2. Run cells so outputs exist.
3. In **Notebook view**, right-click a cell or output → **Add to App View**.
4. Switch to **App View** to preview.
5. Ask the assistant to refine layout (sections, grids, tabs).

If App View is empty, you see **No cells in App View** until content is added.

## Schema shape (v1)

Notebook metadata at `metadata.orion.appView`:

```json
{
  "appView": {
    "css": ".metric-card { border-color: hsl(var(--primary)); }",
    "schema": {
      "version": 1,
      "primitiveRegistry": { "source": "builtin" },
      "root": {
        "type": "Page",
        "props": { "gap": "md", "padding": "md" },
        "children": []
      }
    }
  }
}
```

Rules for v1:

- `primitiveRegistry.source` must be `"builtin"`.
- No custom primitive paths, inline `style`, or arbitrary Tailwind runtime classes.
- Use `props.className` as semantic hooks; define styles in `appView.css`.
- Legacy `appView.grid`, `appView.layout`, and `cell.metadata.orion.app` are ignored.

## Built-in primitives

**Layout and containers:** `Page`, `Stack`, `Grid`, `Section`, `Card`, `Tabs`, `Accordion`, `Collapsible`, `Carousel`, `Separator`

**Notebook content:**

- `MarkdownCell` — render markdown by `cellId` or inline `source`/`text`
- `Output` — render code output with `cellId` and zero-based `outputIndex`

**Static controls:** `Input`, `Select`, `Slider`, `Button`, etc. — local display only; **do not** use for real notebook behavior. Use `orion_ui` instead.

**Constrained props:** `gap`, `padding`, `align`, `columns`, `variant`, `size` — use supported enum values only.

## Example layout tree

```json
{
  "version": 1,
  "primitiveRegistry": { "source": "builtin" },
  "root": {
    "type": "Page",
    "props": { "gap": "lg", "padding": "md" },
    "children": [
      {
        "type": "Section",
        "props": { "title": "Overview", "gap": "md" },
        "children": [
          { "type": "MarkdownCell", "props": { "cellId": "intro" } },
          {
            "type": "Grid",
            "props": { "columns": 2, "gap": "md" },
            "children": [
              {
                "type": "Card",
                "props": { "title": "Chart" },
                "children": [
                  {
                    "type": "Output",
                    "props": { "cellId": "plot-cell", "outputIndex": 0 }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Recommended dashboard pattern

1. `Page` as root
2. `Section` blocks for major areas
3. `Grid` for comparable cards or charts
4. `Card` around dense outputs or `orion_ui` control panels
5. `MarkdownCell` for narrative text

Style with [Style App View with CSS](/notebooks/app-view-css).

## App View vs Orion UI

| Concern | Tool |
| --- | --- |
| Tabs, sections, grid of charts | App View schema |
| Sliders, selects, kernel-connected buttons | `orion_ui` Python cell |
| Custom borders and spacing | `appView.css` + `className` hooks |

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Empty App View | Add cells via right-click in Notebook view |
| Schema error panel | [Fix App View schema errors](/troubleshooting/app-view-schema-errors) |
| Controls don't update kernel | Move interactivity to [`orion_ui`](/notebooks/orion-ui) |

Sample notebook: `public/test-files/orion_ui_sample.ipynb` in the Orion repository.

## What to ask the assistant

- "Build an App View with a control panel on top and two chart cards below."
- "Add tabs for Overview and Details referencing my existing cells."
- "Hide the setup cells and show only markdown plus the final plot in App View."

## Related

- [App View](/notebooks/app-view)
- [Style App View with CSS](/notebooks/app-view-css)
- [Orion UI](/ai-assistant/builtin-skills/orion-ui)
- [Orion metadata](/ai-assistant/builtin-skills/orion-metadata)
- [Built-in skills hub](/ai-assistant/builtin-skills)

---

*Last updated May 2026.*
