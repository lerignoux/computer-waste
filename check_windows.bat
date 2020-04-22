
for /f "tokens=1-3,6" %%i in ('powercfg /q 381b4222-f694-41f0-9685-ff5bb260df2e 7516b95f-f776-4464-8c53-06167f40cc99 3c0bc021-c8a8-4e07-a973-6b14cbcb2b7e
') do ^
if "%%i %%j %%k"=="Current AC Power" set ScreenOffHexa=%%l

set /A ScreenOff=%ScreenOffHexa%


setlocal enableextensions enabledelayedexpansion
set /a count = 0
for /f "tokens=1 delims=\" %%a in ('wmic desktopmonitor get PNPDeviceID') do (
  if "%%a"=="DISPLAY" set /a count += 1
  echo %%a
  echo !count!
)
endlocal && set count=%count%


start "" "https://laurent.erignoux.fr/computer-waste/index.html?screenCount=%count%&screenOff=%ScreenOff%"