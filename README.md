# Arun C - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing the professional journey and projects of Arun C, a software developer from Tamil Nadu, India.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with modern best practices
- **SEO Friendly**: Optimized meta tags and semantic HTML

## 🛠️ Built With

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Hook Form** - Performant forms with easy validation
- **React Icons** - Beautiful icon library

## 📱 Sections

1. **Hero** - Professional introduction with call-to-action
2. **About** - Professional summary and education details
3. **Skills** - Technical expertise organized by categories
4. **Experience** - Professional work history with details
5. **Projects** - Featured projects with technologies used
6. **Certifications** - Professional certifications and achievements
7. **Contact** - Contact form and professional information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Arun0218cse/portfolio
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Navigation header with theme toggle
│   ├── Hero.tsx        # Hero section with introduction
│   ├── About.tsx       # About section with education
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Professional experience
│   ├── Projects.tsx    # Featured projects
│   ├── Certifications.tsx # Certifications and achievements
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Footer with links
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark/light mode context
├── utils/              # Utility functions
│   └── animations.ts   # Framer Motion animation variants
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Color System**: Professional blue/indigo palette with proper contrast
- **Typography**: Inter font family with proper hierarchy
- **Spacing**: Consistent 8px spacing system
- **Animations**: Smooth scroll-triggered animations and hover effects
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Mobile-First**: Responsive design approach

## 🔧 Customization

### Theme Colors
Edit the color palette in `tailwind.config.js`:

```js
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Animation Settings
Modify animations in `src/utils/animations.ts`:

```ts
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};
```

### Content Updates
Update personal information in the respective component files:
- `Hero.tsx` - Name and tagline
- `About.tsx` - Professional summary and education
- `Experience.tsx` - Work experience details
- `Projects.tsx` - Project information
- `Contact.tsx` - Contact information

## 📧 Contact Form Integration

The contact form currently logs submissions to console. To integrate with email services:

1. **EmailJS Integration**: Add EmailJS for client-side email sending
2. **Netlify Forms**: Use Netlify's form handling for static deployment
3. **Custom Backend**: Implement a backend API for form processing

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with automatic CI/CD

### Manual Deployment
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your hosting provider

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Arun0218cse/portfolio/issues).

## 📞 Contact

**Arun C**
- Email: tech18arun@gmail.com
- Phone: +91-8608630388
- LinkedIn: [linkedin.com/in/arun-c-209547343](https://linkedin.com/in/arun-c-209547343)
- GitHub: [github.com/Arun0218cse](https://github.com/Arun0218cse)

---

*Built with ❤️ using React and modern web technologies*