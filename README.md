# Upanishad Gyanamrit - Rohtak Event Website

A React + TypeScript + Vite website for the Upanishad Gyanamrit event series in Rohtak (27 Nov - 10 Dec 2026).

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Convert and Place Images

You need to convert the provided images to WebP format and place them in `public/assets/` with these names:

- `hero-banner.webp` - The main event banner (Hindi text with dates)
- `seated-stage.webp` - Raseshwari Devi Ji seated on white stage
- `close-up.webp` - Close-up photo at microphone

#### Converting Images to WebP

**Option A: Using online tools**
- Visit https://cloudconvert.com/jpg-to-webp or similar
- Upload each image and convert to WebP format
- Download and rename as specified above

**Option B: Using command line (if you have ImageMagick installed)**
```bash
magick convert input-image.jpg -quality 85 output-image.webp
```

**Option C: Using Node.js sharp library**
```bash
npm install -g sharp-cli
sharp -i input-image.jpg -o output-image.webp -q 85
```

### 3. Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
├── public/
│   └── assets/          # Place your WebP images here
├── src/
│   ├── App.tsx          # Main React component
│   ├── index.css        # Tailwind CSS & custom styles
│   └── main.tsx         # React entry point
├── index.html           # HTML template
└── package.json         # Dependencies
```

## Features

- Responsive design for mobile, tablet, and desktop
- Countdown timer to event start
- 14-day schedule with day selector
- FAQ accordion
- Smooth scroll navigation
- Animated reveals on scroll
- Mobile-friendly hamburger menu
- Hindi (Devanagari) font support

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Image Sources Required

Based on the uploaded images, you need to convert these to WebP:

1. **Hero Banner**: The poster with Hindi text "उपनिषद् ज्ञानामृत" and event details
2. **Seated Stage**: Photo of speaker seated on ornate white stage
3. **Close-up**: Portrait photo at microphone with flower garlands

Place all converted images in `public/assets/` before running the site.
