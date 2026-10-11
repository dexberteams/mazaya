# 🚚 Mazaya Logistics (مزايا اللوجستية)

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Proprietary-amber?style=for-the-badge)](#)

A modern, high-performance web platform for **Mazaya Logistics** — a premier logistics, transportation, cold-chain, and supply-chain solutions provider operating across the Kingdom of Saudi Arabia, the GCC, and international corridors.

Engineered and developed with state-of-the-art web technologies by **Dexber Teams**.

---

## 🌟 Overview & Key Highlights

**Mazaya Logistics** delivers end-to-end supply chain services tailored for enterprise, retail, e-commerce, and high-demand seasonal operations. The website is crafted with a luxury dark-gold design language, rich micro-animations, interactive interactive forms, interactive geographic coverage maps, and bilingual support (English & Arabic).

- **500+** Professional Fleet Drivers
- **10,000+** Successful Deliveries
- **15+** Key Cities & Hubs Covered Across Saudi Arabia & GCC
- **99%** Verified Client Satisfaction Rate
- **24/7** Real-Time Operational Support & Tracking

---

## 🏗️ Core Features & Site Architecture

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero introduction, partner marquee (FedEx, Noon, etc.), corporate journey, core service cards, team leadership, stats, and client feedback. |
| `/about` | **About Us** | Company history, mission & vision, core values, leadership roster, and the **Business Ecosystem** (Boxify Logistics, Dexbar). |
| `/services` | **Services** | Detailed breakdown of land transport, warehousing, air & ocean freight, customs clearance, and cold-chain logistics. |
| `/industries` | **Industries** | Specialized solutions for E-Commerce, Food & Beverage, Cloud Kitchens, Pharmaceuticals, and Retail. |
| `/fleet` | **Fleet & Coverage** | Comprehensive vehicle specifications (dry vans, refrigerated reefers, heavy haulers) and interactive Leaflet coverage mapping. |
| `/warehouse` | **Warehousing** | Storage specs, temperature-controlled facilities, inventory management systems (WMS), and cross-docking capabilities. |
| `/projects` | **Projects** | Showcase of high-volume seasonal operations, enterprise fulfillment projects, and client testimonials. |
| `/advantages` | **Why Mazaya** | Operational advantages, step-by-step process timelines, latest logistics news, and FAQ accordion. |
| `/careers` | **Careers** | Open job opportunities, corporate culture perks, and an interactive online application portal with resume upload. |
| `/getQuote` | **Get a Quote** | Dynamic quote calculator and request form with real-time tracking benefits and geographic coverage selectors. |
| `/contactus` | **Contact Us** | Direct inquiry form, WhatsApp click-to-chat, Riyadh headquarters office hours, and interactive Google Map embed. |

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS & CSS Variables
- **Animations & Interactivity**:
  - [Framer Motion](https://www.framer.com/motion/) for fluid page transitions
  - [React Fast Marquee](https://www.react-fast-marquee.com/) for partner & brand carousels
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Mapping & Geolocation**: [Leaflet](https://leafletjs.com/) for interactive coverage routes
- **Typography**: Google Fonts via `next/font` (Geist, Inter, Manrope, Anek Bangla)

---

## 📁 Directory Structure

```text
mazaya/
├── app/
│   ├── about/             # Company overview, ecosystem, core values & CTA
│   ├── advantages/        # Process timeline, FAQ, news & quotes
│   ├── careers/           # Job openings, company culture & online application
│   ├── components/        # Global layout components (Navbar, Footer)
│   ├── contactus/         # Contact forms, location maps & direct channels
│   ├── fleet/             # Fleet showcase, specs, Leaflet coverage maps
│   ├── getQuote/          # Multi-step logistics quote request flow
│   ├── home/              # Homepage components (Hero, Story, Services, etc.)
│   ├── industries/        # Industry-specific logistics solutions
│   ├── projects/          # Case studies, past executions & testimonials
│   ├── services/          # Logistics offerings & CTA blocks
│   ├── ui/                # Shared reusable UI primitives & badges
│   ├── warehouse/         # Warehouse capabilities & storage types
│   ├── globals.css        # Tailwind v4 directives & color tokens
│   ├── layout.tsx         # Root layout with fonts, metadata, & global shell
│   └── page.tsx           # Home page entry point
├── public/                # Static assets (logos, partner badges, fleet imagery)
├── package.json           # Scripts & dependency definitions
├── tsconfig.json          # TypeScript compiler configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version **18.18.0** or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:dexberteams/mazaya.git
   cd mazaya
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Next.js development server with hot-reloading |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint to check for code quality and style issues |

---

## 🎨 Design System & Branding

- **Background Palette**: Rich Obsidian & Amber-Dark (`#070502`, `#0A0700`, `#1E1813`)
- **Accent Palette**: Mazaya Gold & Vibrant Amber (`#FFBB00`, `#F5B800`, `#d4af37`)
- **Typography**: High-legibility modern sans-serifs (`Inter`, `Manrope`, `Geist Sans`) paired with bilingual support (`Anek Bangla` & Arabic typography).
- **Visual Effects**: Glassmorphism (`backdrop-blur`), subtle golden glow highlights (`border-[#FFBB00]/30`), and interactive hover elevations.

---

## 🏢 Business Ecosystem

Mazaya operates as part of an integrated business ecosystem:
- **Boxify Logistics**: Smart operations, e-commerce fulfillment, and reliable last-mile delivery.
- **Dexbar**: Digital solutions, tech innovation, and enterprise software engineering.

---

## 🛡️ Maintainers & Credits

- **Client**: Mazaya Fast Logistics (Riyadh, Saudi Arabia)
- **Design & Engineering**: [Dexber Teams](https://github.com/dexberteams)
- **License**: Private & Proprietary — All Rights Reserved.
