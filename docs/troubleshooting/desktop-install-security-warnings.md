# Why macOS and Windows warn about the Orion desktop app

When you download Orion from the website or [GitHub releases](https://github.com/nicolasakf/Orion-app/releases/latest), your operating system may show a security warning before the app opens. This is not because Orion is unsafe — it is because Orion is a free, open-source project and does not yet hold the commercial publisher certificates that trigger automatic trust in macOS and Windows.

## What's actually going on

Apple and Microsoft both run gating systems that distinguish software from known commercial publishers from everything else. Getting that "known publisher" status requires paid certificates:

- **Apple** requires an active Apple Developer Program membership and a paid notarization process to avoid Gatekeeper warnings on macOS.
- **Windows SmartScreen** builds trust over time by tracking how many users have downloaded and run a given publisher's signed binaries. Until a threshold is reached — which takes time and volume — every installer from a new publisher shows a warning.

Orion is a community-driven, open-source project. We do not have the budget of a commercial software company, and right now those certificate and membership costs are a meaningful expense for a project that is otherwise free. That is the honest reason the warning appears: not malware, not a problem with the app — just the reality of how platform gatekeeping works for independent and community-built software.

The entire Orion codebase is public. You can read every line, inspect every release artifact, and verify the build yourself on [GitHub](https://github.com/nicolasakf/Orion-app) before you install anything.

## When you see a warning

- You downloaded the macOS `.dmg` or Windows `.exe` installer.
- macOS shows **"cannot be opened because Apple cannot check it for malicious software"** or **"unidentified developer"**.
- Windows SmartScreen shows **"Windows protected your PC"** or **"Unknown publisher"**.

## Run Orion anyway

### macOS

1. Download the `.dmg` and open it.
2. Drag **Orion** to **Applications**.
3. Open Orion from **Applications** or Spotlight.
4. If macOS blocks the app:
   - **Right-click** Orion in Applications, choose **Open**, then confirm **Open**, or
   - Open **System Settings → Privacy & Security**, scroll to the Orion message, and choose **Open Anyway**.

### Windows

1. Run the downloaded `.exe` installer.
2. If SmartScreen appears, click **More info**, then **Run anyway**.
3. Finish the installer and launch Orion from the Start menu or desktop shortcut.

## Prefer the CLI instead?

If you would rather skip desktop installers entirely, use the managed command-line installer from [Install Orion](/getting-started/install#install-script). It installs the `orion` CLI and opens Orion in your browser without a separate desktop app download.

## Related

- [Install Orion](/getting-started/install)
- [CLI reference](/configuration/cli-reference)

---

*Last updated June 2026.*
