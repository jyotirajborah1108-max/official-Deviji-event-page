# Image Conversion Guide

## Images Needed in public/assets/

1. **hero-banner.webp** - Main event poster
   - Source: The image with Hindi text showing dates 27 Nov to 10 Dec
   - Recommended size: 1960x1080px or similar landscape

2. **seated-stage.webp** - Speaker on stage
   - Source: Photo of Raseshwari Devi Ji seated on decorated white stage  
   - Recommended size: 800x1000px or similar portrait

3. **close-up.webp** - Portrait photo
   - Source: Close-up photo with microphone and garlands
   - Recommended size: 800x1000px or similar portrait

## Quick Conversion Methods

### Method 1: Online Converter (Easiest)
1. Go to https://cloudconvert.com/jpg-to-webp
2. Upload your image
3. Set quality to 85%
4. Convert and download
5. Rename to match the required filename
6. Place in `public/assets/` folder

### Method 2: Using Windows Paint / Photos
1. Open image in Windows Photos app
2. Click "..." menu → "Save as"
3. Choose WebP format if available
4. Rename and place in `public/assets/`

### Method 3: Using PowerShell with ImageMagick
If you have ImageMagick installed:

```powershell
# Navigate to your images folder
cd "path\to\your\images"

# Convert images
magick input-banner.jpg -quality 85 hero-banner.webp
magick input-stage.jpg -quality 85 seated-stage.webp
magick input-closeup.jpg -quality 85 close-up.webp

# Move to project
Move-Item *.webp "C:\Users\bgsmi\OneDrive\Documents\official-Deviji-event-page\public\assets\"
```

### Method 4: Batch Convert using Node.js
If you want to convert multiple images:

1. Install sharp: `npm install sharp`
2. Create convert.js:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { input: 'source-banner.jpg', output: 'hero-banner.webp' },
  { input: 'source-stage.jpg', output: 'seated-stage.webp' },
  { input: 'source-closeup.jpg', output: 'close-up.webp' }
];

images.forEach(async ({ input, output }) => {
  await sharp(input)
    .webp({ quality: 85 })
    .toFile(path.join('public', 'assets', output));
  console.log(`Converted ${input} to ${output}`);
});
```

3. Run: `node convert.js`

## After Converting

Once you have all three WebP images in `public/assets/`, run:

```bash
npm install
npm run dev
```

The website should load with all images properly displayed!
