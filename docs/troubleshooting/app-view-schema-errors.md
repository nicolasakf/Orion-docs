# Fix App View schema errors

When App View metadata is invalid, Orion shows **App View schema could not be rendered** with a list of validation errors instead of the layout.

## Fix

1. Click **Back to Notebook View** if shown.
2. Read each error in the list—it usually names a missing `cellId`, wrong `outputIndex`, or unsupported primitive.
3. Fix the schema:
   - Ask the assistant to repair App View metadata, or
   - Remove invalid nodes and re-add content via **right-click → Add to App View** in Notebook view.
4. Switch to App View again.

## Common causes

| Error pattern | Likely cause |
| --- | --- |
| Unknown or missing `cellId` | Cell was deleted or id changed after schema was written |
| Invalid `outputIndex` | Cell has fewer outputs than referenced (rerun the code cell first) |
| Unsupported `type` | Typo in primitive name; v1 only supports built-in types |
| Missing `version: 1` | Schema root must declare version 1 |

## Empty App View (not an error)

**No cells in App View** means no layout is configured yet—not a broken schema. Add cells from Notebook view with **right-click → Add to App View**.

See [App View](/notebooks/app-view).

## Interactive controls

If sliders or buttons misbehave, move interactivity to [`orion_ui`](/notebooks/orion-ui) code cells and reference outputs with `Output` in App View—not static control primitives alone.

## Related

- [App View](/notebooks/app-view)
- [Style App View with CSS](/notebooks/app-view-css)

---

*Last updated May 2026.*
