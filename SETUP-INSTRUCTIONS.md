# Complete Setup Instructions

## ✅ Files Created

The following project files have been created:
- ✅ `src/App.tsx` - Main React component with all event content
- ✅ `src/index.css` - Tailwind CSS and custom styling
- ✅ `src/main.tsx` - React entry point
- ✅ `index.html` - HTML template
- ✅ `package.json` - Project dependencies
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `vite.config.ts` - Vite bundler configuration
- ✅ `tailwind.config.js` - Tailwind CSS configuration
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `.gitignore` - Git ignore rules
- ✅ `README.md` - Project documentation
- ✅ `public/assets/` directory created

## 📋 Next Steps

### Step 1: Install Dependencies

Open PowerShell/Terminal in the project directory and run:

```bash
npm install
```

This will install:
- React & React DOM
- TypeScript
- Vite (build tool)
- Tailwind CSS
- Lucide React (icons)
- And other development dependencies

**Note:** Installation may take 2-3 minutes depending on your internet speed.

### Step 2: Convert Images to WebP

You need to convert 3 images from the uploaded files to WebP format:

#### Required Images:

1. **hero-banner.webp**
   - Use the poster image with Hindi text "उपनिषद् ज्ञानामृत"
   - Should show: 27 Nov to 10 Dec dates, venue info
   - Place in: `public/assets/hero-banner.webp`

2. **seated-stage.webp**
   - Use the image of Raseshwari Devi Ji seated on white ornate stage
   - Place in: `public/assets/seated-stage.webp`

3. **close-up.webp**
   - Use the close-up portrait at microphone with garlands
   - Place in: `public/assets/close-up.webp`

#### Conversion Options:

**A. Using Online Tool (Easiest):**
1. Go to: https://cloudconvert.com/jpg-to-webp
2. Upload each image
3. Set quality to 85%
4. Download and rename as specified
5. Move to `public/assets/` folder

**B. Using Windows (if WebP support available):**
1. Right-click image → "Open with" → Paint or Photos
2. File → Save As → WebP format
3. Rename and place in `public/assets/`

**C. Using Command Line (if ImageMagick installed):**
```bash
magick input.jpg -quality 85 output.webp
```

### Step 3: Run Development Server

After installing dependencies and placing images:

```bash
npm run dev
```

The website will open at: `http://localhost:5173`

### Step 4: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist/` folder ready for deployment.

## 🌐 Deployment Options

After building, you can deploy the `dist/` folder to:

- **Netlify**: Drag & drop the dist folder at netlify.com
- **Vercel**: Connect your GitHub repo or upload dist folder
- **GitHub Pages**: Push to gh-pages branch
- **Any web host**: Upload contents of dist folder via FTP

## 🔧 Troubleshooting

### If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### If images don't show:
1. Verify files are in `public/assets/` folder
2. Check filenames exactly match: `hero-banner.webp`, `seated-stage.webp`, `close-up.webp`
3. Refresh browser with Ctrl+F5

### If port 5173 is busy:
Vite will automatically use the next available port (5174, 5175, etc.)

## 📱 Features Included

✅ Fully responsive (mobile, tablet, desktop)
✅ Countdown timer to event start  
✅ Interactive 14-day schedule
✅ FAQ accordion
✅ Smooth scroll navigation
✅ Mobile hamburger menu
✅ Hindi Devanagari font support
✅ Animated reveals on scroll
✅ Call-to-action buttons
✅ Google Form integration
✅ SEO-friendly meta tags

## 🎨 Customization

To modify content, edit `src/App.tsx`:
- Event dates and times
- Speaker information
- Schedule details
- FAQ items
- Contact phone numbers
- Google Form URL

To change colors/styling, edit `src/index.css`:
- Color variables in `:root`
- Font families
- Animation timings

## 📞 Support

If you encounter any issues:
1. Check that Node.js v16+ is installed: `node --version`
2. Check that npm is installed: `npm --version`
3. Ensure all files are in the correct directories
4. Check browser console for error messages (F12)

Good luck with your event! 🪷
