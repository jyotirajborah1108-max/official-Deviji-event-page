@echo off
cls
echo ============================================
echo Upanishad Gyanamrit Website - Test Build
echo ============================================
echo.

REM Check if dist folder exists
if not exist "dist" (
    echo [!] No build found. Running build first...
    echo.
    call build-site.bat
    if errorlevel 1 (
        echo [X] Build failed
        pause
        exit /b 1
    )
)

echo Starting preview server...
echo Testing production build at: http://localhost:4173
echo.
echo This is how the site will look when deployed.
echo Press Ctrl+C to stop the preview server
echo.
echo ============================================
echo.

call npm run preview
