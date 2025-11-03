# Creative Portfolio Website
## Overview
A stunning one-page portfolio website showcasing design, development, and strategy work. Features smooth AJAX filtering, responsive design, and exceptional visual polish.

## Project Purpose
Professional portfolio site for creative designers and strategists to showcase their work across three categories:

* **Branding:** Brand identity, packaging design, visual systems
* **Web Design:** Websites, mobile apps, UI/UX design
* **Strategy:** Business planning, customer journey mapping, data analytics

## Key Features
* **Hero Section:** Full viewport intro with call-to-action
* **About Section:** Professional bio, skills showcase, service offerings
* **Portfolio Gallery:** Filterable project grid with smooth fade animations
* **Contact Section:** Email display and social media links
* **Smooth Navigation:** Sticky header with scroll-to-section functionality
* **Responsive Design:** Optimized for desktop, tablet, and mobile


## Technical Stack
* **Frontend:** React, TypeScript, Tailwind CSS, shadcn/ui components
* **Backend:** Express.js with in-memory storage
* **Icons:** lucide-react, react-icons/si
* **Images:** Generated portfolio images and professional headshot
* **State Management:** TanStack Query for data fetching

## Portfolio Data
The site showcases 12 projects:

* 4 Branding projects (coffee brand, skincare, tech startup, bakery)
* 4 Web Design projects (fashion e-commerce, fitness app, restaurant, SaaS)
* 4 Strategy projects (business growth, customer journey, analytics, positioning)

## Design System
* **Primary Color:** Purple (#262 83% 58%)
* **Typography:** Inter font family
* **Spacing:** Tailwind's spacing scale (4, 8, 12, 16, 20)
* **Animations:** Fade-in, scale transitions, staggered card reveals
* **Components:** shadcn/ui buttons, badges, with custom hover states

## Navigation
The site uses smooth scroll navigation to different sections:

* **Home:** Hero section
* **About:** Bio and services
* **Work:** Portfolio gallery
* **Contact**: Contact information

## Filter Functionality
AJAX-style filtering with smooth animations:

* Click filter button (All, Branding, Web Design, Strategy)
* Cards fade out with opacity and scale transition (200ms)
* Filtered items are calculated
* Cards fade in with staggered animation (100ms delay per card)
* No page reload - pure client-side filtering

## API Endpoints
* GET /api/portfolio - Returns all portfolio items with id, title, category, description, and image
