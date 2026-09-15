# Footer Update: Page-Aware Globe Animation & Watermark Implementation

Update the global [Footer.tsx](file:///h:/kyum/Dexber%20team/running/mazaya/app/components/Footer.tsx) component so that:
1. **Globe animation**: Runs **only on the Landing/Home page** (`/`), while other pages maintain a clean, non-animated dark design with static ambient glow.
2. **Logo watermark**: Features the large Mazaya logo watermark ([logo-watermark.jpg](file:///h:/kyum/Dexber%20team/running/mazaya/public/logo/logo-watermark.jpg)) positioned behind and above the footer card, exactly matching the reference design.
3. **Card layout**: Reorganize the footer card content to match the reference screenshot (balanced 2-column layout with left branding/social/Dexber attribution and right CTA/actions/copyright links).

---

## Proposed Changes

### Component: Global Footer

#### [MODIFY] [Footer.tsx](file:///h:/kyum/Dexber%20team/running/mazaya/app/components/Footer.tsx)

1. **Client-Side Route Detection**:
   - Add `"use client"` and import `usePathname` from `next/navigation`.
   - Check `const isHomePage = pathname === "/"`.

2. **Conditional Earth Animation**:
   - Wrap the rotating earth globe layer in `{isHomePage && ( ... )}` so that it only renders and animates on the home page.
   - On other pages, provide the subtle radial glow and static background without the heavy multi-layer animation.

3. **Watermark Integration**:
   - Position the `logo-watermark.jpg` in the background (`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 sm:-translate-y-1/2 w-[90%] max-w-5xl pointer-events-none opacity-40 lg:opacity-60`).
   - Sits layered between the ambient background and the glass footer card, extending slightly above the card as shown in the screenshot.

4. **Footer Card Layout Modernization** (matching reference screenshot):
   - **Card Frame**: Rounded glass container (`rounded-2xl border border-amber-500/40 bg-[#120E06]/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl`).
   - **Left Section**:
     - Mazaya logo (`/logo/Logo.png`).
     - Description text about transportation and warehousing in Saudi Arabia & GCC.
     - Social icons row (Facebook, Instagram, LinkedIn, Twitter, YouTube).
     - "Developed by: ❄ Dexber" with hyperlink.
     - Small disclaimer text: *"Design concepts are created by Dexber for presentation purposes. Third-party content and trademarks belong to their respective owners."*
   - **Right / Center Section**:
     - Headline: *"Ready to Move Your Business Forward?"*
     - Subheading: *"Reliable Logistics Solutions Across Saudi Arabia & Beyond"*
     - Action buttons:
       - **Get Quote →** (White background, black text, rounded button).
       - **Contact Us →** (Dark background with warm border, rounded button).
     - Bottom-right legal info:
       - *"© 2026 Mazaya Logistics. All Rights Reserved."*
       - Links: *"Privacy Policy | Terms & Conditions | Sitemap"*.

---

## Verification Plan

### Manual Verification
1. Navigate to `/` (Home page) in the browser:
   - Verify that the 3-layer rotating earth globe animation is active behind the footer.
   - Verify that the Mazaya logo watermark is properly displayed behind the card.
2. Navigate to `/industries`, `/services`, or `/about`:
   - Verify that the rotating globe animation is **disabled** (no animation).
   - Verify that the logo watermark and clean footer card design remain sharp and intact.
3. Test responsiveness across mobile, tablet, and desktop views.
