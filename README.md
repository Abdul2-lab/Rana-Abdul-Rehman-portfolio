# Rana Abdul Rehman — Portfolio (React + Vite + Tailwind CSS)

## Run karne ke liye (Setup)

```bash
npm install
npm run dev
```

`npm run dev` chalate hi browser khud-ba-khud khul jayega (`vite.config.js` mein `server.open: true` set hai). Agar aapka system default browser Chrome nahi hai aur aap chahte hain ke hamesha Chrome hi khule, to terminal mein command chalane se pehle ek environment variable set kar dein:

**Windows (PowerShell):**
```powershell
$env:BROWSER="chrome"; npm run dev
```

**Mac / Linux:**
```bash
BROWSER="google chrome" npm run dev
```

Ya phir sabse simple tarika: apne computer ki settings mein Chrome ko default browser bana dein — us soorat mein `npm run dev` khud hi Chrome mein khulega, kyunke ye OS ka default browser use karta hai.

Browser mein `http://localhost:5173` khol lein.

Production build banane ke liye:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  data/portfolioData.js   -> Saara content yahan hai (naam, about, skills, projects, experience, certifications). Apni details yahan change kar dein.
  components/              -> Har section ka alag component (Navbar, Hero, About, Skills, Projects, Experience, Certifications, Contact, Footer)
  components/icons/        -> GitHub/LinkedIn/X ke SVG icons
  context/ThemeContext.jsx -> Dark/Light mode toggle (localStorage mein save hota hai)
```

## Contact form ko activate karna (Formspree)

Abhi form Formspree se connect karne ke liye ready hai, bas apna form ID lagana hai:

1. [formspree.io](https://formspree.io) par free account banayein aur apni email verify karein.
2. "New Form" banayein — aapko ek endpoint milega jo aisa dikhega: `https://formspree.io/f/xxxxxxxx`
3. `src/data/portfolioData.js` file kholein, sabse upar ye line dhoondein:
   ```js
   export const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
   ```
4. `YOUR_FORM_ID` ki jagah apna asal form ID paste kar dein.
5. Save karein — ab jab koi bhi "Send Message" click karega, message seedha aapki email par pahunch jayega (koi email app khulne ki zaroorat nahi).

Jab tak ye set nahi kiya jata, form automatically visitor ka email app khol kar mailto se kaam chalata rahega (pehle wala tarika), taake form tab bhi na tooté.

## Cheezein change karne ka tarika

- **Content (naam, about text, skills list, projects, experience, certifications, email, links)**: `src/data/portfolioData.js` file kholein — sab kuch ek jagah hai.
- **Apni tasveer / project screenshots**: `portfolioData.js` mein `photo`, `image` fields ko apni image URL ya `/src/assets/...` path se replace kar dein.
- **Rang (blue accent)**: `tailwind.config.js` mein `primary` color change karein.
- **CV Download button**: `src/components/Hero.jsx` mein "Download CV" link ko apni PDF file ke path se link kar dein.
- **Contact form**: Abhi form sirf UI demo hai (koi backend/email service se connect nahi). Real email bhejne ke liye Formspree, EmailJS, ya apna backend add kar sakte hain.

## GitHub par upload karna

1. [github.com](https://github.com) par login karke "New repository" banayein (naam jo chahe rakhein, jaise `portfolio`).
2. Apne project folder mein terminal kholein aur ye commands chalayein:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<aapka-username>/<repo-naam>.git
   git push -u origin main
   ```
3. GitHub par refresh karein — saari files dikh jayengi.

## Vercel par deploy karna (free)

1. [vercel.com](https://vercel.com) par jayein aur apne GitHub account se sign up/login karein.
2. "Add New Project" click karein, apni GitHub repo select karein (usi wali jo abhi banayi).
3. Vercel khud detect kar lega ke ye Vite project hai — settings default hi rehne dein, "Deploy" click karein.
4. 1-2 minute mein site live ho jayegi, ek free `.vercel.app` link milega (jaise `portfolio-xyz.vercel.app`).
5. Aage se jab bhi aap GitHub par naya code push karenge, Vercel khud-ba-khud redeploy kar dega — dobara kuch nahi karna padega.

## Features

- Fully responsive (mobile / tablet / desktop) with a hamburger menu on mobile
- Dark / Light mode toggle with localStorage persistence (theme stays after refresh)
- Smooth scroll navigation from the navbar to every section
- Active section indicator — the navbar highlights whichever section is currently in view
- Scroll-to-top button — appears after scrolling down, smoothly scrolls back up
- Scroll-reveal animations — sections fade/slide in **every time** you scroll past them, both scrolling down and scrolling back up, with different directions (up, left, right, scale) per section for a richer feel
- Hover animations on project cards, skill tiles, certification cards, and buttons
- Subtle hero entrance animation and floating gradient blobs
- Working links: GitHub, LinkedIn, email (mailto), phone (tel), CV download, and project Live Demo links
- Contact form sends real emails via **Formspree** (free tier: 50 submissions/month, no backend needed). See "Contact form ko activate karna" below to finish setup — until then it falls back to opening the visitor's email app.
- `public/Rana-Abdul-Rehman-CV.pdf` is your real uploaded CV — swap this file (same name) whenever you update your resume
- Experience cards and certification badges now show images/logos, same as the project cards
- SEO / Open Graph meta tags — link previews on WhatsApp, LinkedIn etc. show a proper title, description and image
- Custom favicon (blue "R" logo)
- Images use `loading="lazy"` (except the hero photo, which loads immediately) for faster page loads
- "View CV" link next to "Download CV" — opens the PDF in a new tab without forcing a download
