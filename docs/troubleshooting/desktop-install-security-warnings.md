# Why macOS and Windows warn about the Orion desktop app

When you download Orion from the website or [GitHub releases](https://github.com/nicolasakf/Orion-app/releases/latest), your operating system may block or warn before the app opens. That is expected for direct downloads while Orion is still building publisher reputation with Apple and Microsoft.

Orion is open source and developed transparently. You can review the code and release artifacts on [GitHub](https://github.com/nicolasakf/Orion-app) before installing.

## When you see a warning

- You downloaded the macOS `.dmg` or Windows `.exe` installer.
- macOS shows **cannot be opened because Apple cannot check it for malicious software** or **unidentified developer**.
- Windows SmartScreen shows **Windows protected your PC** or **Unknown publisher**.

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

## Why this happens

- **macOS Gatekeeper** expects apps distributed outside the Mac App Store to be signed with an Apple Developer ID certificate and **notarized** by Apple. New or independently distributed apps often trigger warnings until notarization is in place.
- **Windows SmartScreen** builds trust over time for new publishers. A first download from a new publisher commonly shows a warning even when the installer is legitimate.

These checks protect users from unknown software. They are not a sign that Orion is malware — they mean your computer does not yet recognize Orion's publisher.

## Prefer the CLI instead?

If you would rather skip desktop installers, use the managed command-line installer from [Install Orion](/getting-started/install#install-script). It installs the `orion` CLI and opens Orion in your browser without a separate desktop app download.

## Related

- [Install Orion](/getting-started/install)
- [CLI reference](/configuration/cli-reference)

---

*Last updated June 2026.*
