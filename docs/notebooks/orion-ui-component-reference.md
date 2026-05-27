# Orion UI component reference

Python helpers from `import orion_ui as ui`. Put the final `ui.*` expression as the **last line** of a code cell.

For workflows and state rules, see [Orion UI (`orion_ui`)](/notebooks/orion-ui).

## Layout and containers

| Helper | Purpose |
| --- | --- |
| `ui.page(*children, gap=, padding=)` | Top-level page container |
| `ui.stack(*children, gap=, align=)` | Vertical stack |
| `ui.grid(*children, columns=, gap=)` | Responsive grid |
| `ui.section(*children, title=, description=, gap=, padding=)` | Titled section |
| `ui.card(*children, title=, description=, gap=)` | Framed card |
| `ui.tabs(*children, default_value=)` | Tabbed container |
| `ui.accordion(*children, default_value=, multiple=)` | Expandable sections |
| `ui.collapsible(*children, label=, title=, default_open=, content=, description=)` | Single collapsible |
| `ui.carousel(*children, orientation=, show_controls=)` | Slide carousel |
| `ui.separator()` | Horizontal rule |

## Controls

| Helper | Purpose |
| --- | --- |
| `ui.input(key, label=, default_value=, placeholder=, input_type="text")` | Text field |
| `ui.textarea(key, label=, default_value=, placeholder=)` | Multi-line text |
| `ui.select(key, options, label=, default_value=, placeholder=)` | Dropdown |
| `ui.slider(key, label=, min=, max=, default_value=, step=)` | Numeric slider |
| `ui.checkbox(key, label=, default_value=)` | Checkbox |
| `ui.switch(key, label=, default_value=)` | Toggle switch |
| `ui.radio_group(key, options, label=, default_value=)` | Radio buttons |
| `ui.toggle(key, label=, default_value=, variant=)` | Toggle button |
| `ui.toggle_group(key, options, label=, default_value=, variant=)` | Toggle button group |
| `ui.calendar(key, label=, default_value=)` | Calendar (ISO date strings) |
| `ui.date_picker(key, label=, default_value=, placeholder=)` | Date picker |
| `ui.button(label, action=, variant=, size=)` | Button; optional `execute_cells` action |

## Display

| Helper | Purpose |
| --- | --- |
| `ui.label(text)` | Static label |
| `ui.badge(text, variant=)` | Badge |
| `ui.alert(*children, title=, description=, text=, variant=)` | Alert box |
| `ui.progress(key=, label=, default_value=, max=)` | Progress bar |
| `ui.avatar(src=, alt=, fallback=, label=, size=)` | Avatar |
| `ui.popover(*children, label=, trigger=, text=, content=, description=)` | Popover |
| `ui.hover_card(*children, label=, trigger=, text=, content=, description=)` | Hover card |
| `ui.tooltip(*children, label=, trigger=, text=, content=, description=)` | Tooltip |
| `ui.markdown_cell(cell_id=, text=)` | Embed markdown cell |
| `ui.output(cell_id, output_index=0)` | Embed another cell's output |

All helpers accept optional **`class_name=`** for CSS hooks in `appView.css`.

## State API

| Function | Purpose |
| --- | --- |
| `ui.get(key, default=None)` | Read one control value |
| `ui.state()` | Read all control values as a dict |
| `ui.define_default(key, default)` | Set default only if unset |
| `ui.set(key, value)` | Replace state intentionally |

Use **`default_value=`** on controls for normal defaults. Use **`value=`** only to force reset on rerun.

## Button action example

```python
ui.button(
    "Run",
    action={"type": "execute_cells", "cellIds": ["analysis-cell-id"]},
)
```

## Charts

Use Plotly, Altair, or Vega-Lite directly. Call **`ui.theme.plotly()`** before Plotly figures for Orion styling.

## Related

- [Orion UI (`orion_ui`)](/notebooks/orion-ui)
- [Style App View with CSS](/notebooks/app-view-css)

---

*Last updated May 2026.*
