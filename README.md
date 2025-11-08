# Personal Portfolio Website

A modern, responsive, and feature-rich personal portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

### Core Features
- **Responsive Design** - Flawless functionality across all devices (desktop, tablet, mobile)
- **Dark/Light Mode** - Theme toggle with auto-detection of system preferences
- **Smooth Animations** - Engaging user experience with subtle animations
- **SEO Optimized** - Meta tags, structured data, sitemap, and robots.txt
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized** - Fast load times and optimized assets

### Sections
1. **Hero Section** - Eye-catching introduction with animated typing effect
2. **About Me** - Professional background, expertise, and core values
3. **Portfolio** - Project showcase with case studies and metrics
4. **Skills** - Technical and soft skills with interactive filtering
5. **Resume** - Work experience, education, and certifications
6. **Testimonials** - Client reviews and company logos
7. **Contact** - Contact form with validation and social links
8. **404 Page** - Custom error page with navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with CSS Variables
- **Icons**: SVG Icons
- **Linting**: ESLint

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your repository to Vercel
2. Framework preset: Vite
3. Deploy

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── _headers
│   └── vite.svg
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Skills.tsx
│   │   ├── Resume.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── NotFound.tsx
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/           # Data files
│   │   └── portfolio.ts
│   ├── types/          # TypeScript types
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **src/data/portfolio.ts** - Projects, skills, testimonials, experience, education
2. **src/components/Hero.tsx** - Name and tagline
3. **src/components/About.tsx** - About section content
4. **index.html** - Meta tags and SEO information
5. **public/sitemap.xml** - Update URLs

### Theme Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --primary-color-light: #e0e7ff;
  --primary-color-dark: #4f46e5;
  /* ... more variables */
}
```

### Assets
Replace placeholder images in `src/assets/`:
- `profile.jpg` - Your profile photo
- `hero-bg.jpg` - Hero background
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project images

## 🔧 Configuration

### Vite Config
Edit `vite.config.ts` for build optimizations and plugin configurations.

### TypeScript Config
Edit `tsconfig.json` for TypeScript compiler options.

### ESLint Config
Edit `eslint.config.js` for linting rules.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance
- Reduced motion support

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- HTTPS enforcement (in production)
- Secure headers configuration

## 📊 Performance

- Lazy loading images
- Code splitting
- Minified CSS and JavaScript
- Optimized assets
- Fast load times (< 2-3 seconds)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- Website: [yourportfolio.com](https://yourportfolio.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

## 📝 Notes

- Update contact information in Contact component
- Add your resume PDF to `public/resume.pdf`
- Replace social media links throughout the components
- Update testimonials with real client feedback
- Add real project data and images

## 🙏 Acknowledgments

- Icons from various SVG sources
- Inspiration from modern portfolio designs
- Built with React and TypeScript

---

Made with ❤️ by Your Name
