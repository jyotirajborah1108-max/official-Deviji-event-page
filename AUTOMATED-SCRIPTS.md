# Automated Testing and Building Scripts

I've created 4 automated batch scripts to streamline your workflow:

---

## 🚀 Quick Start Scripts

### 1. **launch-site.bat** - Start Development Server
**Use this for:** Testing the site during development

**What it does:**
- ✓ Checks if dependencies are installed
- ✓ Verifies all 3 images are present
- ✓ Starts development server at http://localhost:5173
- ✓ Auto-reloads when you make changes

**Run:** Double-click `launch-site.bat` or run in terminal:
```bash
.\launch-site.bat
```

---

### 2. **build-site.bat** - Create Production Build
**Use this for:** Building optimized files for deployment

**What it does:**
- ✓ Checks dependencies and images
- ✓ Cleans previous build
- ✓ Builds optimized production files
- ✓ Shows build size and deployment instructions

**Run:** Double-click `build-site.bat` or run in terminal:
```bash
.\build-site.bat
```

**Output:** Creates `dist/` folder ready for deployment

---

### 3. **test-build.bat** - Preview Production Build
**Use this for:** Testing how the site will look when deployed

**What it does:**
- ✓ Runs build if needed
- ✓ Starts preview server at http://localhost:4173
- ✓ Shows production-optimized version

**Run:** Double-click `test-build.bat` or run in terminal:
```bash
.\test-build.bat
```

---

### 4. **complete-workflow.bat** - Full Test & Build Process
**Use this for:** Complete testing and production workflow in one go

**What it does:**
1. ✓ Checks dependencies
2. ✓ Verifies all images
3. ✓ Launches dev server for testing
4. ✓ Builds production version
5. ✓ Previews production build

**Run:** Double-click `complete-workflow.bat` or run in terminal:
```bash
.\complete-workflow.bat
```

---

## 📋 Before Running Any Script

**Make sure these 3 images are in `public\assets\` folder:**
- `hero-banner.webp` - Hindi event poster (27 Nov to 10 Dec)
- `seated-stage.webp` - Speaker on white stage with decorative background
- `close-up.webp` - Close-up portrait with blue background

---

## 🎯 Recommended Workflow

### For First Time:
1. Add the 3 WebP images to `public\assets\`
2. Run `launch-site.bat` to test locally
3. Run `build-site.bat` to create production files
4. Run `test-build.bat` to preview production version
5. Deploy the `dist\` folder

### For Quick Testing:
```bash
.\launch-site.bat
```

### For Production Build:
```bash
.\build-site.bat
```

### For Complete Process:
```bash
.\complete-workflow.bat
```

---

## 🛑 Stopping Servers

To stop any running server:
- Press `Ctrl + C` in the terminal window
- Or close the terminal window

---

## 📦 Deployment

After running `build-site.bat`, you'll have a `dist\` folder. Deploy it to:

1. **Netlify** (Easiest)
   - Go to https://app.netlify.com/drop
   - Drag the `dist` folder
   - Done!

2. **Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **GitHub Pages**
   ```bash
   git add dist
   git commit -m "Build production"
   git subtree push --prefix dist origin gh-pages
   ```

---

## ⚡ All Scripts Include:

- ✅ Automatic dependency checking
- ✅ Image verification
- ✅ Error handling
- ✅ Clear status messages
- ✅ No manual npm commands needed

Just double-click and go! 🚀
