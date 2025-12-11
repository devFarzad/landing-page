# Files Structure Documentation

## Root Directory

### Configuration Files
- `package.json` - Project dependencies, scripts, and metadata
- `tsconfig.json` - TypeScript compiler configuration
- `next.config.js` - Next.js framework configuration
- `tailwind.config.js` - Tailwind CSS configuration with custom brown/green colors
- `postcss.config.js` - PostCSS configuration for Tailwind
- `.gitignore` - Git ignore patterns

## App Directory (`app/`)

### Core Files
- `layout.tsx` - Root layout component with metadata and Inter font
- `page.tsx` - Main landing page that composes Hero, About, and Contact sections
- `globals.css` - Global styles with Tailwind directives and base styles

## Components Directory (`components/`)

### React Components
- `Hero.tsx` - Hero section component
  - Displays company logo
  - Shows "ASCO Village" title and tagline
  - Fade-in animation on page load
  - Uses Framer Motion for animations

- `About.tsx` - About section component
  - Displays company bio/description
  - Scroll-triggered fade-in animation
  - Clean, centered layout

- `Contact.tsx` - Contact information component
  - Displays phone, email, and address
  - Clickable phone and email links
  - Icons from React Icons
  - Hover effects on interactive elements
  - Scroll-triggered animations

## Public Directory (`public/`)

### Assets
- `logos/` - Company logo images
  - `logo-brown.jpg` - Brown version of logo
  - `logo-green.jpg` - Green version of logo
  - `logo-white.jpg` - White version of logo
  - `logo brown-green.jpg` - Brown-green version of logo

## Documentation Directory (`docs/`)

### Documentation Files
- `context.md` - Project context, company information, and technical overview
- `changes.log` - Chronological log of all project changes
- `files_structure.md` - This file, documenting the project structure

