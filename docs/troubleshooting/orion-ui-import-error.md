# Fix: `ModuleNotFoundError: No module named 'orion_ui'`

Use this guide when a notebook cell fails with `ModuleNotFoundError: orion_ui` (or `import orion_ui as ui` does not work) while other Python code in the same notebook runs fine.

Orion notebook UI components come from the Python package **`orion-ui`**, which must be installed in the **same Python environment as your notebook kernel** — not only where you installed the `orion` CLI.

## When you need this

- A cell with `import orion_ui as ui` raises `ModuleNotFoundError`.
- Interactive Orion UI controls (sliders, selects, buttons) worked before on another machine but not on this one.
- You connect Orion to your own Jupyter server or conda environment instead of Orion's managed runtime.

## Fix: Orion managed runtime (default)

If Orion created the Jupyter environment under its data folder, **`orion-ui` is installed automatically** when you start Orion. You usually do not need a separate install step.

1. Start Orion from the CLI:

   ```bash
   orion
   ```

   On first setup, approve creating the managed runtime when prompted, or pass:

   ```bash
   orion --yes
   ```

2. Confirm Orion is using the managed Python at:

   - **macOS / Linux:** `~/.orion/runtime/venv/`
   - **Windows:** `%USERPROFILE%\.orion\runtime\venv\`

3. Restart Orion and re-run the notebook cell.

If the error persists, sync the managed environment manually (replace the Python path on your OS):

**macOS / Linux**

```bash
~/.orion/runtime/venv/bin/python -m pip install --upgrade "orion-ui==0.6.0"
```

**Windows (PowerShell)**

```powershell
& "$env:USERPROFILE\.orion\runtime\venv\Scripts\python.exe" -m pip install --upgrade "orion-ui==0.6.0"
```

Use the [Orion release version](https://github.com/nicolasakf/Orion-app/releases) that matches your installed `orion-notebook` package. Pinning the version keeps the Python UI library aligned with the Orion app you are running.

## Fix: external kernel (conda, venv, system Python)

If you selected your own Python or Jupyter install as the kernel, install **`orion-ui` into that environment**.

1. In Orion, note which kernel the notebook uses (kernel name in the toolbar).

2. Install the package with **that environment's** `python` or `pip`:

   ```bash
   python -m pip install orion-ui
   ```

   Examples:

   - **Conda:** activate the env first, then run the command above.
   - **Project venv:** use the venv's Python, e.g. `.venv/bin/python -m pip install orion-ui` (macOS/Linux) or `.venv\Scripts\python.exe -m pip install orion-ui` (Windows).

3. Restart the notebook kernel in Orion (Kernel → Restart, or the equivalent control in your UI).

4. Re-run the cell with `import orion_ui as ui`.

## Notes

- **`orion-notebook`** (the CLI from `pip install orion-notebook` or `npm install -g orion-notebook`) and **`orion-ui`** (the notebook UI library) are separate packages. Installing the CLI does not automatically add `orion_ui` to an unrelated Python kernel.
- Orion-managed runtimes install `orion-ui` during startup. External kernels require a manual install in that kernel's environment.
- Notebook UI output is rendered by Orion's app. Other Jupyter frontends may show a plain-text fallback instead of interactive controls.

## Related

- [Install Orion](/getting-started/install)
- PyPI: [orion-ui](https://pypi.org/project/orion-ui/)
- GitHub: [Orion-app README — Quick start](https://github.com/nicolasakf/Orion-app#quick-start)

---

*Last updated May 2026.*
