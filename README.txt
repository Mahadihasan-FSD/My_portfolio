Mahadi Hasan portfolio (CLEAN version: no torch cursor, no dusk colour shift, one accent colour, calmer background) - static site (no build step)

FILES
 index.html, css/style.css, js/main.js, assets/*.webp, assets/og.jpg, favicon.svg

DEPLOY (upload the CONTENTS of this folder)
 - Netlify / Vercel / Cloudflare Pages: drag and drop the folder
 - GitHub Pages: push to a repo, enable Pages
 - cPanel / shared hosting: upload everything into public_html

SETTINGS (top of js/main.js, object CFG)
 - formEndpoint: contact form. Create a free form at formspree.io and paste its URL,
   or write "netlify" if you host on Netlify. Left empty, the form opens the visitor's email app.
 - bookingUrl: your Calendly (or similar) link for "Book a meeting".
 - shots: two tall full-page screenshots of your live sites, e.g. ["assets/eleven.jpg","assets/aevy.jpg"]. They scroll inside the card on hover.
 - portrait: your photo with a TRANSPARENT background (remove.bg or Photoshop), saved as assets/portrait.png, then "assets/portrait.png".
 - whatsapp: your number with country code (e.g. "8801XXXXXXXXX"). Powers the green floating button.
 - analytics: Plausible domain (optional). available: false hides the "Open for new projects" badge.
 - resumeUrl: e.g. "assets/resume.pdf" (put the PDF in assets/). Empty = Resume button stays hidden.

CONTENT YOU SHOULD EDIT
 - Social links (LinkedIn, GitHub, X, Instagram): index.html, near the bottom, replace each href="#".
 - Case studies: js/main.js, the CASES list (English + Bangla). Add your real problem, process and results.
 - Services, tools, reviews, FAQ: js/main.js, the X object near the bottom (English + Bangla pairs).
   The two reviews are SAMPLES (tagged "Sample"). Replace them with real ones and set sample:false (or delete the tag).
   FAQ answers (timeline, payment, revisions) are generic: change them to your real terms.
 - Brief wizard options (needs, timelines, budget ranges in taka): js/main.js, the WZ object. The ranges are placeholders, set your own.
 - Notes (blog posts): js/main.js, the NT object. The 3 posts are SAMPLES (tagged "Sample"). Replace with real posts and delete the sample tag in renderNotes.
 - The intro animation plays once per browser session. Close the tab and open the site again to see it.
 - All Bangla text: js/main.js, the BN list.

SOCIAL SHARE PREVIEW
 After you have your domain, in index.html change
   <meta property="og:image" content="assets/og.jpg">
 to the full address, e.g. https://yourdomain.com/assets/og.jpg

CUSTOM DOMAIN
 Buy a domain, then in your host's dashboard (Netlify/Vercel/Cloudflare) choose "Add custom domain"
 and follow the DNS steps shown there.
