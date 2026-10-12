# Desktop Layout Standardization Plan: Matching Reference Pages

## 1. Objective & Scope

Standardize the desktop layout of the following 5 pages:
1. **About** (`/about`)
2. **Services** (`/services`)
3. **Industries** (`/industries`)
4. **Get Quote** (`/getQuote`)
5. **Contact Us** (`/contactus`)

So they share the exact aesthetic, structural hierarchy, and desktop responsiveness of the reference benchmark pages:
- **Home** (`/`)
- **Projects** (`/projects`)
- **Advantages** (`/advantages`)
- **Careers** (`/careers`)

> [!IMPORTANT]
> **Mobile View Preservation Guarantee**:
> All existing mobile layouts, responsive paddings, touch sliders, and card stacks are verified and will remain 100% intact. Changes will strictly target desktop breakpoints (`lg:*`, `md:*`).

---

## 2. Root Cause Analysis: Benchmark vs Outlier Pages

| Architectural Element | Benchmark Pages (`projects`, `advantages`, `careers`, `home`) | Outlier Pages (`about`, `services`, `industries`, `getQuote`, `contactus`) | Issue on Desktop |
| :--- | :--- | :--- | :--- |
| **Root Background & Font** | `bg-[#0A0700] font-manrope` | `bg-[#070502] font-sans` or `<div className="">` (no root style) | Inconsistent background shade (#070502 vs #0A0700) and mixed font families (Inter / Sans / Manrope). |
| **Hero Height on Desktop** | Standardized `lg:h-150` (`37.5rem` / `600px`) | `min-h-[560px]`, `min-h-[760px]`, or variable padding (`pt-36 pb-28`) | Jarring height jumps when navigating between pages. |
| **Hero Background & Overlay** | Full-bleed desktop image (`hidden lg:block fill object-cover`) + signature dual gradient: `linear-gradient(to right, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0.05) 85%, transparent 100%), linear-gradient(...)` | Ad-hoc gradients (`bg-linear-to-r from-black via-black/85...`), radial vignettes, or plain darkened overlays. | Lack of unified brand tone; text contrast is uneven on desktop screens. |
| **Hero Content Alignment** | Left 50% split on desktop: `lg:w-1/2 lg:gap-2 lg:px-16 pt-6` with `<SectionLabel>` | Constrained in boxed container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) with custom SVG badge lines. | Looks narrow, boxed-in, and misaligned with global navigation on wide monitors (1440px+). |
| **Hero Typography** | `h1: text-2xl font-bold sm:text-4xl lg:p-4 lg:text-5xl` with `<span className="text-yellow-200">` highlight + mobile yellow line | `lg:text-[62px]` or `lg:text-6xl` font sizes, custom color stops (`text-[#f3b749]` or `#fae4a8`). | Typography hierarchy differs significantly from the rest of the site. |
| **Content Container Width** | Fluid full-width sections with standardized `px-4 lg:px-8` or `px-4 sm:px-8 lg:px-16` | Rigid `max-w-7xl mx-auto` containers with tight horizontal bounding. | Feels constricted like a box inside a box on large displays. |
| **Bottom CTA Banner** | Unified `<Quote />` glassmorphic banner (`mx-4 lg:mx-8 my-10 lg:my-20 rounded-sm border-white/10 bg-white/4 backdrop-blur-xl`) | Custom cards (`ServiceCta`, `Industries` bottom box, `Connect with us` blocks) in `max-w-7xl`. | Inconsistent closing visual rhythm across pages. |

---

## 3. Detailed Per-Page Implementation Plan

### Page 1: `About` (`/about`)

#### Key Target Files:
- `app/about/page.tsx`
- `app/about/AboutHero.tsx`
- `app/about/CompanyOverview.tsx`
- `app/about/BusinessEcosystem.tsx`
- `app/about/CoreValues.tsx`

#### Proposed Changes:
1. **Root Page Container**:
   - Change root wrapper from `bg-[#070502] font-sans pb-16` to `bg-[#0A0700] font-manrope`.
