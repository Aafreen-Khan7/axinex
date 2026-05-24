# AXINEX Next.js Project - Setup & Conversion Notes

## Original HTML Files Converted

The following HTML files have been converted to the Next.js structure:

1. **home page.html** → `app/page.tsx`
   - Hero section with animated background
   - Innovation at scale (bento grid)
   - Core expertise section
   - Trust & security section
   - CTA section

2. **Our services.html** → `app/services/page.tsx`
   - Services hero section
   - Capabilities bento grid
   - Multiple service cards

3. **contact us.html** → `app/contact/page.tsx`
   - Contact form
   - Location information
   - Response time details

4. **admin login.html** → `app/admin/login/page.tsx`
   - Secure login form
   - Password visibility toggle
   - Security badges

5. **admin dashboard.html** → `app/admin/dashboard/page.tsx`
   - Sidebar navigation
   - KPI cards with trends
   - Traffic analytics chart
   - Service inquiries breakdown
   - Recent activity feed

6. **admin employee management.html** → `app/admin/employees/page.tsx`
   - Sidebar navigation
   - Employee search and filters
   - Employee directory table
   - Employee statistics

7. **corporate admin portal.html** → Used as reference for admin structure

## Design System Preserved

✅ All colors preserved:
- Primary: #003453 (Deep Navy)
- Secondary: #b6180c (Vibrant Red)
- All 50+ custom colors from original design

✅ Typography unchanged:
- Inter for body text and labels
- Playfair Display for headlines
- Material Symbols for icons

✅ Spacing & Layout:
- Custom spacing tokens
- Border radius values
- All responsive breakpoints

✅ Animations & Effects:
- Hero node animations
- Hover transitions
- Glass-morphism effects
- Backdrop blur effects

## File Organization

```
Original HTML → Next.js Conversion

Shared Code:
- Tailwind config (all colors, fonts, spacing)
- Global CSS (animations, scrollbar styling)
- Navigation component (fixed header)
- Footer component (consistent across pages)

Page-Specific Components:
- HeroSection.tsx (home hero)
- InnovationSection.tsx (innovation at scale)
- CoreExpertiseSection.tsx (expertise section)
- TrustSecuritySection.tsx (trust & security)
- CTASection.tsx (call-to-action)
- AdminLayout (sidebar + main content)

Page Routes:
- / (home)
- /services (services page)
- /contact (contact page)
- /admin/login (admin login)
- /admin/dashboard (admin dashboard)
- /admin/employees (employee management)
```

## Image Handling

Original images from HTML files:
- Using external URLs from Google's image service
- Can be replaced with local images in `public/images/`
- All img tags have proper alt text

## Ready for Backend Integration

The application is structured to easily integrate with backend APIs:

1. **Authentication**
   - Login form in `/admin/login` can POST to backend
   - Session management can be added
   - Protected routes for admin pages

2. **Dashboard Data**
   - KPI cards can fetch real-time data
   - Charts can receive dynamic data
   - Employee table can load from API

3. **Contact Form**
   - Form submission can POST to backend
   - Email service integration ready
   - Validation can be added

4. **Forms & Actions**
   - Add employee form in `/admin/employees`
   - Search and filter functionality
   - Pagination support already included

## Next Steps for Production

1. Install dependencies: `npm install`
2. Set up environment variables in `.env.local`
3. Configure API endpoints for backend integration
4. Add backend authentication and authorization
5. Connect dashboard to real data sources
6. Set up deployment (Vercel recommended for Next.js)
7. Configure custom domain

## Development Server

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.3
- **UI Framework**: React 18
- **Icons**: Material Symbols
- **Fonts**: Google Fonts (Inter, Playfair Display)

## Deployment Recommendations

- **Hosting**: Vercel (optimized for Next.js)
- **Database**: PostgreSQL or MongoDB (for future integration)
- **API**: Node.js/Express or Python backend
- **Storage**: Cloudinary or AWS S3 for images
- **Authentication**: NextAuth.js or custom JWT

## Notes

- All design decisions from the original HTML have been preserved
- No visual changes were made
- Project structure follows Next.js best practices
- Code is fully typed with TypeScript
- Responsive design maintained for all devices
- SEO metadata configured for all pages
