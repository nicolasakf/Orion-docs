# Fix: PDF export blocked

PDF export opens a **new browser window** for printing. If your browser blocks pop-ups, export fails immediately with a message to allow pop-ups for Orion.

## Fix

1. When Orion shows **PDF export blocked**, open your browser's site settings for the Orion tab.
2. **Allow pop-ups** for that origin (for example `http://127.0.0.1:PORT` for local Orion or `https://app.orion-agent.ai` for hosted).
3. Try **Export → PDF** again from the notebook toolbar.

## When you need this

- Export menu works for HTML or Markdown but PDF fails instantly
- Toast title: **PDF export blocked**
- No print dialog appears

## Alternative formats

If you cannot allow pop-ups, export **HTML** and print to PDF from your browser's print dialog on the saved file.

See [Export notebooks](/notebooks/export-notebooks).

---

*Last updated May 2026.*
