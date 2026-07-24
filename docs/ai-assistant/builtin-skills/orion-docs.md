# Built-in skill: Orion docs

The **orion-docs** built-in helps the assistant answer questions about Orion from the official documentation. It covers product features, setup, notebooks, interaction modes, providers, configuration, and troubleshooting.

Ask a question in plain language or load it explicitly with **`/orion-docs`**:

> How does Ask mode differ from Agent mode?

The assistant loads the skill, finds the narrowest relevant page under `docs.orion-agent.ai`, reads it, and links the source in its answer.

## Available in Ask mode

Ask mode can load skills while remaining read-only. Loading a skill adds instructions to the assistant's context; it does not edit files, execute notebook code, or change settings.

Ask mode also includes **kernel listing**, so the assistant can discover available kernels when answering questions about the current environment. It still cannot start, stop, restart, or execute code in a kernel.

## What the skill uses

The skill treats the published Orion user documentation as the source of truth. It:

1. Fetches a known documentation page directly when possible.
2. Searches only `docs.orion-agent.ai` when it needs to locate a page.
3. Reads the selected page before answering.
4. Links the relevant documentation in the response.
5. Labels conclusions that come from local workspace or repository evidence rather than the published docs.

If the installed app behaves differently from the published documentation, the assistant should describe the observed behavior and note that the docs may cover a different Orion release.

## When another skill is better

The Orion docs skill is for explanations and help. More specific built-ins remain the best choice when you want the assistant to perform work:

| Request | Skill |
| --- | --- |
| Read or change Orion settings | **orion-settings** |
| Build interactive notebook controls | **orion-ui** |
| Build an App View layout | **create-app** |
| Work with `metadata.orion` fields | **orion-metadata** |
| Create a skill, rule, or sub-agent | **create-skill**, **create-rule**, or **create-subagent** |

The assistant can load more than one skill when a question turns into an implementation request.

## Related

- [What is Orion?](/getting-started/what-is-orion)
- [Chat overview](/ai-assistant/chat-overview)
- [Agent, Research, Ask, and Edit modes](/ai-assistant/agent-ask-edit-modes)
- [Skills](/ai-assistant/skills)
- [Built-in skills hub](/ai-assistant/builtin-skills)

---

*Last updated July 2026.*
