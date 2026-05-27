# Export notebooks

Export the current notebook from Orion's toolbar as HTML, PDF, Markdown, or LaTeX. Exports include unsaved cell edits from the open editor when possible.

## Export formats

Open the notebook toolbar menu and choose **Export**:

| Format | Notes |
| --- | --- |
| **HTML** | Standalone page; good for sharing |
| **PDF** | Opens a print dialog via a pop-up window |
| **Markdown** | `.md` with code and outputs where supported |
| **LaTeX** | For PDF pipelines that start from LaTeX |

## Notebook view vs App View

Orion exports the **currently visible surface**:

- In **Notebook view**, export captures the notebook layout.
- In **App View**, export captures the dashboard layout (sections, cards, embedded outputs).

Switch views before exporting if you need a specific presentation.

## PDF export blocked

If PDF export fails immediately, your browser may have **blocked pop-ups** for Orion.

1. Allow pop-ups for your Orion origin (for example `http://127.0.0.1:…` or `https://app.orion-agent.ai`).
2. Try export again.

See [Fix: PDF export blocked](/troubleshooting/pdf-export-blocked).

## Export unavailable

If you see "Notebook export unavailable":

1. Wait for the notebook to finish loading.
2. Confirm **Jupyter is connected** (kernel selector shows an active connection).

## Related

- [App View](/notebooks/app-view)
- [Fix: PDF export blocked](/troubleshooting/pdf-export-blocked)

---

*Last updated May 2026.*
