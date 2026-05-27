# Orion UI component reference

Reference for Python helpers from `import orion_ui as ui`. Put the final `ui.*` expression as the **last line** of a code cell so Orion displays the UI output.

For workflows, state rules, and examples, see [Orion UI (`orion_ui`)](/notebooks/orion-ui).

## Shared parameters

These arguments appear on many helpers. Allowed values match what Orion's renderer accepts.

### Layout spacing

| Parameter | Allowed values | Default |
| --- | --- | --- |
| `gap` | `"none"`, `"xs"`, `"sm"`, `"md"`, `"lg"` | `"md"` |
| `padding` | `"none"`, `"sm"`, `"md"`, `"lg"` | `"md"` |
| `align` | `"start"`, `"center"`, `"end"`, `"stretch"` | `"stretch"` |
| `columns` | `1`, `2`, `3`, or `4` (other values fall back to 2 columns) | `2` |

### Styling hook

| Parameter | Type | Notes |
| --- | --- | --- |
| `class_name` | `str` or `None` | Semantic CSS hook (for example `"metric-card"`). Define matching rules in `metadata.orion.appView.css`. Default is `None`. |

### Control state

Most interactive controls take a **`key`** (non-empty string) and bind to Python runtime state via `ui.get()`, `ui.set()`, and `ui.state()`.

| Parameter | Type | Notes |
| --- | --- | --- |
| `key` | `str` | Required on controls. Must not be empty. |
| `label` | `str` or `None` | Visible field label. Default is `None`. |
| `default_value` | varies | Initial value when no runtime state exists yet. |
| `value` | omitted or scalar | When **omitted**, registers the default without overwriting user input on rerun. When **provided**, must be a `str`, `int`, `float`, or `bool` and **forces** that value on rerun. |
| `options` | list of `str` or `dict` | Each entry may be a string (label and value) or a dict with `"value"` and optional `"label"`. |

### Option lists (`select`, `radio_group`, `toggle_group`)

When `default_value` is `None`, the first option's value is selected initially.

### Date and time values

| Control | Stored format |
| --- | --- |
| Single date (`mode="single"`) | ISO string `"YYYY-MM-DD"` |
| Date range (`mode="range"`) | JSON string, for example `'{"from":"2026-06-01","to":"2026-06-07"}'` |
| Time inputs (`date_time_picker`) | `"HH:MM:SS"` on separate state keys |

### Date presets

Pass `presets` as a list of dicts. Each preset must include `"label"` and may include:

- `"value"` — fixed ISO date
- `"from"`, `"to"` — fixed range endpoints
- `"daysOffset"` — single date relative to today
- `"fromDaysOffset"`, `"toDaysOffset"` — range relative to today

Example:

```python
presets=[{"label": "Today", "daysOffset": 0}]
```

### Button actions

| Parameter | Shape |
| --- | --- |
| `action` | `{"type": "execute_cells", "cellIds": ["stable-orion-cell-id"]}` |

`cellIds` must reference existing `cells[i].metadata.orion.id` values in the notebook.

---

## Layout and containers

### `ui.page(*children, gap="md", padding="md", class_name=None)`

Top-level page container.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Components or plain strings (strings become labels) | — |
| `gap` | See layout spacing | `"md"` |
| `padding` | See layout spacing | `"md"` |
| `class_name` | See styling hook | `None` |

### `ui.stack(*children, gap="md", align="stretch", class_name=None)`

Vertical stack layout.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Components or plain strings | — |
| `gap` | See layout spacing | `"md"` |
| `align` | See layout spacing | `"stretch"` |
| `class_name` | See styling hook | `None` |

### `ui.grid(*children, columns=2, gap="md", class_name=None)`

Responsive grid layout.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Components or plain strings | — |
| `columns` | `1`, `2`, `3`, or `4` | `2` |
| `gap` | See layout spacing | `"md"` |
| `class_name` | See styling hook | `None` |

### `ui.section(*children, title=None, description=None, gap="md", padding="md", class_name=None)`

