# Server Auth Portal

A modern authentication portal for you and your server members, built with React, Material-UI, and Framer Motion. Includes animated login/signup and an instructions page. Demo authentication uses localStorage (no backend).

## Features
- Beautiful Material-UI design
- Animated transitions (Framer Motion)
- Login/Signup (demo, localStorage)
- Instructions page for users
- Ready for GitHub Pages deployment

## Running Locally
```bash
npm install
npm run dev
```

## Deploying to GitHub Pages
1. Set the `homepage` field in `package.json` to your repo URL, e.g.:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```
2. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

---
For real authentication, connect to a backend server.
