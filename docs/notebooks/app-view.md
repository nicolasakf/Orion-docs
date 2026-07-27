# App View

App View turns a notebook into a polished dashboard or report: sections, cards, tabs, and embedded cell outputs—without building a separate web app.

The **`/create-app`** built-in skill teaches the assistant App View layout. Extended guide: [Built-in skill: Create app](/ai-assistant/builtin-skills/create-app).

Use this guide when you want to present notebook results in a clean layout while keeping analysis code in Notebook view.

## When to use App View

- Shareable dashboards built from existing notebook cells
- Reports that hide raw code and show narrative plus charts
- Tabbed or grid layouts over multiple outputs

App View is **layout and composition**. Interactive sliders, buttons, and forms belong in Python [`orion_ui`](/notebooks/orion-ui) cells; App View then references those outputs.

## Switch to App View

1. Open a notebook in Orion.
2. Use the **view toggle** in the toolbar to switch from **Notebook** to **App View**.

If nothing is configured yet, you see **No cells in App View** with a hint to add content from Notebook view.

In Business mode, App View is the main report surface. If the notebook has headings, Orion shows a compact table-of-contents rail beside the report; hover a marker to preview the section, or click it to jump there.

## Add content from Notebook view

1. Switch to **Notebook view**.
2. **Right-click** a cell or an output.
3. Choose **Add to App View** (or **Remove from App View** to undo).

You can also ask the assistant to build or update an App View layout from your notebook content.

## Return to the source cell

In Pro mode, right-click an App View markdown section or output and choose **Go to source** to open its original cell in Notebook view. This is useful when you spot a result that needs a code or markdown change without searching through the notebook.

## Edit App View content in Business mode

1. Open the notebook in Business mode.
2. Click **Edit** in the report toolbar.
3. Click a markdown section to edit its text.
4. Save the edit with **Save**, **Ctrl + Enter** on Windows/Linux, or **Command + Enter** on macOS.
5. Right-click a markdown section or output and choose **Remove** to hide it from App View.
6. Click **Done** when you are finished.

Use **Ctrl + Z** on Windows/Linux or **Command + Z** on macOS to restore the most recently removed App View item before you leave the report.

## How App View is stored

Layout lives in notebook metadata at `metadata.orion.appView`:

- **`schema`** — declarative tree of built-in layout primitives
- **`css`** — optional scoped styles for semantic class hooks

Orion reads this metadata when rendering App View. You do not need to edit JSON by hand unless you want fine-grained control; the assistant and context menus can manage it for you.

## Built-in layout primitives

V1 App View supports these built-in types:

**Layout and containers:** `Page`, `Stack`, `Grid`, `Section`, `Card`, `Tabs`, `Accordion`, `Collapsible`, `Carousel`, `Separator`

**Notebook content:** `MarkdownCell` (render a markdown cell by id), `Output` (render a code cell output by `cellId` and `outputIndex`)

Static control primitives exist for compatibility but **do not** replace `orion_ui` for real interactivity. Use Python `orion_ui` for sliders, selects, and run buttons, then reference the cell output with `Output`.

## App View vs Orion UI

| Concern | Use |
| --- | --- |
| Arrange sections, cards, tabs | App View metadata |
| Sliders, selects, buttons that talk to the kernel | `orion_ui` in a code cell |
| Style hooks (borders, spacing) | `metadata.orion.appView.css` — see [Style App View with CSS](/notebooks/app-view-css) |

## Example workflow

1. Write analysis cells and an `orion_ui` control cell in Notebook view.
2. Run cells so outputs exist.
3. Switch to App View or ask the assistant to create a layout with `Page` → `Section` → `Grid` → `Card` → `Output`.
4. Toggle back to Notebook view to edit code; App View updates when you rerun cells.

A sample notebook with App View and `orion_ui` is included in the Orion repository at `public/test-files/orion_ui_sample.ipynb`.

## Troubleshooting

- Empty App View → add cells via right-click in Notebook view
- **App View schema could not be rendered** → see [Fix App View schema errors](/troubleshooting/app-view-schema-errors)
- Interactive controls not updating → implement them in [`orion_ui`](/notebooks/orion-ui), not in App View metadata alone

## Related

- [Orion UI (`orion_ui`)](/notebooks/orion-ui)
- [Style App View with CSS](/notebooks/app-view-css)
- [Export notebooks](/notebooks/export-notebooks) — export from App View or Notebook view

---

*Last updated July 2026.*