2. **Hero Section (`AboutHero.tsx`)**:
   - Apply benchmark hero layout:
     - Outer container height: `h-70 w-full sm:h-120 lg:h-150`.
     - Standard desktop image (`fill object-cover hidden lg:block`) + benchmark dual gradient overlay.
     - Content container: Left 50% split on desktop: `relative z-10 flex h-full w-full flex-col items-start justify-center font-manrope text-white px-4 sm:px-8 lg:w-1/2 lg:gap-2 lg:px-16 pt-6`.
     - Standard badge: `<SectionLabel text="about us" className="bg-transparent lg:ml-4" />`.
     - Standard headline: `<h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-5xl">Building Connections. <span className="text-yellow-200">Delivering Excellence.</span></h1>`.
     - Sub-navigation floating bar: Keep floating anchor tabs functionality, positioned cleanly across desktop width (`px-4 lg:px-8 lg:px-16`) below the hero banner.
3. **Sections Alignment (`CompanyOverview`, `BusinessEcosystem`, `CoreValues`)**:
   - Align desktop horizontal padding to match `px-4 lg:px-8` (or `lg:px-16`), removing the overly restrictive `max-w-7xl` choke point.
   - Standardize card surface backgrounds to `bg-[#161000]` / `bg-[#161000]/35` and border `#352801` / `border-white/10`.

---

### Page 2: `Services` (`/services`)

#### Key Target Files:
- `app/services/page.tsx`
- `app/services/ServiceHero.tsx`
- `app/services/ServiceCta.tsx`

#### Proposed Changes:
1. **Root Page Container**:
   - Set root wrapper class to `bg-[#0A0700] font-manrope`.
2. **Hero Section (`ServiceHero.tsx`)**:
   - Re-architect hero to the benchmark `lg:h-150` structure:
     - Desktop image with `fill object-cover hidden lg:block`.
     - Signature dual gradient overlay: `lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.82)_28%,rgba(0,0,0,0.42)_60%,rgba(0,0,0,0.05)_85%,transparent_100%),linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_25%,transparent_72%,rgba(0,0,0,0.45)_100%)]`.
     - Left-aligned content: `lg:w-1/2 lg:gap-2 lg:px-16 pt-6 font-manrope text-white`.
     - Standard badge: `<SectionLabel text="our services" className="bg-transparent lg:ml-4" />`.
     - Heading: `<h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-5xl">Complete Logistics Solutions <span className="text-yellow-200">Under One Roof</span></h1>`.
     - Subtitle paragraph matching benchmark line-height and size (`lg:w-4/5 lg:p-4 text-xs sm:text-base lg:text-base`).
3. **Bottom CTA (`ServiceCta.tsx`)**:
   - Modernize and widen the CTA card from the narrow `max-w-7xl` box into the benchmark glassmorphic CTA layout (`my-10 lg:my-20 mx-4 lg:mx-8 rounded-sm border-white/10 bg-white/4 backdrop-blur-xl`).

---

### Page 3: `Industries` (`/industries`)

#### Key Target Files:
- `app/industries/page.tsx`
- `app/industries/components/IndustriesHero.tsx`
- `app/industries/components/IndustryCategories.tsx`

#### Proposed Changes:
1. **Root Page Container**:
   - Set root wrapper to `bg-[#0A0700] font-manrope`.
2. **Hero Section (`IndustriesHero.tsx`)**:
   - Align with benchmark:
     - Height: `h-70 w-full sm:h-120 lg:h-150`.
     - Standard desktop image + signature dual gradient overlay.
     - Left-aligned 50% desktop content (`lg:w-1/2 lg:gap-2 lg:px-16 pt-6`).
     - Badge: `<SectionLabel text="industries" className="bg-transparent lg:ml-4" />`.
     - Heading: `<h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-5xl">Logistics Solutions For <span className="text-yellow-200">Every Industry</span></h1>`.
     - Subtitle matching benchmark typography.
3. **Industry Categories Slider (`IndustryCategories.tsx`)**:
   - Widen desktop section padding from `max-w-7xl mx-auto` to `px-4 lg:px-8` (or `lg:px-16`) to match `Projects` (`PreviousProjects.tsx`) slider/card grid.
   - Header: Standard typography style (`Industry <span className="text-yellow-200">Categories</span>`).
4. **Bottom CTA**:
   - Align with benchmark glass CTA banner with `mx-4 lg:mx-8`.

---

