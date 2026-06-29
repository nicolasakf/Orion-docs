# Built-in skill: Deep EDA

The **deep-eda** built-in skill runs a thorough exploratory data analysis in your active notebook. Use it when you want Orion to inspect a dataset deeply, build evidence with code and plots, and keep going until the analysis has a clear synthesis.

Load it with **`/deep-eda`** or ask for a "deep", "thorough", or "exhaustive" EDA. For quick summaries or one-off data questions, use a normal chat request instead.

## When to use it

- You have a dataset open or available in the active notebook.
- You want Orion to check schema, missing values, distributions, relationships, segments, anomalies, and limitations.
- You want notebook cells that explain the investigation as it progresses.
- You are comfortable with a longer-running analysis instead of a short answer.

## What Orion does

1. Starts the deep EDA workflow when you explicitly ask for it.
2. Uses the active notebook, or creates a new notebook when needed.
3. Adds reproducible code cells, markdown notes, statistics, and plots.
4. Tracks open questions and evidence in an EDA ledger.
5. Visually inspects generated PNG or JPEG plots when possible.
6. Writes final synthesis cells that cover findings, uncertainty, limitations, and useful next steps.

## Plot expectations

Deep EDA prefers static Matplotlib or Seaborn plots because Orion can inspect their raster outputs. If you ask for interactive charts, Orion may use another library, but static plots are the default for the investigation record.

If image inspection is unavailable, Orion should say so and support conclusions with numeric checks instead of pretending it saw the figure.

## Finishing a run

A deep EDA run is not complete just because the assistant has written a prose reply. Orion should continue until the workflow accepts completion or you stop the run.

Stop the run with a direct message such as "stop the EDA" if you need to switch tasks.

## Related

- [Built-in skills hub](/ai-assistant/builtin-skills)
- [Notebook basics](/notebooks/notebook-basics)
- [Orion UI (`orion_ui`)](/notebooks/orion-ui)

---

*Last updated June 2026.*
