# What is Orion?

Orion is an open-source AI coding agent built for **data scientists, analysts, and researchers**. It wraps a modern notebook IDE with an assistant that understands your live workspace: variables, cell outputs, execution order, and tracebacks—not just the source code on disk.

This guide is for anyone evaluating Orion or starting their first project. After reading it, you should know how Orion differs from a generic coding agent and how the main parts of the interface fit together.

## Who Orion is for

Orion targets workflows where **data and runtime state matter**:

- Exploratory analysis in Jupyter notebooks
- Iterating on charts, tables, and models until results look right
- Research notebooks that mix code, narrative, and interactive controls

General-purpose coding agents often guess at column names or miss what your last cell actually produced. Orion is designed to close that **context gap** by feeding the model variable inspector state, cell outputs, and notebook structure at the right time.

## Local-first and bring your own keys

The open-source Orion app runs on your machine. You add API keys in **Settings → Providers** (or connect local inference). Local provider credentials are stored in your Orion home directory, not in settings files.

Managed data lives under:

- **macOS / Linux:** `~/.orion`
- **Windows:** `%USERPROFILE%\.orion`

You can also use the hosted app at [app.orion-agent.ai](https://app.orion-agent.ai) without installing the CLI. See [Local vs hosted app](/getting-started/local-vs-hosted) for differences.

## Three views of the same notebook

Orion gives you three complementary surfaces:

| Surface | Purpose |
| --- | --- |
| **Notebook view** | Edit and run cells, inspect outputs, use the variable inspector |
| **App View** | A polished dashboard or report layout built from notebook content |
| **Assistant (chat)** | Agent, Ask, or Edit modes with @ mentions, slash commands, and tools |

**Notebook view** is where you write Python, run analysis, and see rich outputs (Plotly, images, tables, Orion UI controls).

**App View** arranges selected cells and outputs into sections, cards, and grids using declarative layout metadata. It is for presentation—not for replacing interactive Python controls. Sliders, buttons, and forms belong in [`orion_ui`](/notebooks/orion-ui) code cells; App View references those outputs.

**Assistant** sits in the right sidebar. In **Agent** mode it can run cells, edit files, and use terminal tools. **Ask** mode is read-only. **Edit** mode can change files and run terminal commands but does not execute notebook cells.

## Typical workflow

1. [Install Orion](/getting-started/install) and run `orion`, or connect to an existing Jupyter server.
2. Complete your [first session](/getting-started/first-session): connect Jupyter, open a workspace folder, run a cell.
3. Add API keys in **Settings → Providers**.
4. Use chat to iterate on analysis; mention cells, variables, or files with `@`.
5. Optionally build an [App View](/notebooks/app-view) or interactive [Orion UI](/notebooks/orion-ui) dashboard from the same notebook.

## Related

- [Install Orion](/getting-started/install)
- [First session](/getting-started/first-session)
- [Orion website](https://www.orion-agent.ai)

---

*Last updated June 2026.*
