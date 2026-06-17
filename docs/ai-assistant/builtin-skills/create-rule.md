# Built-in skill: Create rule

The **create-rule** built-in teaches Orion's assistant to author **workspace rule files** — `AGENTS.md` or `CLAUDE.md` markdown documents that Orion injects into **every** chat in the active workspace. Use them for always-on coding standards, safety policies, and repo conventions.

Load it with **`/create-rule`** or ask in plain language: "Add a rule for …" or "Create an AGENTS.md for …"

## What happens when you use it

When you ask Orion to create a rule, the assistant:

1. Treats your message as a **specification** for the rule file (not as permission to run that work immediately in the current chat).
2. Chooses **workspace** scope by default (`<workspace-root>/AGENTS.md`) or **global** scope when you want server-wide rules.
3. Prefers **`AGENTS.md`** over `CLAUDE.md` (the cross-tool standard).
4. Reads any existing file and merges or updates thoughtfully.
5. Tells you where the file was saved and that it applies automatically on the next chat.

The deliverable of that chat turn is the **rule document**, not the end-user artifact the rule will govern later.

## How rules differ from skills

| | Rules | Skills |
| --- | --- | --- |
| Files | `AGENTS.md` or `CLAUDE.md` at workspace or server root | `.agents/skills/<name>/SKILL.md` |
| Loading | Automatic in every chat | On demand via `/name` or model choice |
| Best for | Always-on conventions and policies | Repeatable workflows and playbooks |

For occasional workflows you invoke with a slash command, use **[Create skill](/ai-assistant/builtin-skills/create-skill)** instead.

## Where rules are stored

Orion loads **at most two** rule files:

| Scope | Path | When to use |
| --- | --- | --- |
| **Workspace** | `<workspace-root>/AGENTS.md` | **Default** — conventions for this project |
| **Global** | `<jupyter-server-root>/AGENTS.md` | Rules that apply across all projects on this Jupyter server |

At each scope, Orion prefers **`AGENTS.md`** and uses **`CLAUDE.md`** only when `AGENTS.md` is missing or empty.

### Paths on your machine

**macOS / Linux**

```
<workspace>/AGENTS.md
<jupyter-server-root>/AGENTS.md
```

**Windows**

```
<workspace>\AGENTS.md
<jupyter-server-root>\AGENTS.md
```

Nested paths such as `src/AGENTS.md` are **not** discovered. Only the workspace root and Jupyter server root are scanned.

## File format

Rule files are plain markdown — no YAML frontmatter:

```markdown
# Project conventions

## TypeScript
- Use strict typing; avoid `any` unless necessary.
- Group imports: React, components, utils, types.

## Testing
- Prefer vitest for unit tests colocated as `*.vitest.test.ts`.
```

### Limits

- **40,000 characters** per file — Orion skips larger files.
- **Empty files** are ignored.

## After creating a rule

1. The rule is injected into **every** new chat message in that workspace automatically.
2. Orion reloads rules when it detects the file change in the editor.
3. If the rule does not appear immediately, reload Orion or reconnect the Jupyter kernel.

## Authoring tips

- **Keep it focused** — Rules apply to every chat; avoid one-off task instructions.
- **Prefer `AGENTS.md`** — Works across Codex, Cursor, Claude Code, and Orion.
- **Use sections** — Headings help the model scan long conventions quickly.
- **Link, don't duplicate** — Point to README or CONTRIBUTING for lengthy docs.

## Examples of good requests

- "Create an AGENTS.md with our TypeScript and import conventions."
- "Add a workspace rule that we never commit secrets or `.env` files."
- "Update AGENTS.md to mention we use vitest and colocated `*.vitest.test.ts` files."
- "Add a global rule on the Jupyter server that all projects use conventional commits."

## Related

- [Skills](/ai-assistant/skills) — on-demand workflows via `SKILL.md`
- [Built-in skill: Create skill](/ai-assistant/builtin-skills/create-skill)
- [Built-in skills hub](/ai-assistant/builtin-skills)

---

*Last updated June 2026.*
