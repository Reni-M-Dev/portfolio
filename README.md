# Reni Mangukiya | Video Editor Portfolio

A clean, cinematic, fully static portfolio website for a video editor. Built with **HTML5, CSS3, Bootstrap 5 and vanilla JavaScript**. No framework, no build step, no backend. Free to host on GitHub Pages, Netlify or Vercel.

**Live site:** `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` (update after publishing)

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Run Locally](#run-locally)
5. [Customize Content](#customize-content)
6. [Replace Images and Videos](#replace-images-and-videos)
7. [Optimize Videos](#optimize-videos)
8. [Upload to GitHub](#upload-to-github)
9. [Publish with GitHub Pages](#publish-with-github-pages)
10. [Alternative Hosting: Netlify and Vercel](#alternative-hosting-netlify-and-vercel)
11. [Custom Domain](#custom-domain-optional)
12. [SEO Checklist](#seo-checklist)
13. [Troubleshooting](#troubleshooting)
14. [Pre-launch Checklist](#pre-launch-checklist)

---

## Features
- Sticky navbar that shrinks on scroll, with smooth hover underline and Bootstrap mobile hamburger menu
- Cinematic full-screen hero with primary and secondary call-to-action buttons
- Sections: Home, About, Skills, Work, Featured, Tools, Why Work With Me, Experience, Contact, Footer
- Portfolio grid with category filters (All, Reels, Shorts, YouTube, Social Media, Other)
- Video modal player (HTML5 video, stops and unloads on close)
- Featured project section with editing type and tools
- Frontend-only contact form (opens the visitor's email app)
- Subtle fade-up reveal animations, respects "reduced motion" setting
- Automatic light and dark theme based on device setting
- Mobile-first responsive layout, tested conceptually from 375px to 1920px
- Lazy-loaded images, video `preload="none"` with poster images
- SEO tags: title, meta description, Open Graph, semantic headings, alt text

## Tech Stack
| Layer | Tool |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties) + Bootstrap 5.3 via CDN |
| Logic | Vanilla JavaScript (no libraries besides Bootstrap's bundle) |
| Fonts | Google Fonts: Playfair Display, Inter |

Note: Bootstrap and fonts load from CDN, so visitors need internet access.

## Project Structure
```
video-editor-portfolio/
├── index.html          # All page content and sections
├── css/
│   └── style.css       # Theme colors, layout, animations
├── js/
│   └── script.js       # Navbar, reveal, filter, modal, form
├── assets/
│   ├── images/         # hero.jpg, profile-placeholder.jpg, project-01..04.jpg
│   ├── videos/         # project-01.mp4, project-02.mp4 (add 03, 04 yourself)
│   └── icons/          # favicon.svg
└── README.md
```

## Run Locally
**Option 1:** double-click `index.html`.

**Option 2 (recommended, behaves like real hosting):**
```bash
cd video-editor-portfolio
python3 -m http.server 8000
```
Open http://localhost:8000. VS Code users can use the **Live Server** extension instead.

## Customize Content
Open `index.html` and search for the word `REPLACE`. Each marker tells you what to change.

| Section | What to edit |
|---|---|
| About | Paragraph text and profile photo |
| Skills | Keep only skills you really offer (the `skills` block) |
| Work | Each project is one `.card-work` button, see below |
| Featured | Video source, poster, title, description, editing type, tools |
| Tools | Add more tool cards, copy the DaVinci Resolve block |
| Why Work With Me | Three short strengths, keep them honest |
| Experience | Roles, dates, education, one `<li>` per entry |
| Contact | Email, LinkedIn, Instagram links, also in the footer |
| Form email | `js/script.js`, replace `you@example.com` |

### Add or edit a portfolio project
```html
<div class="col-6 col-lg-3 item" data-cat="reels social">
  <button class="card-work"
          data-video="assets/videos/my-video.mp4"
          data-poster="assets/images/my-thumb.jpg"
          data-title="Project Title"
          data-desc="One-line description.">
    <img src="assets/images/my-thumb.jpg" alt="Describe the video" loading="lazy">
    <span class="play" aria-hidden="true"></span>
    <div class="meta"><small>Reels</small><h3>Project Title</h3><p>Short text.</p></div>
  </button>
</div>
```
`data-cat` accepts one or more of: `reels`, `shorts`, `youtube`, `social`, `other` (space separated).

### Change colors
Edit the variables at the top of `css/style.css`:
```css
:root { --bg:#f6f2ec; --ink:#14110f; --accent:#b8793a; }
```
The `prefers-color-scheme: dark` block right below controls dark mode.

### SEO text
Edit `<title>`, `meta description` and Open Graph tags in the `<head>` of `index.html`.

## Replace Images and Videos
1. Put your files in `assets/images/` and `assets/videos/`.
2. Keep the same names (`project-01.mp4`, `project-01.jpg`) to avoid editing HTML, or update the `data-video`, `data-poster` and `src` attributes.
3. Use a **thumbnail for every video** (portrait 9:16 for Reels/Shorts, around 720x1280).
4. Use JPG or WebP for images, under 300 KB each where possible. Hero under 500 KB.
5. File names: lowercase, no spaces (GitHub Pages is case-sensitive: `Project-01.MP4` is not `project-01.mp4`).

## Optimize Videos
GitHub **blocks files over 100 MB** and warns above 50 MB. Compress before upload with [FFmpeg](https://ffmpeg.org):
```bash
ffmpeg -i input.mp4 -vf scale=-2:1280 -c:v libx264 -crf 26 -preset slow \
       -c:a aac -b:a 96k -movflags +faststart output.mp4
```
- `-crf 26` balances quality and size (lower = better quality, bigger file)
- `-movflags +faststart` lets the video start playing before it fully downloads
- Extract a thumbnail: `ffmpeg -ss 1 -i output.mp4 -frames:v 1 thumb.jpg`

**Best practice for many or long videos:** upload to YouTube (unlisted) or Vimeo and replace the `<video>` with an embed `<iframe>`. This keeps the repo small and loading fast.

## Upload to GitHub
### Method A: Browser only (easiest)
1. Sign in at https://github.com and click **New repository**.
2. Name it (for example `video-editor-portfolio`), set **Public**, click **Create repository**.
3. Click **uploading an existing file**.
4. Drag in the **contents** of the project folder (`index.html`, `css`, `js`, `assets`, `README.md`). `index.html` must be at the repo root.
5. Write a commit message such as `Initial portfolio upload` and click **Commit changes**.

### Method B: Git command line
Install Git from https://git-scm.com, then:
```bash
cd video-editor-portfolio
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```
To update later:
```bash
git add .
git commit -m "Update projects"
git push
```
If a file is larger than 100 MB, compress it (see above) or use [Git LFS](https://git-lfs.com).

## Publish with GitHub Pages
1. Open your repository, go to **Settings**.
2. Click **Pages** in the left sidebar.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/ (root)**, click **Save**.
5. Wait 1 to 3 minutes and refresh. Your link appears at the top:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
6. Tip: name the repo `YOUR-USERNAME.github.io` to get the shorter link `https://YOUR-USERNAME.github.io/`.

Every `git push` or file commit redeploys automatically.

## Alternative Hosting: Netlify and Vercel
**Netlify:** sign in at https://app.netlify.com, choose **Add new site > Deploy manually**, and drag the project folder in. Or choose **Import from Git** and select your repo (leave build command empty, publish directory `.`).

**Vercel:** sign in at https://vercel.com, click **Add New > Project**, import the GitHub repo, set **Framework Preset: Other**, leave build settings empty, click **Deploy**.

Both give a free link and redeploy on every push.

## Custom Domain (optional)
1. Buy a domain (for example `renimangukiya.com`).
2. GitHub: **Settings > Pages > Custom domain**, enter the domain, save.
3. At your domain registrar add DNS records: `A` records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` pointing to `YOUR-USERNAME.github.io`.
4. Tick **Enforce HTTPS** after DNS finishes (can take up to 24 hours).

## SEO Checklist
- [ ] Replace the `og:image` path with the **full URL** of your hero image, for example `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/assets/images/hero.jpg`
- [ ] Add `<meta property="og:url" content="YOUR LIVE URL">` and `<link rel="canonical" href="YOUR LIVE URL">`
- [ ] Write a unique meta description (about 150 characters)
- [ ] Every image has meaningful `alt` text
- [ ] Add your site to [Google Search Console](https://search.google.com/search-console)
- [ ] Test the share preview with the LinkedIn Post Inspector

## Troubleshooting
| Problem | Fix |
|---|---|
| 404 after publishing | `index.html` must be in the repo root, not inside a subfolder. Check Pages source is `main` and `/ (root)`. |
| Images or videos not loading | Check exact file names and letter case. Use relative paths like `assets/images/x.jpg`, no leading `/`. |
| Video will not play | Use MP4 with H.264 video and AAC audio. Re-encode with the FFmpeg command above. |
| Upload rejected | File is over 100 MB. Compress it or embed from YouTube. |
| Old version still showing | Hard refresh with `Ctrl + Shift + R`, or wait a couple of minutes. |
| Styles look broken | Likely offline (Bootstrap CDN). Connect to the internet. |
| Contact form does nothing | It opens the email app. Make sure an email address is set in `js/script.js`. For real form submission use Formspree or Netlify Forms. |

## Pre-launch Checklist
- [ ] All `REPLACE` markers handled
- [ ] Real name, About text, experience and contact links added
- [ ] Placeholder projects (03 and 04) replaced or removed
- [ ] Every video has a poster image and plays in the modal
- [ ] Filters show the right projects
- [ ] Navbar links scroll to the right sections, mobile menu opens and closes
- [ ] Checked on phone, tablet and desktop
- [ ] Browser console has no errors (press F12)
- [ ] SEO checklist done, live link added at the top of this README

## Credits
Design and content: Reni Mangukiya. Built with [Bootstrap](https://getbootstrap.com) and [Google Fonts](https://fonts.google.com).

© Reni Mangukiya. All rights reserved. Portfolio videos and images belong to their respective owners.
