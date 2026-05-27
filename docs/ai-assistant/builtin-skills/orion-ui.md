# Built-in skill: Orion UI

The **orion-ui** built-in teaches Orion's assistant to build **interactive notebook controls in Python** using the `orion_ui` package. Sliders, selects, buttons, cards, and forms render as native Orion components in Notebook view and [App View](/notebooks/app-view).

Load it with **`/orion-ui`** or ask: "Add sliders to control this analysis."

## When to use Orion UI

Use Python `orion_ui` when controls must **talk to the kernel** — read/write state, rerun cells from buttons, drive analysis parameters.

Use [App View metadata](/notebooks/app-view) for **layout** (sections, grids, tabs). Use **both** when a notebook needs interactive controls inside a polished dashboard.

| Task | Use |
| --- | --- |
| Sliders, selects, forms, run buttons | `orion_ui` in a code cell |
| Sections, cards, tabs, embedding outputs | App View `metadata.orion.appView.schema` |
| Styling hooks | `class_name` on components + CSS in `appView.css` |

The **create-app** built-in handles App View; **orion-ui** handles Python-authored UI. They often load together.

## Install

**Orion-managed Python** (`~/.orion/runtime/venv` on macOS/Linux): `orion-ui` installs automatically at startup. No extra step.

**Your own kernel** (conda, venv, system Python):

```bash
python -m pip install orion-ui
```

Then restart the kernel. See [Fix: orion_ui import error](/troubleshooting/orion-ui-import-error).

**Windows:** Same `python -m pip install orion-ui` in the environment attached to your Jupyter kernel (PowerShell or cmd).

## Basic workflow

1. `import orion_ui as ui`
2. Build components: `ui.slider`, `ui.select`, `ui.card`, `ui.stack`, etc.
3. Put the **final component expression** as the last line of the cell so Jupyter displays the MIME output.
4. Read values in later cells with `ui.get("key")` or `ui.state()`.

```python
import orion_ui as ui

temperature = ui.slider(
    "temperature",
    label="Temperature",
    min=0,
    max=2,
    default_value=0.7,
    step=0.1,
)

model = ui.select(
    "model",
    ["gpt-4.1", "claude-sonnet"],
    label="Model",
    default_value="gpt-4.1",
)

ui.card(
    ui.stack(model, temperature),
    title="Controls",
)
```

Later cell:

```python
temperature = ui.get("temperature")
model = ui.get("model")
```

## State behavior

- **`default_value`** — Initial value. Rerunning the UI cell **preserves** the user's current selection.
- **`value=`** — Forces or resets state on rerun; use only when intentional.
- **`ui.set()`** — Replaces state; do not use it to define defaults (use `default_value` or `ui.define_default()`).
- Control changes do **not** auto-rerun downstream cells. Rerun manually or add a button with an execute action.

## Layout and control helpers

**Containers:** `ui.page`, `ui.stack`, `ui.grid`, `ui.section`, `ui.card`, `ui.tabs`, `ui.accordion`, `ui.collapsible`, `ui.carousel`, `ui.separator`

**Controls:** `ui.input`, `ui.textarea`, `ui.select`, `ui.slider`, `ui.checkbox`, `ui.switch`, `ui.radio_group`, `ui.toggle`, `ui.toggle_group`, `ui.calendar`, `ui.date_picker`, `ui.date_time_picker`, `ui.button`

**Display:** `ui.label`, `ui.badge`, `ui.alert`, `ui.progress`, `ui.avatar`, `ui.popover`, `ui.hover_card`, `ui.tooltip`, `ui.markdown_cell`, `ui.output`

Optional `class_name="..."` on any component; define matching selectors in `metadata.orion.appView.css`.

Full parameter reference: [Orion UI component reference](/notebooks/orion-ui-component-reference).

## Run cells from a button

```python
ui.button(
    "Run analysis",
    action={"type": "execute_cells", "cellIds": ["stable-orion-cell-id"]},
)
```

Target cell ids must exist in `cells[i].metadata.orion.id`. Ask the assistant to inspect ids — never invent them. See [Orion metadata](/ai-assistant/builtin-skills/orion-metadata).

## Charts

Use Plotly, Altair, Vega-Lite, or your usual libraries. For Plotly styling aligned with Orion:

```python
ui.theme.plotly()
```

Do not build custom chart systems from Orion UI primitives. Plotly version issues: [Plotly version compatibility](/troubleshooting/plotly-version-compatibility).

## App View integration

1. Create UI in a code cell with `orion_ui` and run it.
2. In App View schema, reference the output with `Output` and `cellId` / `outputIndex`.
3. Do not duplicate interactive controls in App View metadata alone — those primitives are static/local-only.

Sample notebook in the Orion repo: `public/test-files/orion_ui_sample.ipynb`.

## Limitations (v1)

- Renders as `application/vnd.orion.ui+json` in Orion; other frontends see HTML/text fallbacks.
- JSON-serializable props only — no arbitrary React, inline `style`, or runtime Tailwind class strings.
- Date components use ISO-like `YYYY-MM-DD` strings in Python state.
- Prefer `orion_ui` over `ipywidgets` for Orion-native notebooks unless you need generic Jupyter compatibility.

## What to ask the assistant

- "Add temperature and model sliders above the chart cell."
- "Wire a Run button to execute the analysis cell."
- "Style these cards with custom CSS in App View."
- "Read slider values in the next cell and plot the result."

## Related

- [Orion UI (`orion_ui`)](/notebooks/orion-ui) — user guide
- [Orion UI component reference](/notebooks/orion-ui-component-reference)
- [Create app](/ai-assistant/builtin-skills/create-app)
- [App View](/notebooks/app-view)
- [Built-in skills hub](/ai-assistant/builtin-skills)

---

*Last updated May 2026.*
