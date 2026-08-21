# Notebook basics

Core notebook workflows in Orion: running cells, inspecting variables, presentation mode, and keyboard shortcuts.

## Run cells

| Action | Shortcut |
| --- | --- |
| Run selected cells and move down | **Shift + Enter** |
| Run selected cells, stay on cell | **Ctrl + Enter** (Windows/Linux) or **Cmd + Enter** (macOS) |
| Run all code above selection | **Alt + A** |
| Run selected cell and all below | **Alt + B** |

Use the **Run All Cells** button in the toolbar to run the whole notebook and stop at the first error. Open its arrow menu when you need **Run All Cells (Ignore Errors)** or **Restart Kernel and Run All Cells**. If Orion stops on an error, choose **Go to error** to jump to that cell.

Use **Interrupt Kernel** to stop current work, or **Restart Kernel** to start the selected kernel fresh. Restarting clears Python variables and cancels queued cell runs, so run the cells that recreate the state you need afterward.

## Edit cells

| Action | Shortcut |
| --- | --- |
| Enter edit mode on selected cell | **Enter** |
| Leave edit mode | **Esc** |
| Change to Markdown | **M** |
| Change to Code | **Y** |

## Cell management

| Action | Shortcut |
| --- | --- |
| Add code cell above | **A** |
| Add code cell below | **B** |
| Delete selected cells | **D** then **D** |
| Copy / cut / paste cells | **C** / **X** / **V** |
| Undo delete | **Z** |
| Move cell up or down | **Alt + Up** / **Alt + Down** |
| Mention selected cell in chat | **I** |

Press **H** in command mode (cell selected, not editing) to open the full shortcuts dialog.

## Variable inspector

Open the **Variables** panel in the left sidebar to list kernel variables. Orion shows readiness indicators so you know when inspector data is current.

Use the **Filter variables** field to narrow the list by variable name. Use the sort control in the panel header to switch between the kernel's order and alphabetical order, and use **Refresh variables** after running code when you need an updated list. Click a variable to inspect its details.

Use **@** in chat to mention a variable by name so the assistant sees live values and types.

## Presentation mode

**Settings → Appearance → Notebook** includes **Presentation mode** (hide all cell inputs). Useful when walking through results without showing source code.

Workspace teams can set `notebook.presentationHideAllCellInputs` in `.orion/settings.json`. See [Workspace settings](/configuration/workspace-settings).

## Saving files

Orion marks dirty editor tabs and shows brief save feedback after manual saves. Turn on **Settings -> Appearance -> Editor -> Autosave** to periodically save dirty files open in the editor.

Autosave uses **Autosave interval** in milliseconds. The default interval is `1000` ms when autosave is enabled.

## Outputs

Orion renders Plotly, Vega, HTML, images, LaTeX, GeoJSON, PDF previews, streams, errors, and **Orion UI** outputs. When multiple MIME types exist, use the output presentation picker to switch representation.

Plotly rendering notes: [Plotly version compatibility](/troubleshooting/plotly-version-compatibility).

## Keep output history

Wrap a chart, table, or other rich output in `ui.version()` when you want to compare it with earlier successful runs of the same cell.

```python
import orion_ui as ui

ui.version(fig, key="monthly-sales", max_versions=5)
```

Rerun the cell after changing the result. Orion keeps the latest output plus up to `max_versions - 1` earlier versions in the notebook. When more than one version exists, hover over the output and use **Version** to choose an earlier one; each entry shows when Orion captured it.

`max_versions` includes the current output and defaults to `10`. If a cell has several versioned outputs that you might reorder, give each one a unique `key` so Orion can keep the correct history with it. See [the `ui.version()` reference](/notebooks/orion-ui-component-reference#ui-versionvalue-keynone-max_versions10).

## Views

Toggle **Notebook view** and **App View** from the toolbar. See [App View](/notebooks/app-view) and [Export notebooks](/notebooks/export-notebooks).

## Opening files

When no file is open, Orion shows shortcut cards for recent files, pinned files, or pinned workspaces. Change the card contents in **Settings → Appearance → Empty editor**.

If a file is too large to open comfortably in the editor, Orion warns before loading it. Choose **Open anyway** only when you expect the editor to handle the file size, or cancel and mention the file in chat instead.

For files Orion cannot open directly, **Settings → Appearance → Unsupported files** controls whether clicking the file mentions it in chat or opens it with your system's default app.

## Changes to an open text file

If Jupyter or another application changes, renames, or deletes a text file while it is open in Orion, an alert appears above the editor.

- For **This file changed on disk**, choose **Save editor version** to keep your unsaved Orion edits, or **Reload disk version** to replace them with the file on disk.
- For **This file was renamed**, Orion follows the new path and keeps your current editor content. You can still save your version or reload the renamed file from disk.
- For **This file was deleted on disk**, Orion keeps the editor content. Choose **Save editor version** to recreate the file at its current path.

## Related

- [Your first session](/getting-started/first-session)
- [Mentions](/ai-assistant/mentions)
- [Orion UI](/notebooks/orion-ui)

---

*Last updated August 2026.*
