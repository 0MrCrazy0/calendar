@echo off
title Simple Calendar Installer
cd /d "%~dp0"
set N=Simple-Calendar-Windows-Installer.exe
for %%i in (00 01 02 03 04) do (
  if not exist "%N%.%%i.part" (
    echo Missing file: %N%.%%i.part
    echo Please download all 5 parts into this same folder, then try again.
    pause
    exit /b 1
  )
)
echo Building the installer, please wait...
copy /b "%N%.00.part"+"%N%.01.part"+"%N%.02.part"+"%N%.03.part"+"%N%.04.part" "%N%" >nul
if not exist "%N%" (
  echo Something went wrong. Please download the parts again.
  pause
  exit /b 1
)
echo Done! Starting the installer...
start "" "%N%"
