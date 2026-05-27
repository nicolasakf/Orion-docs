# Built-in skill: Create sub-agent

The **create-subagent** built-in teaches Orion's assistant to author **notebook-defined sub-agents** — reusable `.agent.ipynb` files you invoke from chat with **`/name`**. Sub-agents get their own system prompt, workflow cells, and a temporary scratchpad notebook at runtime.

Load it with **`/create-subagent`** or ask: "Create a sub-agent for …"

## What sub-agents are

Sub-agents are specialized assistants backed by Jupyter notebooks. When you run `/data-profiler`, Orion:

1. Loads the sub-agent's description and system prompt from the notebook.
2. Copies workflow cells into a temporary run notebook.
3. Runs the sub-agent in a nested session with tool access.
4. Returns a summary to your main chat.

Sub-agents suit **multi-step notebook workflows** (profiling, review pipelines, structured analysis). Skills suit **policies and checklists** loaded into the parent chat. See [Sub-agents](/ai-assistant/sub-agents) for the product overview.

## What happens when you use create-subagent

The assistant treats your request as a **specification for a new sub-agent notebook**, not as permission to run that workflow immediately in the current chat. It will:

1. Pick a slash-safe kebab-case id (for example `paper-reviewer`).
2. Create **`.agents/subagents/<name>.agent.ipynb`** by default.
3. Structure the notebook with a title, description, system prompt, function definitions, and examples.
4. Optionally set `metadata.orion.subagent` for model pinning or slash-only invocation.
5. Tell you the saved path and remind you to reconnect if `/name` does not appear.

## Where sub-agents live

| Location | When to use |
| --- | --- |
| `.agents/subagents/<name>.agent.ipynb` | **Default** — shared naming with other tools |
| `.orion/subagents/<name>.agent.ipynb` | Orion override of the same slash id |

The filename before `.agent.ipynb` becomes the slash command: `paper-reviewer.agent.ipynb` → **`/paper-reviewer`**.

Never author reusable sub-agents under `*/subagents/tmp/` — Orion uses that folder for runtime copies only.

### Paths

**macOS / Linux**

```
<workspace>/.agents/subagents/data-profiler.agent.ipynb
```

**Windows**

```
<workspace>\.agents\subagents\data-profiler.agent.ipynb
```

Use project-level paths by default when a workspace is open. User-level sub-agents at the Jupyter server root are for global definitions when you explicitly want that.

## Required notebook structure

Every sub-agent notebook needs at least four cells in order:

1. **Markdown — H1 title** — e.g. `# Data Profiler`
2. **Markdown — description** — Third person: what it does and **when to delegate** (same style as skill descriptions).
3. **Markdown — system prompt** — Role, goals, constraints, expected final response, which cells to run first.
4. **Workflow cells** — Markdown and/or code the sub-agent uses at runtime.

Cells 2 and 3 may start with headings like `# Description` or `# System Prompt`; Orion strips those when loading.

### Design the workflow for reuse

After the system prompt, the assistant typically adds:

- **Function-definition code cells** — Small, named, documented functions the sub-agent calls like local tools.
- **Example cells** — Sample inputs and expected output shapes so the sub-agent knows how to use those functions.

## Optional notebook metadata

At `metadata.orion.subagent`:

| Option | Default | Purpose |
| --- | --- | --- |
| `model` | inherit parent chat model | Pin a catalog model id for this sub-agent |
| `disable-model-invocation` | `false` | When `true`, parent agent won't auto-delegate; `/name` still works |

Example:

```json
{
  "metadata": {
    "orion": {
      "subagent": {
        "model": "gemini-3-flash-preview",
        "disable-model-invocation": true
      }
    }
  }
}
```

Use `disable-model-invocation: true` for specialized agents that should run only when you explicitly pick their slash command.

## After creating a sub-agent

1. Invoke it with **`/your-agent-name`** from chat.
2. The parent agent may also delegate automatically when your request matches the description (unless disabled).
3. Reconnect the kernel or reload Orion if the slash command is missing.
4. Edit the source `.agent.ipynb` in Notebook view; runtime copies under `tmp/` are ephemeral.

## Sub-agents vs skills

| | Skills | Sub-agents |
| --- | --- | --- |
| Format | `SKILL.md` | `.agent.ipynb` |
| Runtime | Instructions in parent chat | Separate nested run with copied cells |
| Best for | Policies, templates, checklists | Notebook workflows with code and scratch state |

## Examples of good requests

- "Create a sub-agent that profiles CSV columns and returns a markdown summary."
- "Scaffold `/paper-reviewer` with functions to extract claims and check citations."
- "Add a sub-agent pinned to Gemini Flash that only runs when I slash-invoke it."

## Related

- [Sub-agents](/ai-assistant/sub-agents)
- [Built-in skills hub](/ai-assistant/builtin-skills)
- [Orion metadata](/ai-assistant/builtin-skills/orion-metadata) — `metadata.orion.subagent` fields
- [Slash commands](/ai-assistant/slash-commands)

---

*Last updated May 2026.*
