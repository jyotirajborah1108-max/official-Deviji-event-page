@echo off
echo ========================================
echo Upanishad Gyanamrit Website Setup
echo ========================================
echo.

echo [1/3] Installing dependencies...
echo This may take a few minutes...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: npm install failed!
    echo Please check your Node.js installation.
    pause
    exit /b 1
)

echo.
echo [2/3] Checking for images...
if not exist "public\assets\hero-banner.webp" (
    echo WARNING: hero-banner.webp not found in public\assets\
)
if not exist "public\assets\seated-stage.webp" (
    echo WARNING: seated-stage.webp not found in public\assets\
)
if not exist "public\assets\close-up.webp" (
    echo WARNING: close-up.webp not found in public\assets\
)

echo.
echo [3/3] Setup complete!
echo.
echo ========================================
echo Next steps:
echo ========================================
echo 1. Convert your images to WebP format
echo 2. Place them in public\assets\ folder
echo 3. Run: npm run dev
echo.
echo See SETUP-INSTRUCTIONS.md for details.
echo ========================================
pause
