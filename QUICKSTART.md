# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ Quick Setup

### 1. Update Personal Information (5 minutes)

**Priority Files to Edit:**

1. **`src/components/Hero.tsx`** (Line 45)
   ```typescript
   Hi, I'm <span className="highlight">Your Name</span>
   ```

2. **`src/data/portfolio.ts`** 
   - Update projects, skills, experience, education, testimonials

3. **`src/components/Contact.tsx`** (Lines 75-95)
   - Email, phone, location

4. **`index.html`** (Lines 6-8)
   - Title, description, meta tags

### 2. Add Your Images (2 minutes)

Replace these files in `src/assets/`:
- `profile.jpg` - Your photo
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots

### 3. Update Social Links (1 minute)

Search and replace in all files:
- `https://github.com` → Your GitHub URL
- `https://linkedin.com` → Your LinkedIn URL
- `https://twitter.com` → Your Twitter URL

### 4. Test Locally (1 minute)

```bash
npm run dev
```

Visit: `http://localhost:5173`

## 🎨 Quick Theme Change

Edit `src/index.css` (Line 18):

```css
--primary-color: #YOUR_COLOR;
```

Popular colors:
- Purple: `#8b5cf6`
- Green: `#10b981`
- Blue: `#6366f1` (default)
- Red: `#ef4444`

## 📝 Checklist

Before going live:

- [ ] Updated name in Hero section
- [ ] Added your projects to portfolio.ts
- [ ] Updated skills and experience
- [ ] Changed contact information
- [ ] Replaced all images
- [ ] Updated social media links
- [ ] Added resume PDF to public/resume.pdf
- [ ] Updated meta tags in index.html
- [ ] Changed colors/theme (optional)
- [ ] Tested on mobile device

## 🚀 Deploy in 2 Minutes

### Netlify (Easiest)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select repository
5. Click "Deploy"

Done! Your site is live.

### Vercel (Also Easy)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select repository
5. Click "Deploy"

## 🎯 Next Steps

After deployment:
1. Add custom domain
2. Setup analytics
3. Test SEO with Google Search Console
4. Share on social media
5. Add to LinkedIn

## 📚 Full Documentation

- **README.md** - Complete documentation
- **CUSTOMIZATION.md** - Detailed customization guide
- **DEPLOYMENT.md** - Deployment options

## 🆘 Common Issues

**Port already in use:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Build errors:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Images not showing:**
- Check file paths in components
- Ensure images are in src/assets/

## 💡 Pro Tips

1. Use WebP format for images (better compression)
2. Keep images under 200KB
3. Test on real mobile devices
4. Get feedback before launching
5. Update portfolio regularly

## 🎉 You're Ready!

Your portfolio is ready to impress. Good luck! 🚀

---

Questions? Check the full README.md or open an issue on GitHub.