### Page 4: `Get Quote` (`/getQuote`)

#### Key Target Files:
- `app/getQuote/page.tsx`
- `app/getQuote/components/QuoteForm.tsx`
- `app/getQuote/components/LogisticsCoverage.tsx`
- `app/getQuote/components/ProcessTimeline.tsx`

#### Proposed Changes:
1. **Root Page Container**:
   - Change root from `bg-[#070502] font-sans pb-24` to `bg-[#0A0700] font-manrope pb-20`.
2. **Hero Section**:
   - Refactor hero to standard benchmark layout:
     - Height: `lg:h-150`.
     - Standard desktop fill image + signature dual gradient overlay.
     - Left-aligned content: `lg:w-1/2 lg:gap-2 lg:px-16 pt-6 font-manrope text-white`.
     - Standard badge: `<SectionLabel text="get quote" className="bg-transparent lg:ml-4" />`.
     - Heading: `<h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-5xl">Let’s Build The Right <span className="text-yellow-200">Logistics Solution</span></h1>`.
     - Subtitle + Geographic Badges cleanly integrated.
3. **Form & Supporting Content Layout on Desktop**:
   - Expand main content container from `max-w-7xl` to `px-4 lg:px-8` / `lg:px-16`.
   - Desktop 2-column layout (Form: 7 cols, "Why Choose Mazaya": 5 cols) maintains generous breathing room and matching surface styling (`bg-[#161000]`, border `#352801`).

---

### Page 5: `Contact Us` (`/contactus`)

#### Key Target Files:
- `app/contactus/page.tsx`

#### Proposed Changes:
1. **Root Page Container**:
   - Change root from `bg-[#070502] font-sans pb-16` to `bg-[#0A0700] font-manrope pb-16`.
2. **Hero Section & Quick Contact Info Cards**:
   - Re-architect hero to standard benchmark:
     - Height: `lg:h-150`.
     - Standard fill image + signature dual gradient overlay.
     - Left 50% content: `lg:w-1/2 lg:gap-2 lg:px-16 pt-6 font-manrope text-white`.
     - Standard badge: `<SectionLabel text="contact us" className="bg-transparent lg:ml-4" />`.
     - Headline: `<h1 className="w-11/12 text-2xl font-bold leading-tight sm:text-4xl lg:p-4 lg:text-5xl">Let’s Move Your <span className="text-yellow-200">Business Forward</span></h1>`.
     - Mobile divider line: `<span className="mt-2 block lg:hidden h-0.5 w-24 bg-yellow-400"></span>`.
     - Quick Contact Info cards bar: Placed cleanly overlapping or beneath hero with consistent desktop width (`px-4 lg:px-8` / `lg:px-16`), matching `Statistics` on Advantages and `Client` on Projects.
3. **Form & Map Section on Desktop**:
   - Replace restrictive `max-w-7xl` wrapper with `px-4 lg:px-8` / `lg:px-16`.
   - Update cards to `bg-[#161000]` / `border-[#352801]` styling for desktop visual consistency.
   - Bottom CTA banner widened to match benchmark pages (`mx-4 lg:mx-8`).

---

## 4. Verification & Testing Plan

1. **Desktop View Verification (1440px & 1920px)**:
   - Verify all 9 pages (`home`, `projects`, `advantages`, `careers`, `about`, `services`, `industries`, `getQuote`, `contactus`) share consistent hero banner heights (`lg:h-150`), gradient overlays, `<SectionLabel>` badges, yellow highlight headings, and horizontal container gutters (`px-4 lg:px-8` / `lg:px-16`).
   - Check that no page looks awkwardly narrow or boxed inside `max-w-7xl` on wide displays.
2. **Mobile View Regression Check (375px - 430px)**:
   - Ensure all mobile views remain identical to current state (touch sliders, accordion, mobile hero background images, form fields, and spacing).
3. **Typography & Color Consistency**:
   - Verify font is unified across all pages (`font-manrope`).
   - Verify background is unified to `#0A0700`.
   - Verify highlight text color uses `text-yellow-200`.
4. **Interactive Functional Testing**:
   - Contact form submission and success modal.
   - Quote form multi-step submission.
   - Industry categories slider navigation arrows and drag interactions.
   - About page sub-nav anchor scrolling.
