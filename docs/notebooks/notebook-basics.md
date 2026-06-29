# Notebook basics

Core notebook workflows in Orion: running cells, inspecting variables, presentation mode, and keyboard shortcuts.

## Run cells

| Action | Shortcut |
| --- | --- |
| Run selected cells and move down | **Shift + Enter** |
| Run selected cells, stay on cell | **Ctrl + Enter** (Windows/Linux) or **Cmd + Enter** (macOS) |
| Run all code above selection | **Alt + A** |
| Run selected cell and all below | **Alt + B** |

Click the **Run** controls in the toolbar for run-all and stop actions when visible.

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

Use **@** in chat to mention a variable by name so the assistant sees live values and types.

## Presentation mode

**Settings → Appearance → Notebook** includes **Presentation mode** (hide all cell inputs). Useful when walking through results without showing source code.

Workspace teams can set `notebook.presentationHideAllCellInputs` in `.orion/settings.json`. See [Workspace settings](/configuration/workspace-settings).

## Outputs

Orion renders Plotly, Vega, HTML, images, LaTeX, GeoJSON, PDF previews, streams, errors, and **Orion UI** outputs. When multiple MIME types exist, use the output presentation picker to switch representation.

Plotly rendering notes: [Plotly version compatibility](/troubleshooting/plotly-version-compatibility).

## Views

Toggle **Notebook view** and **App View** from the toolbar. See [App View](/notebooks/app-view) and [Export notebooks](/notebooks/export-notebooks).

## Opening files

When no file is open, Orion shows shortcut cards for recent files, pinned files, or pinned workspaces. Change the card contents in **Settings → Appearance → Empty editor**.

If a file is too large to open comfortably in the editor, Orion warns before loading it. Choose **Open anyway** only when you expect the editor to handle the file size, or cancel and mention the file in chat instead.

For files Orion cannot open directly, **Settings → Appearance → Unsupported files** controls whether clicking the file mentions it in chat or opens it with your system's default app.

## Related

- [Your first session](/getting-started/first-session)
- [Mentions](/ai-assistant/mentions)
- [Orion UI](/notebooks/orion-ui)

---

*Last updated June 2026.*
