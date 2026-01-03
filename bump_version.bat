@echo off
setlocal

:: Get current timestamp in YYYYMMDDHHMMSS format
for /f %%a in ('powershell -NoProfile -Command "Get-Date -Format yyyyMMddHHmmss"') do set version=%%a

:: Check if version field exists in _config.yml
findstr /b /c:"version:" _config.yml >nul
if %errorlevel%==0 (
    :: Replace the existing version line
    powershell -Command "(Get-Content _config.yml) -replace '^version:.*', 'version: %version%' | Set-Content _config.yml"
) else (
    :: Append version line if not present
    echo version: %version%>>_config.yml
)

echo ✅ Bumped version to %version%

endlocal
