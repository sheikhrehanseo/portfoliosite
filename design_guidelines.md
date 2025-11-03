# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from leading portfolio platforms (Behance, Dribbble) and award-winning creative portfolios. This one-page portfolio prioritizes visual impact, seamless filtering interactions, and work showcase.

## Core Design Principles
1. **Work-First Philosophy**: Portfolio items are the hero - minimize distraction, maximize visual real estate for projects
2. **Fluid Interactions**: Smooth, organic filtering transitions that feel native, not abrupt
3. **Confident Minimalism**: Clean layouts with bold typography and generous breathing room around portfolio items

## Layout System

**Container Strategy**:
- Hero section: Full-width with max-w-6xl inner container
- About section: max-w-4xl for readable bio content
- Portfolio grid: max-w-7xl for expansive project display
- Contact section: max-w-3xl centered

**Spacing Primitives**: Use Tailwind units of **4, 8, 12, 16, 20** for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-4 for tight groupings
- Element margins: mb-8 for section headers, mb-4 for subheadings

**Grid System**:
- Portfolio gallery: 3 columns desktop (grid-cols-3), 2 columns tablet (md:grid-cols-2), 1 column mobile
- Skills/services: 4 columns desktop (grid-cols-4), 2 columns tablet
- Single column for hero, about text, and contact content

## Typography

**Font Families**:
- Primary (Headings): Inter or Manrope - clean, modern sans-serif via Google Fonts
- Secondary (Body): Inter or System UI stack for optimal readability

**Hierarchy**:
- H1 (Hero title): text-6xl font-bold tracking-tight (mobile: text-4xl)
- H2 (Section headers): text-4xl font-semibold (mobile: text-3xl)
- H3 (Project titles): text-2xl font-semibold
- H4 (Filter buttons): text-sm font-medium uppercase tracking-wide
- Body text: text-lg leading-relaxed
- Small text (captions): text-sm

## Component Library

### Navigation
- Sticky header with smooth scroll links
- Minimal logo/name on left, navigation links on right
- Hamburger menu for mobile with slide-in overlay
- Active section indicator with underline animation

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Large typographic treatment emphasizing name and role
- Subtle tagline/description below
- Prominent CTA button ("View Work" scrolling to portfolio)
- Animated entrance: fade-in with slight upward movement

### About Section
- Split layout: Professional headshot image on left (40%), bio text on right (60%) - desktop only, stacks on mobile
- Brief 2-3 paragraph bio with personality
- Skills/expertise tags displayed as pill-shaped badges below bio
- Services offered in 4-column icon grid

### Portfolio Gallery (Core Feature)
**Filter Navigation**:
- Horizontal filter bar above grid: "All", "Branding", "Web Design", "Strategy"
- Active filter has distinct styling (not color-dependent: bold weight + underline)
- Filters aligned center with gap-6 between buttons

**Project Cards**:
- Image-first design with 16:10 aspect ratio container
- Overlay appears on hover: project title + category tag visible
- Smooth scale transform on hover (scale-105)
- Each card links to project detail (or modal - engineer's choice)
- Lazy-loaded images for performance

**AJAX Filter Behavior**:
- Clicking filter triggers fade-out of non-matching items (opacity + scale down)
- Matching items fade-in and reflow to fill grid
- Smooth 300ms transitions
- No page refresh - pure client-side filtering
- Maintain 3-column grid even when filtered

### Contact Section
- Centered layout with heading
- Email address displayed prominently (text-2xl)
- Social media icons in horizontal row (LinkedIn, Behance, Dribbble, GitHub)
- Optional: Simple contact form (name, email, message fields)

### Footer
- Minimal: Copyright text center-aligned
- Back-to-top link on right side
- Social links repeated for convenience

## Interaction Patterns

**Smooth Scrolling**: All navigation links use smooth scroll behavior to sections

**Filter Animation Sequence**:
1. User clicks filter button
2. Button receives active state instantly
3. Non-matching cards: opacity 0 + scale-95 over 200ms
4. Layout reflows (CSS Grid auto-adjusts)
5. Matching cards: opacity 1 + scale-100 over 300ms with 100ms delay

**Hover States**:
- Portfolio cards: Lift effect (translateY -8px) + shadow increase
- Buttons: Slight scale (scale-105) + shadow
- Filter buttons: Opacity shift when inactive
- Links: Underline slide-in animation

## Images

**Hero Section**: 
- No large background image - focus on typography
- Optional: Subtle geometric pattern or gradient treatment in background

**About Section**:
- Professional headshot: Square or circular crop, 400x400px minimum
- Natural, approachable photo with neutral background

**Portfolio Gallery** (12 total project images):
- 4 Branding projects: Logo designs, brand identity mockups, packaging
- 4 Web Design projects: Website screenshots, mobile app interfaces
- 4 Strategy projects: Infographics, presentation decks, diagrams
- High-quality images, 1200x750px minimum, consistent styling

**Services/Skills Icons**:
- Use Heroicons (outline style) via CDN
- Icons for: Design, Development, Strategy, Consulting (or similar services)
- Size: 32px - 48px

**Social Icons**: 
- Use Font Awesome icons via CDN
- LinkedIn, Behance, Dribbble, GitHub
- Size: 24px, consistent spacing

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px - Single column everything, stacked navigation
- Tablet: 768px - 1024px - 2-column portfolio grid
- Desktop: > 1024px - Full 3-column grid, split about section

**Mobile Optimizations**:
- Hero height reduced to 70vh
- Filter buttons stack vertically or scroll horizontally
- Touch-friendly tap targets (min 44px height)
- Simplified navigation in hamburger menu

## Accessibility
- Keyboard navigation for all filters
- Focus indicators on interactive elements (ring-2 ring-offset-2)
- Semantic HTML throughout (header, nav, main, section, footer)
- Alt text for all portfolio images describing project
- ARIA labels for filter buttons and icon links

This design creates a bold, professional portfolio that puts your work at center stage while providing smooth, delightful interactions through the AJAX filtering system.