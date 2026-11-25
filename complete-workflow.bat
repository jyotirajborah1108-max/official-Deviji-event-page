@echo off
cls
echo ============================================
echo Upanishad Gyanamrit Website
echo Complete Testing and Building Workflow
echo ============================================
echo.
echo This script will:
echo   1. Check dependencies
echo   2. Verify images are present
echo   3. Start development server for testing
echo   4. Build production version
echo   5. Preview production build
echo.
echo ============================================
pause
cls

REM Step 1: Check dependencies
echo [1/5] Checking dependencies...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [X] Failed to install dependencies
        pause
        exit /b 1
    )
)
echo [✓] Dependencies OK
echo.

REM Step 2: Check images
echo [2/5] Checking images...
set IMAGES_OK=1

if exist "public\assets\hero-banner.webp" (
    echo [✓] hero-banner.webp
) else (
    echo [X] hero-banner.webp MISSING
    set IMAGES_OK=0
)

if exist "public\assets\seated-stage.webp" (
    echo [✓] seated-stage.webp
) else (
    echo [X] seated-stage.webp MISSING
    set IMAGES_OK=0
)

if exist "public\assets\close-up.webp" (
    echo [✓] close-up.webp
) else (
    echo [X] close-up.webp MISSING
    set IMAGES_OK=0
)

if %IMAGES_OK%==0 (
    echo.
    echo [X] Please add missing images to public\assets\ folder
    pause
    exit /b 1
)
echo.

REM Step 3: Development server
echo [3/5] Starting development server...
echo.
echo Opening http://localhost:5173 in your browser
echo Test the site, then close the browser and press Ctrl+C here
echo.
pause
start http://localhost:5173
call npm run dev
echo.

REM Step 4: Build production
echo [4/5] Building production version...
if exist "dist" (
    rmdir /s /q dist
)
call npm run build
if errorlevel 1 (
    echo [X] Build failed
    pause
    exit /b 1
)
echo [✓] Build complete
echo.

REM Step 5: Preview production
echo [5/5] Starting production preview...
echo.
echo Opening http://localhost:4173 in your browser
echo This is how it will look when deployed.
echo Press Ctrl+C when done testing
echo.
pause
start http://localhost:4173
call npm run preview
echo.

echo ============================================
echo [✓] WORKFLOW COMPLETE
echo ============================================
echo.
echo Your production files are in the 'dist' folder
echo Ready to deploy!
echo.
pause
