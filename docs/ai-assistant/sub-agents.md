# Sub-agents

Sub-agents are reusable assistant workflows defined as **Jupyter notebooks**. Invoke them from chat with **`/name`** to delegate focused tasks to a specialized prompt and notebook scratchpad.

## What sub-agents do

When you run `/data-profiler` (for example), Orion:

1. Loads that sub-agent's system prompt and description
2. Copies its workflow cells into a temporary run notebook
3. Runs the sub-agent with tool access in a nested session
4. Returns a summary to the parent chat

## Where sub-agents live

| Location | Purpose |
| --- | --- |
| `.agents/subagents/<name>.agent.ipynb` | **Default** — shared naming |
| `.orion/subagents/<name>.agent.ipynb` | Orion override of the same slash id |

The filename before `.agent.ipynb` becomes the slash command (use kebab-case, e.g. `paper-reviewer.agent.ipynb` → `/paper-reviewer`).

Never author reusable sub-agents under `*/subagents/tmp/` — that folder is for runtime copies only.

## Required notebook structure

Every sub-agent notebook needs at least:

1. **Markdown cell** with an H1 title, e.g. `# Data Profiler`
2. **Markdown cell** with a third-person description (what it does and when to delegate)
3. **Markdown cell** with the **system prompt** (role, constraints, success criteria)
4. **Additional cells** — markdown or code — that form the runnable workflow

Optional headings like `# Description` or `# System Prompt` in cells 2–3 are stripped when Orion loads the notebook.

## Optional metadata

Notebook metadata at `metadata.orion.subagent` can set:

| Option | Purpose |
| --- | --- |
| `model` | Pin a model catalog id for this sub-agent |
| `disable-model-invocation` | When `true`, parent agent won't auto-delegate; `/name` still works |

## Create a sub-agent

1. Add `.agents/subagents/my-agent.agent.ipynb` with the structure above.
2. Include workflow code cells the sub-agent should run or modify.
3. Reload or reconnect if `/my-agent` does not appear in the slash palette.

Ask the assistant to "create a sub-agent for …" to scaffold the notebook.

See [Built-in skill: Create sub-agent](/ai-assistant/builtin-skills/create-subagent) for the extended guide.

## Sub-agents vs skills

| | Skills | Sub-agents |
| --- | --- | --- |
| Format | `SKILL.md` markdown | `.agent.ipynb` notebook |
| Runtime | Instructions loaded into chat | Separate run with copied workflow cells |
| Best for | Policies, templates, checklists | Multi-step notebook workflows |

## Related

- [Built-in skill: Create sub-agent](/ai-assistant/builtin-skills/create-subagent)
- [Slash commands](/ai-assistant/slash-commands)
- [Skills](/ai-assistant/skills)

---

*Last updated May 2026.*
