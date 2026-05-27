# Fix Jupyter CORS connection errors

Orion runs in your browser and talks to Jupyter over HTTP. If Jupyter does not allow cross-origin requests from Orion's URL, the connection fails.

## Fix

Start Jupyter with an explicit allow origin:

**macOS / Linux (bash/zsh):**

```bash
jupyter server --ServerApp.allow_origin='*'
```

**Windows (PowerShell):**

```powershell
jupyter server --ServerApp.allow_origin='*'
```

Copy the URL with token from the terminal and paste it into Orion's kernel selector.

## When you need this

- Connection dialog succeeds briefly then errors mention **CORS** or **blocked**
- Browser developer console shows cross-origin failures to `127.0.0.1:8888` (or your Jupyter host)
- Manual Jupyter works in the terminal but Orion cannot attach

## Persistent configuration

Add to Jupyter config so you do not pass the flag every time:

**macOS / Linux:** `~/.jupyter/jupyter_server_config.py`

**Windows:** `%USERPROFILE%\.jupyter\jupyter_server_config.py`

```python
c.ServerApp.allow_origin = "*"
```

Restart Jupyter after editing.

## Related

- [Connect to an external Jupyter server](/troubleshooting/connect-external-jupyter)
- [Your first session](/getting-started/first-session)

---

*Last updated May 2026.*
