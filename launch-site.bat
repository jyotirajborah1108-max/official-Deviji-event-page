@echo off
cls
echo ============================================
echo Upanishad Gyanamrit Website - Launch Script
echo ============================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [!] node_modules not found. Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [X] Failed to install dependencies
        pause
        exit /b 1
    )
    echo [✓] Dependencies installed successfully
    echo.
)

REM Check for required images
echo Checking for required images...
set IMAGES_OK=1

if exist "public\assets\hero-banner.webp" (
    echo [✓] hero-banner.webp found
) else (
    echo [X] hero-banner.webp MISSING
    set IMAGES_OK=0
)

if exist "public\assets\seated-stage.webp" (
    echo [✓] seated-stage.webp found
) else (
    echo [X] seated-stage.webp MISSING
    set IMAGES_OK=0
)

if exist "public\assets\close-up.webp" (
    echo [✓] close-up.webp found
) else (
    echo [X] close-up.webp MISSING
    set IMAGES_OK=0
)

echo.

if %IMAGES_OK%==0 (
    echo ============================================
    echo [!] MISSING IMAGES
    echo ============================================
    echo Please save the following images to public\assets\:
    echo   1. hero-banner.webp - Hindi event poster
    echo   2. seated-stage.webp - Speaker on white stage
    echo   3. close-up.webp - Close-up with blue background
    echo.
    echo After adding images, run this script again.
    echo ============================================
    pause
    exit /b 1
)

echo ============================================
echo All checks passed! Ready to launch.
echo ============================================
echo.
echo Starting development server...
echo Website will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ============================================
echo.

call npm run dev
