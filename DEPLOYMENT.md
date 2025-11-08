# Deployment Guide

This guide covers deployment options for your portfolio website.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

- [ ] Update personal information in all components
- [ ] Replace placeholder images with your actual images
- [ ] Update social media links
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update SEO meta tags in `index.html`
- [ ] Update sitemap.xml with your actual domain
- [ ] Test responsive design on multiple devices
- [ ] Test dark/light mode functionality
- [ ] Validate all forms
- [ ] Test all navigation links
- [ ] Run production build locally: `npm run build && npm run preview`

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

**Advantages**: Easy deployment, automatic HTTPS, CDN, form handling, continuous deployment

**Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Custom Domain:**
1. Go to Site settings > Domain management
2. Add custom domain
3. Update DNS records as instructed

**Environment Variables (if needed):**
1. Site settings > Build & deploy > Environment
2. Add variables as needed

### Option 2: Vercel

**Advantages**: Zero-config deployment, automatic HTTPS, edge network, serverless functions

**Steps:**
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite framework
6. Click "Deploy"

**Custom Domain:**
1. Project settings > Domains
2. Add your domain
3. Update DNS records

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. Add to vite.config.ts:
   ```typescript
   base: '/repository-name/'
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repository settings

### Option 4: AWS S3 + CloudFront

**Advantages**: Full control, scalable, integrate with other AWS services

**Steps:**
1. Build your app: `npm run build`
2. Create S3 bucket for static website hosting
3. Upload `dist` folder contents
4. Set bucket policy for public read access
5. Enable static website hosting
6. Create CloudFront distribution
7. Point your domain to CloudFront

### Option 5: DigitalOcean App Platform

**Steps:**
1. Push code to GitHub
2. Go to [DigitalOcean](https://digitalocean.com) App Platform
3. Create new app
4. Connect repository
5. Configure:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Deploy

## 🔧 Build Optimization

### Vite Configuration

Update `vite.config.ts` for production:

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
```

### Environment Variables

Create `.env.production`:

```
VITE_API_URL=https://api.yoursite.com
VITE_GA_ID=UA-XXXXXXXXX-X
```

## 📊 Analytics Setup

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacy-friendly alternative)

Add to `index.html`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🔒 Security Headers

Ensure these headers are set (already configured in `public/_headers`):

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

## 📱 PWA Setup (Optional)

To make your portfolio a Progressive Web App:

1. Install workbox:
   ```bash
   npm install workbox-webpack-plugin -D
   ```

2. Add manifest.json to public folder
3. Configure service worker
4. Add manifest link to index.html

## 🧪 Testing Before Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:4173 --view
```

## 📈 Performance Monitoring

### Tools to monitor:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse CI

### Performance Targets:
- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

## 🐛 Troubleshooting

### Common Issues:

**Build fails:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node version compatibility
- Review error logs

**Assets not loading:**
- Check base URL in vite.config.ts
- Verify asset paths
- Check CORS settings

**404 on page refresh:**
- Configure server to redirect all routes to index.html
- Add _redirects file for Netlify: `/* /index.html 200`

## 📞 Support

If you encounter issues:
1. Check the documentation
2. Search GitHub issues
3. Ask in community forums
4. Contact hosting support

---

Good luck with your deployment! 🚀

