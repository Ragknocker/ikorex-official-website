# iKOREX — Official Website

Enterprise-grade intelligent process automation for modern businesses. Empowering teams, eliminating manual overhead, and optimizing output.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** for fast modern bundling and HMR
- **React Router DOM v6** for single-page application navigation
- **Context API** for persistent Theme (Light/Dark Mode) management
- **CSS Design System** with glassmorphism, responsive bento grids, and ElevenLabs aesthetic

## Project Structure

```
├── public/                 # Static assets (images, logos, favicon, robots, sitemap)
│   └── assets/
│       └── images/         # Media, diagrams, and videos
├── src/
│   ├── components/         # Reusable interactive components
│   │   ├── Navbar.tsx      # Responsive header with Melbourne live clock
│   │   ├── Footer.tsx      # Comprehensive footer
│   │   ├── Preloader.tsx   # Session-aware loading animation
│   │   ├── HeroPipeline.tsx# Interactive 4-step invoice processing flow
│   │   ├── WordRotator.tsx # Process title dynamic text rotator
│   │   ├── WorkflowShowcase.tsx # Interactive 5-node scenario runner
│   │   ├── DiagnosisSection.tsx # Process diagnostic assessment
│   │   ├── ComparisonSection.tsx# Manual vs Automated comparison
│   │   ├── RoiCalculator.tsx    # Live capacity and financial ROI modeler
│   │   ├── FaqSection.tsx       # Filterable FAQ accordions
│   │   ├── EngineCardVideo.tsx  # Video player with custom controls
│   │   ├── BackToTop.tsx   # Scroll to top floating button
│   │   └── ScrollProgress.tsx # Reading progress bar
│   ├── context/
│   │   └── ThemeContext.tsx # Dark/Light theme provider
│   ├── data/               # Structured data (workflows, faqs, blog, team, solutions)
│   ├── pages/              # Route pages (Home, Services, Solutions, About, Contact, Blog, Privacy)
│   │   └── articles/       # Full-length deep dive editorial articles
│   ├── App.tsx             # Route declarations and layout shell
│   ├── main.tsx            # Application entry point
│   └── style.css           # Global design system & theme tokens
├── legacy/                 # Preserved original HTML & static files archive
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v9+)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
