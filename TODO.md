# Site Redesign TODO

## Steps
- [x] Analyze existing site and gather file structure
- [x] Update `index.html` (title + meta)
- [x] Update `src/index.css` (fonts, base styles, navy + gold theme)
- [x] Rewrite `src/NavBar.jsx` (responsive nav, Camp & Pride branding)
- [x] Rewrite `src/ImageCarousel.jsx` (auto-play, loop, dots, responsive)
- [x] Rewrite `src/CampPrideBookingBar.jsx` (consistent address, responsive)
- [x] Rebuild `src/Camp&Pride.jsx` (responsive sections, hero, amenities, policies)
- [x] Rewrite `src/Footer.jsx` (working icons, proper contrast, responsive)
- [x] Clean `src/App.css` (remove dead code)
- [x] Clean `src/App.jsx` (remove unused imports)
- [x] Run build and verify (build succeeded)
- [x] Fix CampLogo import path (use `?url` from public)
- [x] Install `@emailjs/browser`
- [x] Create `src/BookingForm.jsx` (sends to email via EmailJS)
- [x] Integrate BookingForm into the contact section
- [ ] Configure EmailJS credentials (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
