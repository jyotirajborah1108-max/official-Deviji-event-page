@echo off
cls
echo ============================================
echo Upanishad Gyanamrit Website - Build Script
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
echo All checks passed! Building production site...
echo ============================================
echo.

REM Clean previous build
if exist "dist" (
    echo Cleaning previous build...
    rmdir /s /q dist
    echo.
)

REM Build the site
call npm run build

if errorlevel 1 (
    echo.
    echo ============================================
    echo [X] BUILD FAILED
    echo ============================================
    pause
    exit /b 1
)

echo.
echo ============================================
echo [✓] BUILD SUCCESSFUL!
echo ============================================
echo.
echo Production files are in the 'dist' folder
echo.
echo Next steps:
echo   1. Test locally: npm run preview
echo   2. Deploy 'dist' folder to your hosting service
echo.
echo Deployment options:
echo   - Netlify: drag 'dist' folder to netlify.com/drop
echo   - Vercel: vercel --prod
echo   - GitHub Pages: push to gh-pages branch
echo.
echo ============================================

REM Show folder size
echo.
echo Build output size:
for /f "tokens=3" %%a in ('dir /s /-c dist ^| findstr "bytes"') do set SIZE=%%a
echo %SIZE% bytes
echo.

pause