Titled section with optional description.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Components or plain strings | — |
| `title` | `str` or `None` | `None` |
| `description` | `str` or `None` | `None` |
| `gap` | See layout spacing | `"md"` |
| `padding` | See layout spacing | `"md"` |
| `class_name` | See styling hook | `None` |

### `ui.card(*children, title=None, description=None, gap="md", class_name=None)`

Framed card container.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Components or plain strings | — |
| `title` | `str` or `None` | `None` |
| `description` | `str` or `None` | `None` |
| `gap` | See layout spacing | `"md"` |
| `class_name` | See styling hook | `None` |

### `ui.tabs(*children, default_value=None, class_name=None)`

Tabbed container; each child is a tab panel.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Tab panel components or plain strings | — |
| `default_value` | `str` or `None` — must match a child tab value when set | `None` (first tab) |
| `class_name` | See styling hook | `None` |

### `ui.accordion(*children, default_value=None, multiple=False, class_name=None)`

Expandable accordion; each child becomes an item.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Accordion item components or plain strings | — |
| `default_value` | `str` or `None` — initially expanded item; when `None`, first item opens | `None` |
| `multiple` | `bool` — allow more than one open item | `False` |
| `class_name` | See styling hook | `None` |

### `ui.collapsible(*children, label=None, title=None, default_open=False, content=None, description=None, class_name=None)`

Single collapsible section.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Content shown when expanded | — |
| `label` | `str` or `None` — trigger label when `title` is not set | `None` |
| `title` | `str` or `None` — trigger label (preferred over `label`) | `None` |
| `default_open` | `bool` | `False` |
| `content` | `str` or `None` — inline body when no children | `None` |
| `description` | `str` or `None` — supporting text with `content` | `None` |
| `class_name` | See styling hook | `None` |

### `ui.carousel(*children, orientation="horizontal", show_controls=True, class_name=None)`

Carousel; each child becomes a slide.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Slide components or plain strings | — |
| `orientation` | `"horizontal"` or `"vertical"` | `"horizontal"` |
| `show_controls` | `bool` | `True` |
| `class_name` | See styling hook | `None` |

### `ui.separator(class_name=None)`

Horizontal rule.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `class_name` | See styling hook | `None` |

---

## Controls

### `ui.input(key, label=None, default_value="", value=<unset>, placeholder=None, input_type="text", class_name=None)`

Text input bound to Python state. Also accepts shared control parameters above.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `default_value` | `str` | `""` |
| `placeholder` | `str` or `None` | `None` |
| `input_type` | HTML input type, for example `"text"`, `"email"`, `"password"`, `"number"` | `"text"` |

### `ui.textarea(key, label=None, default_value="", value=<unset>, placeholder=None, class_name=None)`

Multi-line text input. `default_value` is `""`.

### `ui.select(key, options, label=None, default_value=None, value=<unset>, placeholder=None, class_name=None)`

Dropdown select. See option lists and shared control parameters.

### `ui.slider(key, label=None, min=0, max=100, default_value=0, value=<unset>, step=1, class_name=None)`

Numeric slider.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `min` | `int` or `float` | `0` |
| `max` | `int` or `float` | `100` |
| `default_value` | `int` or `float` | `0` |
| `step` | `int` or `float` | `1` |

### `ui.checkbox(key, label=None, default_value=False, value=<unset>, class_name=None)`

Checkbox. `default_value` is `bool`, default `False`.

### `ui.switch(key, label=None, default_value=False, value=<unset>, class_name=None)`

On/off switch. `default_value` is `bool`, default `False`.

### `ui.radio_group(key, options, label=None, default_value=None, value=<unset>, class_name=None)`

Mutually exclusive radio buttons. See option lists.

### `ui.toggle(key, label=None, default_value=False, value=<unset>, variant=None, class_name=None)`

Boolean toggle button.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `default_value` | `bool` | `False` |
| `variant` | `"default"`, `"outline"` (unrecognized → `"default"`) | `None` |

### `ui.toggle_group(key, options, label=None, default_value=None, value=<unset>, variant=None, class_name=None)`

