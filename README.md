# Khamari Thompson - Portfolio

A modern, sleek portfolio built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components, featuring interactive 3D Spline scenes and a professional silver/chrome aesthetic.

## Features

- ✨ **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- 🎨 **Silver/Chrome Design**: Clean, professional aesthetic with metallic gradients
- 🎭 **3D Interactive Scene**: Spline 3D integration in hero section
- 🌟 **Smooth Animations**: Framer Motion for fluid transitions
- 📱 **Fully Responsive**: Mobile-first design approach
- ⚡ **Performance Optimized**: Fast loading and smooth interactions
- 🎯 **shadcn/ui Components**: Pre-built, accessible UI components

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **3D Graphics**: [Spline](https://spline.design/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KhamariThompson/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # shadcn/ui components
│       ├── card.tsx       # Card component
│       ├── spotlight.tsx  # Interactive spotlight effect
│       └── splite.tsx     # Spline 3D scene component
├── lib/
│   └── utils.ts           # Utility functions
├── assets/                # Images and media
├── public/                # Static files
└── package.json           # Dependencies
```

## Sections

- **Home/Hero**: Interactive 3D Spline scene with introduction
- **About**: Professional background and education
- **Skills**: Technical skills organized by category
- **Experience**: Career timeline and achievements
- **Projects**: Portfolio of key projects
- **Contact**: Contact information and links

## Customization

### Colors

The silver/chrome color scheme is defined in `app/globals.css` and `tailwind.config.ts`. You can modify the color palette by adjusting the CSS variables.

### 3D Scene

To change the Spline 3D scene, replace the scene URL in `app/page.tsx`:

```tsx
<SplineScene
  scene="YOUR_SPLINE_SCENE_URL"
  className="w-full h-full"
/>
```

### Content

All content is located in `app/page.tsx`. Simply modify the text, images, and links to match your information.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Old Files

Your original HTML/CSS/JS portfolio has been backed up with `.old` extensions:
- `index.html.old`
- `style.css.old`
- `mediaqueries.css.old`
- `script.js.old`

## License

All Rights Reserved - Khamari Thompson

## Contact

- Email: Khamari11@gmail.com
- LinkedIn: [linkedin.com/in/khamarithompson](https://www.linkedin.com/in/khamarithompson/)
- GitHub: [github.com/KhamariThompson](https://github.com/KhamariThompson)
