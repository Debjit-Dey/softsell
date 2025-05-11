# SoftSell - Software License Resale Website

## Overview
SoftSell is a single-page responsive marketing website for a fictional software resale startup. Built with React.js, Vite, Tailwind CSS, and Framer Motion, it features a modern UI, mobile responsiveness, and a mock LLM-powered chat widget.

## Features Implemented
- **Hero Section**: Engaging headline, subheading, and CTA button with Framer Motion animations.
- **How It Works**: Three-step process with icons and responsive grid layout.
- **Why Choose Us**: Four feature tiles with icons and descriptions.
- **Testimonials**: Two dummy customer reviews with clean styling.
- **Contact Form**: Frontend-validated form with Name, Email, Company, License Type (dropdown), and Message fields.
- **Chat Widget**: Mock LLM-powered chat with hardcoded responses and example questions, built with Headless UI for accessibility.
- **Theme Toggle**: Light/dark mode toggle with smooth transitions.
- **SEO**: Meta tags, page title, and favicon included.
- **Animations**: Framer Motion used for subtle entrance animations.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.

## Design Choices
- **Color Palette**: Blue (#1E3A8A) for trust, green (#10B981) for CTAs, and amber (#F59E0B) for accents.
- **Typography**: Inter font for modern, clean readability.
- **UI/UX**: Minimalist design with consistent spacing, rounded buttons, and hover effects for interactivity.
- **Chat Widget**: Positioned bottom-right with a modal dialog for intuitive UX and accessibility.
- **Animations**: Subtle fades and slides to enhance engagement without overwhelming users.
- **Dark Mode**: Implemented for accessibility and user preference, with smooth transitions.

## Setup Instructions
1. Clone the repository: `git clone <repo-url>`
2. Navigate to the project: `cd softsell`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Build for production: `npm run build`

## Time Spent
- Planning and design: 2 hours
- Coding components and styling: 4 hours
- Animations and chat widget: 2 hours
- Testing and responsiveness: 1 hour
- Documentation: 1 hour
- **Total**: ~10 hours

## Notes
- Assets (icons, hero background, logo) are placeholders. Replace with real assets in production.
- The chat widget uses mock responses. For a real LLM, integrate with OpenAI's free-tier API or LangChain.
- The project is optimized for performance with Vite and Tailwind's JIT compilation.

## Future Improvements
- Add form submission handling with a backend API.
- Integrate a real LLM for dynamic chat responses.
- Enhance animations with scroll-based triggers.
- Add unit tests for form validation and chat functionality.

Built with ❤️ by [Your Name]