Exclusive toggle button group. See option lists. `variant`: `"default"` or `"outline"`.

### `ui.calendar(key, label=None, mode="single", default_value="", value=<unset>, caption_layout=None, from_year=None, to_year=None, number_of_months=None, show_outside_days=False, presets=None, class_name=None)`

Inline calendar. See date and time values and date presets.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `mode` | `"single"` or `"range"` (other values → `"single"`) | `"single"` |
| `default_value` | `str` in the format expected by `mode` | `""` |
| `caption_layout` | `"buttons"`, `"dropdown"`, `"dropdown-buttons"` | `None` |
| `from_year` | `int` or `None` | `None` |
| `to_year` | `int` or `None` | `None` |
| `number_of_months` | positive `int` or `None` | `None` |
| `show_outside_days` | `bool` — show adjacent-month days in week rows | `False` |
| `presets` | list of preset dicts or `None` | `None` |

`"dropdown"` shows month/year selects. `"dropdown-buttons"` adds previous/next month buttons alongside the selects.

### `ui.date_picker(key, label=None, mode="single", default_value="", value=<unset>, placeholder=None, caption_layout=None, from_year=None, to_year=None, number_of_months=None, show_outside_days=False, presets=None, class_name=None)`

Popover date picker. Accepts the same date parameters as `ui.calendar`, plus:

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `placeholder` | `str` or `None` — trigger text when empty; renderer defaults to `"Pick a date"` or `"Pick a date range"` | `None` |

### `ui.date_time_picker(key, label=None, default_value="", value=<unset>, start_time_key=None, end_time_key=None, start_time_label="Start time", end_time_label="End time", default_start_time="09:00:00", default_end_time="17:00:00", caption_layout=None, from_year=None, to_year=None, show_outside_days=False, presets=None, class_name=None)`

Date picker with start and end time inputs. Date uses `key` (`"YYYY-MM-DD"`). Times use separate keys as `"HH:MM:SS"` strings.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `start_time_key` | `str` or `None` | `"{key}_start_time"` |
| `end_time_key` | `str` or `None` | `"{key}_end_time"` |
| `start_time_label` | `str` | `"Start time"` |
| `end_time_label` | `str` | `"End time"` |
| `default_start_time` | `str` (`"HH:MM:SS"`) | `"09:00:00"` |
| `default_end_time` | `str` (`"HH:MM:SS"`) | `"17:00:00"` |
| `caption_layout` | `"buttons"`, `"dropdown"`, `"dropdown-buttons"` | `None` |
| `from_year`, `to_year` | `int` or `None` | `None` |
| `show_outside_days` | `bool` | `False` |
| `presets` | list of preset dicts or `None` | `None` |

### `ui.button(label, action=None, variant=None, size=None, class_name=None)`

Button with optional cell-run action.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `label` | `str` | — |
| `action` | See button actions, or `None` | `None` |
| `variant` | `"default"`, `"secondary"`, `"outline"`, `"ghost"`, `"destructive"` | `None` |
| `size` | `"default"`, `"sm"`, `"lg"` | `None` |
| `class_name` | See styling hook | `None` |

Example:

```python
ui.button(
    "Run analysis",
    action={"type": "execute_cells", "cellIds": ["your-cell-id"]},
)
```

---

## Display

### `ui.label(text, class_name=None)`

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `text` | `str` | — |
| `class_name` | See styling hook | `None` |

### `ui.badge(text, variant=None, class_name=None)`

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `text` | `str` | — |
| `variant` | `"default"`, `"secondary"`, `"destructive"`, `"outline"` | `None` |
| `class_name` | See styling hook | `None` |

### `ui.alert(*children, title=None, description=None, text=None, variant=None, class_name=None)`

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `*children` | Optional child components or plain strings | — |
| `title` | `str` or `None` | `None` |
| `description` | `str` or `None` | `None` |
| `text` | `str` or `None` — alias for `description` | `None` |
| `variant` | `"default"`, `"destructive"` | `None` |
| `class_name` | See styling hook | `None` |

