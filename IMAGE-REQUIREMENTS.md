# Image Requirements

## Overview

You need **3 WebP images** placed in the `public/assets/` folder.

---

## 1. Hero Banner

**Filename:** `hero-banner.webp`

**Description:** The main event poster with Hindi text

**Requirements:**
- Format: WebP
- Quality: 85%
- Recommended size: 1960x1080px (or similar landscape)
- Max file size: 500KB
- Shows: Event dates (27 Nov - 10 Dec), venue, timings

**What it should contain:**
```
उपनिषद् ज्ञानामृत
27 नवंबर से 10 दिसंबर
प्रतिदिन शाम 6 बजे से 8 बजे तक
द सेवन नोट्स हॉल, रोहतक
```

**Location in website:** 
- Main hero section below the header
- Large banner image visible on page load

---

## 2. Seated Stage Photo

**Filename:** `seated-stage.webp`

**Description:** Raseshwari Devi Ji seated on decorated white stage

**Requirements:**
- Format: WebP
- Quality: 85%
- Recommended size: 800x1000px (portrait orientation)
- Max file size: 400KB
- Shows: Speaker seated with ornate circular backdrop, white stage setup

**Visual elements:**
- Yellow/saffron clothing
- White decorated stage
- Ornate circular golden backdrop
- Professional satsang setting

**Location in website:**
- "Core Message" section
- Right side of the content (desktop)
- Full width on mobile

---

## 3. Close-up Portrait

**Filename:** `close-up.webp`

**Description:** Close-up photo at microphone with garlands

**Requirements:**
- Format: WebP  
- Quality: 85%
- Recommended size: 800x1000px (portrait orientation)
- Max file size: 300KB
- Shows: Microphone, flower garlands, smiling face

**Visual elements:**
- Microphone visible
- Flower garlands (red/white/pink)
- Yellow/saffron attire
- Warm, welcoming expression

**Location in website:**
- "Speaker" section  
- Left side with biographical information
- Presented in decorative arch-shaped frame

---

## Conversion Guide

### Method 1: Online (Recommended for beginners)

1. Go to: **https://cloudconvert.com/jpg-to-webp**
2. Click "Select File" and choose your image
3. Click the wrench icon ⚙️ for settings
4. Set Quality to **85**
5. Click "Convert"
6. Download the converted file
7. Rename to match required filename
8. Move to `public/assets/` folder

### Method 2: Using Windows Paint 3D

1. Open image in Paint 3D
2. File → Save As
3. Choose "Image" → WebP format (if available)
4. Set quality slider to 85%
5. Save with correct filename

### Method 3: Command Line (Advanced)

If you have ImageMagick installed:

```bash
# Navigate to your images folder
cd path\to\images

# Convert each image
magick source-banner.jpg -quality 85 hero-banner.webp
magick source-stage.jpg -quality 85 seated-stage.webp
magick source-closeup.jpg -quality 85 close-up.webp

# Move to project
Move-Item *.webp ..\official-Deviji-event-page\public\assets\
```

---

## Verification Checklist

After converting and placing images, verify:

- [ ] All 3 files are in `public/assets/` folder
- [ ] Filenames match exactly (case-sensitive):
  - `hero-banner.webp`
  - `seated-stage.webp`
  - `close-up.webp`
- [ ] All files are WebP format (not JPG, PNG, etc.)
- [ ] File sizes are reasonable:
  - hero-banner.webp: 200-500KB
  - seated-stage.webp: 150-400KB  
  - close-up.webp: 100-300KB
- [ ] Images are good quality (not blurry or pixelated)

---

## Testing Images

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open browser to `http://localhost:5173`

3. Check these sections:
   - Hero section: hero-banner.webp should load
   - Core Message section: seated-stage.webp on the right
   - Speaker section: close-up.webp on the left

4. If image doesn't show:
   - Check filename spelling
   - Check file is in correct folder
   - Hard refresh browser (Ctrl+F5)
   - Check browser console (F12) for errors

---

## Image Quality Tips

✅ **DO:**
- Use high-resolution source images
- Maintain aspect ratio when resizing
- Use quality setting 80-90 for WebP
- Test images on the site before finalizing

❌ **DON'T:**
- Over-compress (quality below 70)
- Stretch or distort images
- Use images with watermarks
- Use extremely large file sizes (>1MB per image)

---

## Alternative Sources

If you don't have suitable images:

1. Check the uploaded images in your original request
2. Contact the event organizers for high-quality photos
3. Take screenshots from videos (1080p quality minimum)
4. Use images from raseshwarideviji.org with permission

---

## Support

If you have trouble with image conversion:

1. Check SETUP-INSTRUCTIONS.md for detailed steps
2. Try a different conversion method
3. Ask someone with photo editing experience
4. Use online tools which are user-friendly

Remember: The website will work without images, but they greatly enhance the visual appeal!

---

**Last Updated:** November 25, 2026  
**Questions?** See SETUP-INSTRUCTIONS.md or README.md
