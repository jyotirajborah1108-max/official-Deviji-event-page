@echo off
echo ============================================
echo Image Setup for Upanishad Gyanamrit Website
echo ============================================
echo.
echo Please follow these steps:
echo.
echo 1. Save the images you converted to WebP format to this folder:
echo    %CD%\public\assets\
echo.
echo 2. Rename them as follows:
echo    - Hindi event poster (27 Nov to 10 Dec) → hero-banner.webp
echo    - Speaker on white stage (decorative background) → seated-stage.webp  
echo    - Close-up with blue background → close-up.webp
echo.
echo 3. After saving all 3 images, press any key to verify...
pause
echo.
echo Checking for images...
if exist "public\assets\hero-banner.webp" (
    echo [✓] hero-banner.webp found
) else (
    echo [✗] hero-banner.webp MISSING
)
if exist "public\assets\seated-stage.webp" (
    echo [✓] seated-stage.webp found
) else (
    echo [✗] seated-stage.webp MISSING
)
if exist "public\assets\close-up.webp" (
    echo [✓] close-up.webp found
) else (
    echo [✗] close-up.webp MISSING
)
echo.
echo Once all 3 images are present, run: npm run dev
echo.
pause
