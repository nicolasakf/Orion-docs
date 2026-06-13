# Fix Orion Cloud publish and import issues

Use this guide when publishing to Orion Cloud fails, or when **Open in Orion** does not import a published notebook into your local app.

## When you need this

- Publish shows **Orion Cloud is not configured in this local app**.
- **Open in Orion** does nothing, or the browser cannot reach local Orion.
- Import stops at sign-in, Jupyter connection, or a download error.
- The handoff page says **Source import unavailable**.

## Orion Cloud is not configured

**Symptom:** The publish dialog or sign-in flow shows **Orion Cloud is not configured in this local app** (or **Orion Cloud is not configured for this local app**).

**Fix:** Use a standard Orion install from [Install Orion](/getting-started/install). Builds from source need a `.env` file in the repo root (copy `.env.example` to `.env`) with Orion Cloud variables set before you build:

- `NEXT_PUBLIC_ORION_API_BASE_URL` (typically `https://app.orion-agent.ai`)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Rebuild or reinstall after changing these values, then restart Orion.

## Local Orion is not running

**Symptom:** Clicking **Open in Orion** on a published page opens `http://localhost:3001/...` but the page does not load.

**Fix:**

1. Start local Orion:

   **macOS / Linux / Windows (PowerShell or cmd):**

   ```bash
   orion
   ```

2. Confirm the app opens in your browser (default `http://localhost:3001`).
3. Return to the published notebook and click **Open in Orion** again.

If you use a non-default port, set **`ORION_PORT`** before starting Orion and use that port in the URL.

## Sign in required for import

**Symptom:** Local Orion prompts for sign-in and will not download the notebook.

**Fix:**

1. Click the **Orion logo** → **Sign In**.
2. Sign in with the same Orion Cloud account you use for publishing, or create one.
3. Complete the import flow again.

Source download requires an authenticated Orion Cloud session even though the published page itself is public.

## Connect Jupyter before import

**Symptom:** A toast says **Connect Orion to Jupyter to import this published notebook.**

**Fix:**

1. Connect to Jupyter using the kernel selector (CLI-managed Jupyter starts automatically with `orion`).
2. Wait until the connection is active.
3. The import should continue automatically. If not, click **Open in Orion** on the published page again.

See [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter) if you use your own Jupyter server.

## Source import unavailable

**Symptom:** The handoff page shows **Source import unavailable** or **The publisher disabled source import and download.**

**Fix:** The notebook owner did not enable **Allow viewers to download the source .ipynb** when publishing. Ask them to republish with that option checked, or share the notebook another way (for example [export as HTML](/notebooks/export-notebooks)).

## Import handoff expired

**Symptom:** Import worked before but now nothing happens after opening local Orion.

**Fix:** Pending imports expire after 24 hours. Open the published page and click **Open in Orion** again to start a fresh handoff.

## Could not reach Orion API

**Symptom:** Publish or import fails with **Could not reach Orion API at …**

**Fix:**

1. Check your internet connection.
2. Confirm you can open [app.orion-agent.ai](https://app.orion-agent.ai) in a browser.
3. If you self-host the API, verify `NEXT_PUBLIC_ORION_API_BASE_URL` points to the correct host and uses `http://` for local development unless you configured TLS.

## Related

- [Publish to Orion Cloud](/notebooks/publish-notebooks)
- [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter)

---

*Last updated June 2026.*
