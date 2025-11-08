# Customization Guide

This guide will help you customize the portfolio website to match your personal brand and information.

## 🎨 Theme & Colors

### Changing Primary Color

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #6366f1;        /* Main brand color */
  --primary-color-light: #e0e7ff;  /* Light variant */
  --primary-color-dark: #4f46e5;   /* Dark variant */
}
```

Popular color combinations:
- **Blue**: `#6366f1` (Default)
- **Purple**: `#8b5cf6`
- **Green**: `#10b981`
- **Red**: `#ef4444`
- **Orange**: `#f59e0b`
- **Teal**: `#14b8a6`

### Custom Fonts

Add Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Update CSS:

```css
:root {
  --font-family: 'Poppins', sans-serif;
}
```

## 📝 Personal Information

### 1. Hero Section

Edit `src/components/Hero.tsx`:

```typescript
// Update name
<h1 className="hero-title">
  Hi, I'm <span className="highlight">John Doe</span>
</h1>

// Update tagline
const fullText = 'Full Stack Developer';

// Update description
<p className="hero-description">
  Your unique value proposition here...
</p>
```

### 2. About Section

Edit `src/components/About.tsx`:

```typescript
// Update statistics
<div className="stat-item">
  <h3>50+</h3>
  <p>Projects Completed</p>
</div>

// Update bio paragraphs
<p>Your professional story...</p>

// Update core values
<div className="value-item">
  <span className="value-icon">🎯</span>
  <div>
    <h5>Your Value</h5>
    <p>Description</p>
  </div>
</div>
```

### 3. Portfolio Data

Edit `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: '/src/assets/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/you/project',
    metrics: [
      { label: 'Users', value: '10K+' },
      { label: 'Performance', value: '95/100' }
    ]
  },
  // Add more projects...
];
```

### 4. Skills

Edit `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  // Add your skills...
];
```

### 5. Work Experience

Edit `src/data/portfolio.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ]
  },
  // Add more experiences...
];
```

### 6. Education

Edit `src/data/portfolio.ts`:

```typescript
export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2014 - 2018',
    description: 'Focus areas...'
  },
  // Add more education...
];
```

### 7. Testimonials

Edit `src/data/portfolio.ts`:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Client Name',
    role: 'CEO',
    company: 'Company Name',
    rating: 5,
    text: 'Testimonial text...'
  },
  // Add more testimonials...
];
```

### 8. Contact Information

Edit `src/components/Contact.tsx`:

```typescript
// Update email
<a href="mailto:your.email@example.com">your.email@example.com</a>

// Update phone
<a href="tel:+1234567890">+1 (234) 567-890</a>

// Update location
<p>Your City, Country</p>
```

### 9. Footer Information

Edit `src/components/Footer.tsx`:

```typescript
// Update about text
<p>
  Your short bio for footer...
</p>

// Update services
<ul>
  <li>Your Service 1</li>
  <li>Your Service 2</li>
</ul>
```

## 🔗 Social Media Links

Update social links in multiple components:

### Hero Section (`Hero.tsx`)
```typescript
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://twitter.com/yourhandle" target="_blank">
```

### Footer (`Footer.tsx`)
Same pattern as above.

## 🖼️ Images

### Profile Images
Replace these images in `src/assets/`:
- `profile.jpg` - Your professional photo (500x500px recommended)
- `hero-bg.jpg` - Hero section background (1920x1080px)

### Project Images
- `project1.jpg`, `project2.jpg`, `project3.jpg`
- Recommended size: 1200x800px
- Format: JPG or WebP for better compression

### Optimizing Images

```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize images
sharp -i input.jpg -o output.jpg -q 80
```

## 📄 Resume PDF

Add your resume to `public/resume.pdf`

The download link is in `src/components/Resume.tsx`:

```typescript
<a href="/resume.pdf" download className="btn btn-primary">
  Download Resume
</a>
```

## 🔍 SEO Customization

Edit `index.html`:

```html
<!-- Update title -->
<title>Your Name - Your Title | Your Tagline</title>

<!-- Update description -->
<meta name="description" content="Your unique description..." />

<!-- Update keywords -->
<meta name="keywords" content="Your, Keywords, Here" />

<!-- Update Open Graph -->
<meta property="og:title" content="Your Name" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />

<!-- Update structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yoursite.com",
  "jobTitle": "Your Job Title",
  // ... update other fields
}
</script>
```

## 🌐 Domain Configuration

Update domain in:
1. `index.html` - All meta tags
2. `public/sitemap.xml` - All URLs
3. `public/robots.txt` - Sitemap URL
4. `DEPLOYMENT.md` - Documentation

## ✨ Animations

### Adjusting Animation Speed

Edit component CSS files:

```css
/* Slow down animation */
.hero-text {
  animation: fadeInUp 1.5s ease-out; /* Default is 1s */
}

/* Disable animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Adding New Animations

```css
@keyframes yourAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.your-element {
  animation: yourAnimation 0.6s ease-out;
}
```

## 📱 Responsive Breakpoints

Adjust breakpoints in CSS:

```css
/* Mobile */
@media (max-width: 568px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 968px) { }

/* Large Desktop */
@media (max-width: 1200px) { }
```

## 🎯 Adding New Sections

1. Create component in `src/components/YourSection.tsx`
2. Create styles in `src/components/YourSection.css`
3. Import and add to `src/App.tsx`:

```typescript
import YourSection from './components/YourSection';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <YourSection /> {/* Add here */}
          {/* ... other sections */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
```

4. Add navigation link in `Header.tsx`:

```typescript
<li><button onClick={() => scrollToSection('your-section')}>Your Section</button></li>
```

## 🔧 Advanced Customization

### Custom Components

Create reusable components in `src/components/`:

```typescript
// Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

### Custom Hooks

Create hooks in `src/hooks/`:

```typescript
// useScrollspy.ts
export const useScrollspy = () => {
  // Your hook logic
};
```

## 📦 Additional Features

### Adding a Blog

1. Create blog posts in `src/data/blog.ts`
2. Create Blog component
3. Add routing (react-router-dom)

### Contact Form Backend

Options:
- **Formspree**: Easy form handling
- **Netlify Forms**: Built-in with Netlify
- **Custom API**: Your own backend

### Analytics

Add Google Analytics or Plausible in `index.html`

## 🎨 Design Tips

1. **Consistency**: Use consistent spacing, colors, and typography
2. **Contrast**: Ensure good contrast for accessibility
3. **Hierarchy**: Clear visual hierarchy guides users
4. **White Space**: Don't overcrowd - let content breathe
5. **Mobile First**: Design for mobile, then scale up

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Tricks](https://css-tricks.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web.dev](https://web.dev)

---

Need help? Check the main README.md or create an issue on GitHub!

