# Website Updates Log

## Latest Update: November 25, 2026

### ✅ Added Three New Sections

#### 1. **The 14-Day Journey Section** (`#schedule`)
- **Location:** Added after the original schedule section, before Venue
- **Features:**
  - Interactive 14-day button picker (Day 1 to Day 14)
  - Phase-based highlighting system (4 phases)
  - Detail panel that shows phase information
  - Phase 1: "The Foundation" (Days 1-3, 27-29 Nov)
  - Phase 2: "Dismantling Pride" (Days 4-8, 30 Nov-4 Dec)
  - Phase 3: "The Guru and Surrender" (Days 9-10, 5-6 Dec)
  - Phase 4: "The Crown" (Days 11-14, 7-10 Dec)
  - Reserve button for each phase
  - Always-rendered detail panel (never conditional)

#### 2. **Map Section** (`#map`)
- **Location:** Added after Venue section
- **Features:**
  - Haryana state map showing Rohtak district
  - Image: `/assets/haryana_rohtak_map.webp`
  - Location details: The Seven Knots Hall, Near Old ITI Ground, Circular Road, Rohtak
  - Distance info: ~70 km northwest of Delhi

#### 3. **How to Get There Section** (`#how-to-reach`)
- **Location:** Added after Map section, before FAQ
- **Features:**
  - Three transportation options in equal cards:
    1. **By Bus** - Haryana Roadways + DTC from ISBT Kashmere Gate / Sarai Kale Khan
    2. **By Flight** - Via Indira Gandhi International Airport (DEL), Delhi
    3. **By Train** - Rohtak Junction (ROK) from New Delhi / Old Delhi
  - Contact phone numbers: 8280342377 / 7077731257

---

### 🔧 Other Changes

#### Venue Name Correction
- **Changed:** "The Seven Notes Hall" → "The Seven Knots Hall"
- **Applied to:** All instances throughout the website (100% consistent)

#### Navigation Menu Updates
- Added "14-Day Journey" link to menu
- Updated menu structure to include all new sections

#### Image Assets
- **Added:** `haryana_rohtak_map.webp` to `/public/assets/`
- **Total images now:** 4 WebP files
  - hero-banner.webp
  - seated-stage.webp
  - close-up.webp
  - haryana_rohtak_map.webp

---

### 📋 Section Order (Final)

1. Hero / Invitation
2. Watch Video
3. Why Upanishads
4. Core Message
5. What You Will Learn
6. Speaker
7. Shyam (Blue countdown section)
8. Schedule (Original 14-day detail)
9. **NEW: The 14-Day Journey** (Phase-based picker)
10. Venue
11. **NEW: Map Section** (Haryana map)
12. **NEW: How to Get There** (3 transportation cards)
13. FAQ
14. Register

---

### 🎨 Design Consistency

All new sections follow the existing design system:
- Colors: `#FFF8EC` (cream), `#4A2310` (brown), `#E8761A` (saffron), `#E8C9A0` (borders)
- Typography: Same font-serif and body text styles
- Cards: Consistent rounded-2xl, border styling
- Responsive: Mobile-first grid layouts (md:grid-cols-3, etc.)
- Animations: `.reveal` class for scroll animations

---

### ✅ Testing Checklist

- [x] All images loading correctly
- [x] Phase-based day picker working
- [x] Detail panel updating on day selection
- [x] All links functional (phone numbers, Google Form)
- [x] Map image displaying
- [x] Transportation cards responsive
- [x] Navigation menu updated
- [x] Mobile responsive (all screen sizes)
- [x] Hot module replacement working
- [x] No console errors

---

### 🚀 Ready for Production

All changes are complete and tested. The website is ready to build and deploy:

```bash
npm run build
```

Then deploy the `dist/` folder to your hosting service.

---

*Last updated: November 25, 2026 at 12:40 PM IST*
