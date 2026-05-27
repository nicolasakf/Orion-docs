# Orion UI (`orion_ui`)

Orion UI lets you build interactive notebook controls—sliders, selects, buttons, cards—in Python. Outputs render as native Orion components in Notebook view and App View.

Other Jupyter frontends may show a plain-text fallback for the same cell.

## Install

When you use Orion's default managed Python environment (`~/.orion/runtime/venv`), **`orion-ui` is installed automatically** on startup. You do not need a separate install step.

If you use your **own kernel** (conda, venv, or system Python) and see `ModuleNotFoundError: No module named 'orion_ui'`, install into that environment:

```bash
python -m pip install orion-ui
```

Then restart the kernel. See [Fix: orion_ui import error](/troubleshooting/orion-ui-import-error).

## Basic pattern

1. Import the package.
2. Build UI with helpers such as `ui.slider`, `ui.select`, and `ui.card`.
3. Put the **final component expression** as the last line of the cell so Jupyter displays it.
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

In a later cell:

```python
temperature = ui.get("temperature")
model = ui.get("model")
```

## State behavior

- **`default_value`** sets the initial value. When you rerun the UI cell, Orion **preserves** the user's current selection instead of resetting to the default.
- Use **`value=`** only when you intentionally want to force or reset state on rerun.
- Changing a control does **not** automatically rerun downstream cells. Rerun dependent cells manually, or add a button with an explicit run action (below).

## Run cells from a button

Buttons can execute specific notebook cells when those cells have stable Orion cell ids:

```python
ui.button(
    "Run analysis",
    action={"type": "execute_cells", "cellIds": ["your-cell-id"]},
)
```

Ask the assistant to inspect cell ids in notebook metadata if you need the correct id.

## Charts

Use Plotly, Altair, Vega-Lite, or your usual plotting libraries for charts. For Plotly styling aligned with Orion, call `ui.theme.plotly()` before creating figures.

Plotly version mismatches with the bundled renderer are covered in [Plotly version compatibility](/troubleshooting/plotly-version-compatibility).

## App View integration

1. Create interactive UI in a code cell with `orion_ui`.
2. Run the cell so the output exists.
3. In App View, reference that output with an `Output` primitive (see [App View](/notebooks/app-view)).

Do not recreate interactive controls only in App View metadata—they are static there. Python owns runtime behavior.

## Styling

Pass optional `class_name="..."` on components and define matching CSS in `metadata.orion.appView.css`. See [Style App View with CSS](/notebooks/app-view-css).

## Component reference

For parameter-level documentation (allowed values, defaults, date formats, and state behavior), see [Orion UI component reference](/notebooks/orion-ui-component-reference).

## Sample notebook

The Orion repository includes `public/test-files/orion_ui_sample.ipynb` demonstrating primitives, state, and App View layout.

## Related

- [App View](/notebooks/app-view)
- [Fix: orion_ui import error](/troubleshooting/orion-ui-import-error)

---

*Last updated May 2026.*
