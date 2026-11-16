@echo off
setlocal
title Simple Calendar v42 Installer
rem Always work in the folder this .bat is in (double-click, Downloads, or "Run as administrator").
cd /d "%~dp0"
set "N=Simple-Calendar-Windows-Installer-v42.exe"
set "MISSING=0"
for %%i in (00 01 02 03 04) do (
  if not exist "%N%.%%i.part" (
    echo Missing file: %N%.%%i.part
    set "MISSING=1"
  )
)
if "%MISSING%"=="1" goto missing
rem Remove an old joined installer first, so a half-built or older file is never reused.
if exist "%N%" del /f /q "%N%"
if exist "%N%" goto inuse
echo Building the installer, please wait...
copy /b "%N%.00.part"+"%N%.01.part"+"%N%.02.part"+"%N%.03.part"+"%N%.04.part" "%N%" >nul
if errorlevel 1 goto failed
if not exist "%N%" goto failed
for %%F in ("%N%") do set "SIZE=%%~zF"
if not "%SIZE%"=="99624353" goto failed
echo Done! Starting the installer...
start "" "%N%"
exit /b 0

:missing
echo.
echo Please download all 5 parts into this folder:
echo   %CD%
echo then double-click this file again.
pause
exit /b 1

:inuse
echo.
echo Could not replace the old %N%.
echo Close the installer if it is still open, then double-click this file again.
pause
exit /b 1

:failed
if exist "%N%" del /f /q "%N%"
echo.
echo Something went wrong joining the parts. The installer should be 99,624,353 bytes.
echo Please delete the 5 parts, download them again, then double-click this file again.
pause
exit /b 1
