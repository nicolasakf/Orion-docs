# Business mode

Business mode is Orion's simpler data-and-chat workspace for reports, analysis, and everyday business questions. It is meant for users who want answers from notebooks without working directly in raw cells and code.

## Choose Business mode

1. Open Orion.
2. In the first-run dialog, choose **Business**.
3. Click **Continue**.

Choose **Pro** instead when you want the full notebook-first IDE with cells, code, file panels, and the complete developer workflow.

You can change the choice later from **Settings → Appearance**.

## Add personal context for the assistant

After choosing an AI provider, Business mode offers a short interview called **Help Orion understand your work**. It helps you give the assistant useful background, such as your role, the kind of analysis you do, and where data access is configured.

1. Answer the interview questions, then choose **Review profile**.
2. Edit the proposed profile before saving it.
3. Choose **Save to ORION.md** when it is accurate, or **Skip for now** to finish onboarding without a profile.

Orion includes this local background in agent conversations. It does not give Orion access to anything new or override its safety and workspace rules. Never include passwords, API keys, tokens, or private keys.

To review, change, resume, or delete it later, open **Settings → Personal context**. The file is stored locally at:

- **macOS / Linux:** `~/.orion/ORION.md`
- **Windows:** `%USERPROFILE%\.orion\ORION.md`

## What changes

- Orion opens a chat-first workspace focused on projects and reports.
- You see App View content instead of raw notebook cells.
- **New notebook** creates a notebook for a fresh report or question.
- **Refresh** reruns the report and updates visible App View output.
- **Edit** lets you revise report markdown directly in App View and remove outputs from the visible report.
- **Share** publishes the current report through Orion Cloud.
- **Export** creates a PDF or HTML copy of the visible report.
- Dirty editor files autosave in Business mode, even if the general autosave setting is off.

## Work with projects

1. Choose a project folder when Orion asks where your work lives.
2. Open an existing analysis or create a new one.
3. Ask Orion to create, update, or explain a report.
4. Use **Refresh** after data or notebook changes.
5. Pin frequently used projects or files from the more-actions menu.

Business mode still uses local Jupyter to run notebook code. If Orion asks you to connect a runtime, choose the Python environment that has your data libraries installed.

## Search a project

With a project open, press **Command + K** on macOS or **Ctrl + K** on Windows/Linux to search the workspace.

1. Type at least two characters.
2. Choose a result under **Files** to open that file, or choose a result under **Content** to open the matching line.
3. Use the **Aa** button when you need a case-sensitive search.

Search includes file names and file contents. It needs an open workspace and an active Jupyter connection.

## Edit a report

1. Open a notebook in Business mode.
2. Click **Edit** in the report toolbar.
3. Click a markdown section to edit its text.
4. Click **Save**, or press **Ctrl + Enter** on Windows/Linux or **Command + Enter** on macOS.
5. Right-click a report item and choose **Remove** to hide it from App View.
6. Click **Done** when you are finished.

If you remove the wrong item, press **Ctrl + Z** on Windows/Linux or **Command + Z** on macOS before leaving the report.

## Related

- [Your first session](/getting-started/first-session)
- [App View](/notebooks/app-view)
- [Orion UI (`orion_ui`)](/notebooks/orion-ui)

---

*Last updated August 2026.*
