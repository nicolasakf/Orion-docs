# Style App View with CSS

App View supports **scoped CSS** stored in notebook metadata. Use it to tune spacing, borders, and typography without inline styles in the schema.

## Where CSS lives

Add styles at `metadata.orion.appView.css` on the notebook. Orion injects this CSS only while App View is visible—it does not affect Notebook view or other notebooks.

Example:

```css
.metric-card {
  border-color: hsl(var(--primary));
}

.section-title {
  letter-spacing: 0.02em;
}
```

## Link components with `className`

In the App View schema, set semantic class hooks on primitive `props`:

```json
{
  "type": "Card",
  "props": {
    "title": "Revenue",
    "className": "metric-card"
  },
  "children": []
}
```

The same pattern works for `orion_ui` components via `class_name="metric-card"` in Python.

Define matching selectors in `appView.css`. Do not rely on arbitrary Tailwind class strings in metadata—Orion's build only includes known utility classes.

## Design tips

- Use Orion CSS variables such as `hsl(var(--primary))` and `hsl(var(--border))` for theme-aware colors.
- Keep selectors short and prefixed (for example `.dashboard-` ) to avoid collisions.
- Prefer layout props (`gap`, `padding`, `columns`) on primitives before adding CSS.

## Related

- [App View](/notebooks/app-view)
- [Orion UI](/notebooks/orion-ui)

---

*Last updated May 2026.*
