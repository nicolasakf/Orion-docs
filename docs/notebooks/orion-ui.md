# Orion UI (`orion_ui`)

Orion UI lets you build interactive notebook controls and displays, including sliders, selects, buttons, cards, and DataFrame tables, in Python. Outputs render as native Orion components in Notebook view and App View.

The **`/orion-ui`** built-in skill teaches the assistant this workflow. Extended guide: [Built-in skill: Orion UI](/ai-assistant/builtin-skills/orion-ui).

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
- Changing a control reruns cells only when you add an explicit `on_change`
  action. Controls without it keep the current state-only behavior.

## Run cells when a control changes

Every user-editable, state-bound control supports `on_change`:

```python
ui.date_picker(
    "start_date",
    label="Start date",
    on_change={
        "type": "execute_cells",
        "cellIds": ["your-cell-id"],
    },
)
```

Orion saves the new value to Python state before running the target cells.
Selections, presets, and keyboard nudges run immediately. Typing waits 500 ms
after the latest edit, while slider and date-range dragging wait 250 ms. Set
`debounce_ms=0` for immediate execution or use another non-negative
millisecond value. Date ranges run only after both endpoints are selected.

The supported helpers are `ui.input`, `ui.textarea`, `ui.select`, `ui.slider`,
`ui.checkbox`, `ui.switch`, `ui.radio_group`, `ui.toggle`, `ui.toggle_group`,
`ui.calendar`, `ui.date_picker`, `ui.date_range_slider`, and
`ui.date_time_picker`. The date-time picker applies the same action to its
date, start-time, and end-time values.

## Run cells from a button

Buttons can execute specific notebook cells when those cells have stable Orion cell ids:

```python
ui.button(
    "Run analysis",
    action={"type": "execute_cells", "cellIds": ["your-cell-id"]},
)
```

Ask the assistant to inspect cell ids in notebook metadata if you need the correct id.
Use a button instead of `on_change` when the calculation is expensive or the
action is destructive.

## Charts

Use Plotly, Altair, Vega-Lite, or your usual plotting libraries for charts. For Plotly styling aligned with Orion, call `ui.theme.plotly()` before creating figures.

Plotly version mismatches with the bundled renderer are covered in [Plotly version compatibility](/troubleshooting/plotly-version-compatibility).

## DataFrame tables

Use `ui.table()` when you want to inspect a pandas DataFrame without sending the full data set to the browser. Orion loads a bounded page or scroll window, then sends filtering, search, sorting, grouping, stats, and export requests back to the Python kernel.

```python
import pandas as pd
import orion_ui as ui

df = pd.read_csv("orders.csv")

ui.table(
    df,
    source="df",
    page_size=50,
    column_descriptions={
        "order_total": "Total order value after discounts",
        "region": "Sales territory for the customer account",
    },
    default_filters=[
        {"column": "region", "operation": "equals", "value": "North"},
    ],
    default_sort={"column": "order_total", "direction": "desc"},
)
```

The `source` argument is required. Use the Python expression that names or recreates the DataFrame, such as `"df"` or `"orders_df"`. Orion uses it when saving table views so the output metadata can include readable pandas expressions for filters and sorts.

Use `column_descriptions` when table headers need plain-language definitions. Keys should match DataFrame column names after string conversion. Use `"__index__"` to describe the index column.

In the table, click cells to select them. Hold **Command** on macOS or **Ctrl** on Windows/Linux to add or remove cells from the selection. The footer shows the selected-cell count; for numeric selections, choose **Sum**, **Mean**, or **Median** there when you need a quick aggregate. The column-width control cycles through fitting columns to titles, fitting them to the loaded cell contents, and restoring the previous widths.

Use `default_filters` and `default_sort` when the table should open in a
specific view. Resetting the table to **Default** restores those values. Filter
controls match the pandas column type: text columns support text matching,
numeric and date columns support comparisons and inclusive ranges, boolean
columns use true/false choices, and small categorical columns support selecting
multiple values. See the [Orion UI component reference](/notebooks/orion-ui-component-reference#ui-table-dataframe-source-title-none-mode-paginated-page-size-50-show-index-true-max-cell-chars-200-column-descriptions-none-default-filters-none-default-sort-none-class-name-none) for the accepted filter shapes.

For very large DataFrames, keep the default `mode="paginated"` or use `mode="virtual"` when you prefer scrolling through windows:

```python
ui.table(df, source="df", mode="virtual", page_size=100)
```

The first version supports pandas DataFrames only. To use a Polars table or another DataFrame object, convert it to pandas before passing it to `ui.table()`.

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

*Last updated August 2026.*
