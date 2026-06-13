# Publish notebooks to Orion Cloud

Publish a notebook from local Orion to a shareable Orion Cloud page at `https://app.orion-agent.ai/p/<slug>`. Viewers open the page in a browser; published notebooks do not run Python on Orion's servers.

## When you need this

- Share a dashboard or notebook with teammates or clients.
- Publish from **Notebook view** or **App View** (Orion captures whichever view is visible).
- Let signed-in viewers import the source `.ipynb` into local Orion when you enable that option.

## Sign in to Orion Cloud

1. Click the **Orion logo** in the top-right toolbar (tooltip: **Account & settings**).
2. Choose **Sign In**.
3. Sign in with email and password, or choose **Google**.

To create an account, switch to **I don't have an account**, fill in your name and role, then confirm the email link Supabase sends before signing in.

After sign-in, the menu shows your email under **Orion Cloud**. Open **Settings** and choose **Account** to update your profile, change your password, or sign out.

Forgot your password? On the sign-in form, choose **Forgot password?** and follow the reset link in your email. The link opens Orion's password reset page in your browser.

## Publish a notebook

1. Open the notebook in Orion and connect to Jupyter.
2. Switch to **Notebook view** or **App View**, depending on what you want viewers to see.
3. In the notebook toolbar, click **Publish to Orion Cloud** (cloud upload icon).
4. Sign in if prompted.
5. Set **Title** and **Description**.
6. Review **Hide input cells in published page** (on by default). When checked, code inputs are hidden in the published snapshot, similar to a presentation export. The uploaded source `.ipynb` still contains full cells when download is enabled.
7. Optionally check **Allow viewers to download the source .ipynb**. Required for the **Open in Orion** import flow.
8. Click **Publish**.

Orion saves pending cell edits, uploads the notebook bundle, and shows a share link. Use **Copy link** or **Open** to view the published page.

## Update an existing publication

If you have published notebooks before, the publish dialog lists them under **Publish target**. Choose **Update: …** to replace an existing page instead of creating a new one. Title, description, and download settings are prefilled from the selected publication.

## Notebook view vs App View

Orion publishes the **currently visible surface**, same as [export](/notebooks/export-notebooks):

- **Notebook view** — classic cell layout.
- **App View** — dashboard layout with sections and cards.

Switch views before publishing if you need a specific presentation.

## What viewers see

The share link opens a hosted HTML page captured at publish time. Viewers can scroll and interact with rendered outputs (charts, Orion UI widgets, and so on), but **no Python kernel runs** on Orion's servers. Buttons or controls that would execute notebook code show a message that execution is not available in published views.

If you enabled source download, a fixed **Open in Orion** button appears in the top-right corner of the published page.

## Open a published notebook in local Orion

When source download is enabled, viewers who have local Orion installed can import the notebook to edit and run cells.

### On the published page

1. Click **Open in Orion** (top-right of the published page).
2. On the handoff page, click **Open in Orion** again. If Orion is not running yet, choose **Download Orion**, install it, start it with `orion`, then return to the handoff page.

Local Orion opens at `http://localhost:3001/cloud/open` (default port; override with `ORION_PORT` if you changed it).

### In local Orion

1. **Sign in** to Orion Cloud if prompted (same account as the publisher is not required, but you must be signed in to download the source file).
2. Connect Orion to **Jupyter** if you are not already connected.
3. In the **Save published notebook** dialog, edit the filename if needed, then click **Choose save location**.
4. Pick a folder in the system save dialog. Orion saves the `.ipynb` and opens it in the editor.

The import handoff expires after 24 hours. If import fails, open **Open in Orion** again from the published page.

If the publisher disabled source download, the handoff page explains that import is unavailable.

## Orion Cloud not configured

If you built Orion from source or run a custom local build, publishing may show **Orion Cloud is not configured in this local app**. Standard installs from [Install Orion](/getting-started/install) include Orion Cloud. Self-hosted builds need `.env` in the repo root (copy `.env.example` to `.env`) with the hosted API and Supabase environment variables set before you build.

See [Fix Orion Cloud publish and import issues](/troubleshooting/orion-cloud-publish-and-import) for other common errors.

## Related

- [Export notebooks](/notebooks/export-notebooks)
- [App View](/notebooks/app-view)
- [Local vs hosted app](/getting-started/local-vs-hosted)
- [Fix Orion Cloud publish and import issues](/troubleshooting/orion-cloud-publish-and-import)

---

*Last updated June 2026.*
