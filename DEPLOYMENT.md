# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/juspay-assignment.git
   git push -u origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Configure (if needed)**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Deploy to Netlify

1. **Install Netlify CLI**

   ```bash
   npm i -g netlify-cli
   ```

2. **Build the project**

   ```bash
   npm run build
   ```

3. **Deploy**

   ```bash
   netlify deploy
   ```

4. **Deploy to Production**
   ```bash
   netlify deploy --prod
   ```

### Or use Netlify Drop

1. Build: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## Deploy to GitHub Pages

1. **Install gh-pages**

   ```bash
   npm i -D gh-pages
   ```

2. **Update vite.config.ts**

   ```typescript
   export default defineConfig({
     base: "/juspay-assignment/", // Your repo name
     // ... rest of config
   });
   ```

3. **Add deploy script to package.json**

   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy**

   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository settings
   - Pages section
   - Source: Deploy from branch `gh-pages`

## Environment Variables

If you need environment variables:

### Local Development

Create `.env.local`:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Juspay Dashboard
```

### Vercel

Add in Project Settings → Environment Variables

### Netlify

Add in Site Settings → Build & Deploy → Environment

## Post-Deployment Checklist

- [ ] Test all pages and features
- [ ] Verify dark/light theme switching
- [ ] Test responsive design on mobile
- [ ] Check console for errors
- [ ] Verify all images and assets load
- [ ] Test navigation and routing
- [ ] Check performance with Lighthouse
- [ ] Update README with demo link

## Custom Domain (Optional)

### Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS according to Vercel's instructions

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS records

## Monitoring & Analytics

### Add Vercel Analytics

```bash
npm i @vercel/analytics
```

```typescript
// In main.tsx
import { Analytics } from '@vercel/analytics/react'

<App />
<Analytics />
```

## Troubleshooting

### Build fails

- Check Node.js version (18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors: `npm run build`

### Routes don't work

- Ensure `vercel.json` has rewrites configuration
- For Netlify, add `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```

### Styles not loading

- Verify PostCSS config
- Check Tailwind CSS import in `index.css`
- Clear build cache and rebuild

## Performance Optimization

1. **Enable Gzip/Brotli** (automatic on Vercel/Netlify)
2. **Add caching headers** in `vercel.json`:

   ```json
   {
     "headers": [
       {
         "source": "/assets/(.*)",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "public, max-age=31536000, immutable"
           }
         ]
       }
     ]
   }
   ```

3. **Code splitting** - Already configured with Vite
4. **Image optimization** - Use Vercel Image or Cloudinary

---

Happy Deploying! 🚀