### `ui.progress(key=None, label=None, default_value=0, value=<unset>, max=100, class_name=None)`

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `key` | `str` or `None` — when set, binds to runtime state; when `None`, static bar | `None` |
| `label` | `str` or `None` | `None` |
| `default_value` | `int` or `float` | `0` |
| `value` | See control state — only applies when `key` is set | omitted |
| `max` | `int` or `float` (100% fill) | `100` |
| `class_name` | See styling hook | `None` |

### `ui.avatar(src=None, alt=None, fallback=None, label=None, size=None, class_name=None)`

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `src` | `str` or `None` — image URL | `None` |
| `alt` | `str` or `None` | `None` |
| `fallback` | `str` or `None` — shown when image missing | `None` |
| `label` | `str` or `None` — fallback alias | `None` |
| `size` | `"sm"`, `"md"`, `"lg"` | `None` (`"md"`) |
| `class_name` | See styling hook | `None` |

### `ui.popover(*children, label=None, trigger=None, text=None, content=None, description=None, class_name=None)`

Popover with button trigger. `trigger` is preferred over `label` and `text` for the trigger label.

### `ui.hover_card(*children, label=None, trigger=None, text=None, content=None, description=None, class_name=None)`

Hover card with link-style trigger. Same trigger/content props as `ui.popover`.

### `ui.tooltip(*children, label=None, trigger=None, text=None, content=None, description=None, class_name=None)`

Tooltip on a button trigger. `text` and `content` set tooltip body; `trigger` sets the button label.

### `ui.markdown_cell(cell_id=None, text=None, class_name=None)`

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `cell_id` | `str` or `None` — Orion cell id (`cells[i].metadata.orion.id`) | `None` |
| `text` | `str` or `None` — inline markdown when `cell_id` is not set | `None` |
| `class_name` | See styling hook | `None` |

### `ui.output(cell_id, output_index=0, class_name=None)`

Embed another cell's rendered output.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `cell_id` | `str` — Orion cell id | — |
| `output_index` | `int` — zero-based index into that cell's outputs | `0` |
| `class_name` | See styling hook | `None` |

---

## State API

| Function | Parameters | Returns |
| --- | --- | --- |
| `ui.get(key, default=None)` | `key`: `str`. `default`: `str`, `int`, `float`, `bool`, or `None`. | Current value, or `default` when unset. |
| `ui.state()` | — | Shallow copy of all bound state as a `dict`. |
| `ui.define_default(key, default)` | `key`: non-empty `str`. `default`: `str`, `int`, `float`, or `bool`. | Current value (existing state or newly set default). Does not overwrite user selections. |
| `ui.set(key, value)` | `key`: non-empty `str`. `value`: `str`, `int`, `float`, or `bool`. | `None`. Replaces runtime state intentionally. |

Use **`default_value=`** on controls for normal defaults. Use **`value=`** only when you want to force or reset state on rerun. Do not use `ui.set()` to define component defaults unless you mean to replace state.

---

## Plotly styling

### `ui.theme.plotly(name="orion", set_default=True)`

Register an Orion-styled Plotly template.

| Parameter | Allowed values / type | Default |
| --- | --- | --- |
| `name` | `str` — template name in `plotly.io.templates` | `"orion"` |
| `set_default` | `bool` — set as `plotly.io.templates.default` | `True` |

Returns the template dict. Raises `ImportError` if Plotly is not installed.

Call before creating Plotly figures:

```python
ui.theme.plotly()
```

See [Plotly version compatibility](/troubleshooting/plotly-version-compatibility) if charts fail to render.

## Charts

Use Plotly, Altair, Vega-Lite, or your usual plotting libraries for charts. Orion UI primitives are for controls and layout, not chart rendering.

## Related

- [Orion UI (`orion_ui`)](/notebooks/orion-ui)
- [Style App View with CSS](/notebooks/app-view-css)
- [App View](/notebooks/app-view)

---

*Last updated May 2026.*
