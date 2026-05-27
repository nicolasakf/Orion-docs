# Skills

Skills are reusable instruction packages that teach Orion's assistant how to follow your team's workflows. Each skill is a folder with a `SKILL.md` file discovered from your Jupyter workspace.

## What skills do

- Add domain rules, checklists, and templates to the assistant
- Appear as **`/skill-name`** slash commands in chat
- Can auto-load when the model decides they match your request (unless disabled)

Orion ships **built-in skills** (for example `orion-ui`, `create-app`). Workspace skills with the **same name** override the built-in copy.

## Where to put skills

| Location | Purpose |
| --- | --- |
| `.agents/skills/<name>/SKILL.md` | **Default** — shared with other agent tooling |
| `.orion/skills/<name>/SKILL.md` | Orion-only override of the same skill name |

**Precedence (lowest to highest):** user `.agents` → user `.orion` → project `.agents` → project `.orion`.

Prefer **`.agents/skills`** for new skills. Use **`.orion/skills`** only when you need Orion-specific behavior for a skill that already exists under `.agents`.

Example layout:

```
.agents/skills/
└── quarterly-report/
    ├── SKILL.md
    └── reference.md
```

## SKILL.md format

Each skill needs YAML frontmatter:

```markdown
---
name: quarterly-report
description: Standardizes quarterly CSV ingestion and validation. Use when importing spreadsheets or validating columns before analysis.
---

# Quarterly report

## Steps
1. ...
```

- **`name`**: lowercase letters, numbers, hyphens only (matches `/quarterly-report`)
- **`description`**: third person; what the skill does and **when** to use it
- **`disable-model-invocation`** (optional): when `true`, the skill only loads via `/name`, not automatically

## Create a skill

1. Create `.agents/skills/<name>/SKILL.md` in your workspace.
2. Write frontmatter and instructions.
3. If the skill does not appear immediately, **reconnect the Jupyter kernel** or reload Orion.

Ask the assistant to "create a skill for …" and it can scaffold the file for you.

## Hidden folders and Jupyter

Jupyter may hide dot-directories by default, so skills under `.agents` or `.orion` might not load until you enable hidden folders. See [Jupyter hidden folders and skills](/troubleshooting/jupyter-hidden-folders-and-skills).

## Related

- [Slash commands](/ai-assistant/slash-commands)
- [Sub-agents](/ai-assistant/sub-agents)

---

*Last updated May 2026.*
