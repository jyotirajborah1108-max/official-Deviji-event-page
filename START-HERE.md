# 🚀 START HERE - Upanishad Gyanamrit Website

**Welcome!** This is your complete guide to getting the website up and running.

---

## ⚡ Super Quick Start (2 Steps)

### Step 1: Add Images
Place these 3 WebP images in the `public/assets/` folder:
- `hero-banner.webp` - Main event poster (Hindi poster with Rohtak details)
- `seated-stage.webp` - Speaker on stage photo (white stage with decorative background)
- `close-up.webp` - Close-up speaker photo (blue background portrait)

**Don't have WebP images yet?** See [convert-images-to-webp.md](convert-images-to-webp.md)

### Step 2: Run Automated Script
Just double-click: **`launch-site.bat`** ✨

That's it! The script will:
- ✓ Check dependencies (install if needed)
- ✓ Verify images are present  
- ✓ Start the development server
- ✓ Open http://localhost:5173 in your browser

---

## 🎯 All Available Automated Scripts

I've created 4 automated scripts for you (no manual npm commands needed!):

| Script | Purpose | When to Use |
|--------|---------|-------------|
| **launch-site.bat** | Start dev server | Testing during development |
| **build-site.bat** | Build for production | Creating deployment files |
| **test-build.bat** | Preview production | Testing final version |
| **complete-workflow.bat** | Full process | Complete testing & building |

📖 **Full details:** See [AUTOMATED-SCRIPTS.md](AUTOMATED-SCRIPTS.md)

---

## ✅ What's Already Done

✓ **All code files created** (React, TypeScript, CSS - 1200+ lines)  
✓ **Dependencies installed** (node_modules folder exists)  
✓ **Build tools configured** (Vite, Tailwind CSS, PostCSS)  
✓ **Project structure complete** (28 files)  
✓ **Documentation written** (15 guide files)
✓ **Automated scripts created** (4 batch files)

**You're 95% there!** Just add the 3 images and run a script.

---

## 📂 File Structure Quick Reference

```
official-Deviji-event-page/
├── 🚀 launch-site.bat            ← DOUBLE-CLICK THIS!
├── 🏗️ build-site.bat             ← Build for production
├── 🧪 test-build.bat             ← Preview production
├── 📋 complete-workflow.bat      ← Full workflow
├── 📄 index.html                 ← HTML entry point
├── 📦 package.json               ← Dependencies config
├── 📁 src/
│   ├── App.tsx                  ← Main React component (745 lines)
│   ├── index.css                ← All styles (Tailwind + custom)
│   └── main.tsx                 ← React entry point
├── 📁 public/
│   └── assets/                  ← PUT YOUR 3 WEBP IMAGES HERE!
│       ├── hero-banner.webp     ← Add this
│       ├── seated-stage.webp    ← Add this
│       └── close-up.webp        ← Add this
└── 📁 node_modules/              ✓ Already installed
```

---

## 🎨 What the Website Includes

### Sections
- ✅ Hero Banner with event details
- ✅ About the event
- ✅ Event highlights
- ✅ Speaker section with photo gallery
- ✅ Location details (Rohtak, Haryana)
- ✅ Schedule (27 Nov - 10 Dec, 2026, 6-8 PM)
- ✅ Registration form (Google Forms integration)
- ✅ YouTube video embed
- ✅ Contact information
- ✅ Footer with social links

### Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth animations and transitions
- ✅ Optimized images (WebP format)
- ✅ Fast loading with Vite
- ✅ TypeScript for type safety
- ✅ Production-ready build system

---

## 🚀 Manual Commands (If You Prefer)

If you want to run commands manually instead of using scripts:

### Development
```bash
npm run dev
```
Opens at http://localhost:5173

### Production Build
```bash
npm run build
```
Creates `dist/` folder

### Preview Production
```bash
npm run preview
```
Opens at http://localhost:4173

---

## 📱 Event Details in the Website

- **Event:** Upanishad Gyanamrit (उपनिषद् ज्ञानामृत)
- **Location:** Rohtak, Haryana
- **Dates:** 27 Nov - 10 Dec, 2026
- **Time:** 6:00 PM - 8:00 PM daily
- **Contact:** 8280342377, 7077731257
- **Registration:** Google Form integrated
- **Video:** YouTube embed included

---

## 🌐 Deployment Options

After building (`build-site.bat` or `npm run build`), deploy the `dist/` folder:

### Option 1: Netlify (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag & drop `dist` folder
3. Done! Get instant URL

### Option 2: Vercel
```bash
npm install -g vercel
vercel --prod
```

### Option 3: GitHub Pages
```bash
git add dist
git commit -m "Production build"
git subtree push --prefix dist origin gh-pages
```

---

## 📚 More Documentation

- 📖 [AUTOMATED-SCRIPTS.md](AUTOMATED-SCRIPTS.md) - Detailed script documentation
- 📖 [SETUP-INSTRUCTIONS.md](SETUP-INSTRUCTIONS.md) - Full setup guide
- 📖 [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) - Technical details
- 📖 [IMAGE-REQUIREMENTS.md](IMAGE-REQUIREMENTS.md) - Image specifications
- 📖 [COMPLETE-SUMMARY.md](COMPLETE-SUMMARY.md) - Everything about the project
- 📖 [CHECKLIST.md](CHECKLIST.md) - Task completion checklist

---

## 🆘 Need Help?

### Images aren't showing?
- Make sure images are named exactly: `hero-banner.webp`, `seated-stage.webp`, `close-up.webp`
- Check they're in `public/assets/` folder
- Run `launch-site.bat` - it verifies images automatically

### Server won't start?
- Run `launch-site.bat` - it checks and installs dependencies automatically
- Or manually: `npm install` then `npm run dev`

### Build errors?
- Run `build-site.bat` - it shows clear error messages
- Check that all 3 images are present

---

## 🎉 You're Ready!

1. Add 3 WebP images to `public/assets/`
2. Double-click `launch-site.bat`
3. Test at http://localhost:5173
4. Run `build-site.bat` for production
5. Deploy `dist/` folder

**That's it!** Your spiritual event website is ready to go live. 🕉️

---

*Last updated: November 25, 2026*
