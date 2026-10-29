# Simple Calendar for Windows: How to Install

The Windows installer comes in **5 parts** because the full file is too big to share in one piece. You join them back into one installer and run it. It takes about 2 minutes.

## Step 1: Download all 5 parts

Download these files and put them **all in the same folder** (for example, your `Downloads` folder):

- `Simple-Calendar-Setup-v38.exe.00.part`
- `Simple-Calendar-Setup-v38.exe.01.part`
- `Simple-Calendar-Setup-v38.exe.02.part`
- `Simple-Calendar-Setup-v38.exe.03.part`
- `Simple-Calendar-Setup-v38.exe.04.part`

The parts won't run on their own, so you need all 5.

## Step 2: Open PowerShell in that folder

1. Open the folder with the 5 parts in File Explorer.
2. Hold **Shift**, then **right-click** an empty space in the folder.
3. Click **Open PowerShell window here** (or **Open in Terminal**).

## Step 3: Join the parts

Copy this whole line, paste it into the window (right-click pastes), and press **Enter**:

```
cmd /c "copy /b Simple-Calendar-Setup-v38.exe.00.part+Simple-Calendar-Setup-v38.exe.01.part+Simple-Calendar-Setup-v38.exe.02.part+Simple-Calendar-Setup-v38.exe.03.part+Simple-Calendar-Setup-v38.exe.04.part Simple-Calendar-Setup-v38.exe"
```

A new file called **`Simple-Calendar-Setup-v38.exe`** (about 94 MB) will appear in the folder. Once it's there, you can delete the `.part` files.

## Step 4: Install

1. Double-click **`Simple-Calendar-Setup-v38.exe`**.
2. If Windows shows **"Windows protected your PC"**, click **More info**, then **Run anyway**. (The app isn't signed by a paid certificate yet. It's safe to install.)
3. Follow the installer. Leave **Start at login** ticked so your alerts always work.
4. Simple Calendar opens when the install finishes. There's also a shortcut on your desktop and in the Start menu.

## Making sure you never miss an alert

- Closing the window doesn't quit the app. It keeps running in the **system tray** (the small icons next to the clock) and alerts you from there.
- Alerts only fire while your PC is **on** and the app is in the tray. To fully quit, right-click the tray icon and choose **Quit**. If you do, you won't get alerts.
- If Windows asks, allow notifications from Simple Calendar. You can check this under **Settings > System > Notifications**.

## Troubleshooting

- **"cannot find the file"**: make sure all 5 parts are in the same folder and you opened PowerShell in that folder.
- **The installer won't open**: check that the joined file is about 94 MB. If it's smaller, a part is missing or didn't finish downloading.
- **No alerts**: check the tray icon is there, and that Windows **Focus / Do not disturb** is turned off.

## Uninstall

Go to **Settings > Apps**, find **Simple Calendar**, and click **Uninstall**.
