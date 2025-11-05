# Complete eCommerce Website Build Guide

**Last Updated:** October 29, 2025  
**Status:** Planning Phase  
**Timeline:** 4 Weeks

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Tech Stack & Libraries](#tech-stack)
3. [Stage 1: Planning](#stage-1-planning)
4. [Stage 2: Building](#stage-2-building)
5. [Stage 3: Testing](#stage-3-testing)
6. [Stage 4: Deployment](#stage-4-deployment)
7. [Design Resources](#design-resources)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

Building a full-stack eCommerce website for friend's business using modern web technologies.

### Goals

- ✅ User-friendly shopping experience
- ✅ Secure payment processing
- ✅ Admin dashboard for management
- ✅ Mobile responsive
- ✅ Fast performance
- ✅ Beautiful animations

---

## 🛠️ Tech Stack & Libraries

### Core Technologies

```
Frontend Framework: SvelteKit + TypeScript
Styling: Tailwind CSS
Database: PostgreSQL (Neon or Supabase)
ORM: Drizzle ORM
Deployment: Vercel
```

### Essential Libraries

#### 1. **UI Components**

```bash
# Shadcn-svelte (Pre-built accessible components)
bun add -D shadcn-svelte
npx shadcn-svelte@latest init

# Components to install:
npx shadcn-svelte@latest add button
npx shadcn-svelte@latest add input
npx shadcn-svelte@latest add card
npx shadcn-svelte@latest add dialog
npx shadcn-svelte@latest add select
npx shadcn-svelte@latest add toast
npx shadcn-svelte@latest add dropdown-menu
npx shadcn-svelte@latest add sheet (for cart sidebar)
npx shadcn-svelte@latest add badge
npx shadcn-svelte@latest add skeleton (loading states)
```

**Why:** Pre-built, accessible components that look professional. Saves 10+ hours of work!

#### 2. **Animations**

```bash
# GSAP (Professional animations)
bun add gsap

# AutoAnimate (Simple animations)
bun add @formkit/auto-animate
```

**GSAP Use Cases:**

- Hero section animations
- Product card hover effects
- Scroll-triggered animations
- Page transitions
- Cart slide-in animations

**AutoAnimate Use Cases:**

- List additions/removals (cart items)
- Form errors appearing
- Loading states
- Simple transitions

#### 3. **Validation**

```bash
# Zod (Type-safe validation)
bun add zod

# Superforms (Form handling for SvelteKit)
bun add sveltekit-superforms
```

**Why:** Type-safe validation for forms, API endpoints, and data. Prevents bugs!

#### 4. **Icons**

```bash
# Lucide Icons (Beautiful, consistent icons)
bun add lucide-svelte
```

**Why:** 1000+ icons, tree-shakeable (only loads what you use), looks professional.

#### 5. **Database & ORM**

```bash
# Drizzle ORM
bun add drizzle-orm
bun add -D drizzle-kit

# PostgreSQL driver (choose one)
bun add postgres              # For Neon
# OR
bun add @supabase/supabase-js # For Supabase
```

**Why:** Type-safe database queries, migrations, great TypeScript support.

#### 6. **Authentication**

```bash
# Better Auth
bun add better-auth
```

**Why:** Built for SvelteKit, handles sessions, social auth, easy to use.

#### 7. **Payments**

```bash
# Stripe
bun add stripe @stripe/stripe-js
```

**Why:** Industry standard, great docs, handles PCI compliance.

#### 8. **Email**

```bash
# Resend (Email service)
bun add resend
```

**Why:** Beautiful emails, developer-friendly, generous free tier.

#### 9. **Image Management**

```bash
# Cloudinary (image uploads & optimization)
bun add cloudinary
```

**Why:** Automatic image optimization, CDN delivery, transformations.

#### 10. **Date Handling**

```bash
# date-fns (lightweight date library)
bun add date-fns
```

**Why:** Smaller than moment.js, tree-shakeable, good for order dates.

#### 11. **Charts (Admin Dashboard)**

```bash
# Recharts (beautiful charts)
bun add recharts
```

**Why:** Sales charts, analytics, revenue graphs for admin dashboard.

#### 12. **State Management (if needed)**

```bash
# Built into Svelte (writable, derived)
# No extra library needed!
```

#### 13. **SEO**

```bash
# Built into SvelteKit
# No extra library needed!
```

---

### Complete Installation Command

```bash
# Run this all at once:
bun add gsap @formkit/auto-animate lucide-svelte drizzle-orm postgres zod sveltekit-superforms better-auth stripe @stripe/stripe-js resend cloudinary date-fns recharts

bun add -D drizzle-kit shadcn-svelte @types/node

# Then initialize shadcn-svelte
npx shadcn-svelte@latest init
```

---

## 🎨 Design Resources & Tools

### Where to Get UI Designs

#### 1. **Free Design Tools**

**Figma (Recommended)**

- URL: <https://figma.com>
- **Free Templates:**
  - <https://www.figma.com/community> (search "ecommerce")
  - Thousands of free templates
  - Can copy and customize
  
**How to use:**

1. Browse Figma Community
2. Search "ecommerce template"
3. Duplicate to your account
4. Customize colors, text, images
5. Export assets
6. Build in code

**Top Free eCommerce Templates:**

- "eCommerce Dashboard" by Figma
- "Online Shop" by various designers
- Filter by "Free" and "eCommerce"

#### 2. **AI Design Generators**

**V0.dev by Vercel**

- URL: <https://v0.dev>
- Type: "ecommerce product card"
- Generates: React/Svelte code + design
- **Free tier available**
- Converts to Tailwind CSS

**Galileo AI**

- URL: <https://www.usegalileo.ai>
- Text to UI design
- Example: "modern ecommerce homepage with hero section"
- Generates editable designs

**Uizard**

- URL: <https://uizard.io>
- AI design generator
- "Screenshot to design" feature
- Free tier available

#### 3. **Inspiration Sites**

**Dribbble**

- URL: <https://dribbble.com/search/ecommerce>
- Search: "ecommerce design"
- Browse and recreate

**Behance**

- URL: <https://www.behance.net>
- Search: "online store"
- High-quality designs

**Mobbin**

- URL: <https://mobbin.com>
- Real app screenshots
- Mobile ecommerce designs

**Land-book**

- URL: <https://land-book.com>
- Landing page inspiration

#### 4. **Component Libraries (Copy & Paste)**

**Tailwind UI**

- URL: <https://tailwindui.com>
- **Free components available**
- eCommerce category
- Copy Tailwind code

**Flowbite**

- URL: <https://flowbite.com>
- Free components
- eCommerce examples
- Tailwind-based

**HyperUI**

- URL: <https://www.hyperui.dev>
- Free Tailwind components
- Marketing & eCommerce sections

**Tailwind Components**

- URL: <https://tailwindcomponents.com>
- Community components
- Free to use

#### 5. **Icon & Image Resources**

**Icons:**

- Lucide Icons (already included)
- Heroicons: <https://heroicons.com>
- Phosphor Icons: <https://phosphoricons.com>

**Images (Free Stock):**

- Unsplash: <https://unsplash.com>
- Pexels: <https://pexels.com>
- Pixabay: <https://pixabay.com>

**Product Mockups:**

- Smartmockups: <https://smartmockups.com>
- Placeit: <https://placeit.net>

#### 6. **Color Palettes**

**Coolors**

- URL: <https://coolors.co>
- Generate color schemes
- Export Tailwind config

**Tailwind Color Palette**

- URL: <https://tailwindcss.com/docs/customizing-colors>
- Pre-made palettes
- Consistent colors

#### 7. **Typography**

**Google Fonts**

- URL: <https://fonts.google.com>
- Free fonts
- Easy integration

**Recommended Pairs:**

- Inter (body) + Poppins (headings)
- Outfit (body) + Space Grotesk (headings)
- DM Sans (body) + Plus Jakarta Sans (headings)

---

### My Design Workflow Recommendation

```
OPTION 1: Quick & Easy (Recommended for you)
1. Browse Figma Community templates
2. Pick an ecommerce template you like
3. Duplicate it
4. Change colors to match brand
5. Use Shadcn-svelte components to build it
6. Add GSAP animations

OPTION 2: AI-Generated
1. Go to v0.dev
2. Describe each section: "modern ecommerce hero section with gradient"
3. Copy generated code
4. Customize as needed

OPTION 3: Inspiration + Build
1. Browse Dribbble for inspiration
2. Screenshot designs you like
3. Recreate using Shadcn-svelte components
4. Mix and match best parts
```

---

## 📅 Stage 1: Planning

### 1.1 Pages Needed

#### Customer-Facing Pages

**Home (`/`)**

- Hero section with CTA
- Featured products (4-6 items)
- Category showcase
- Testimonials section
- Newsletter signup

**Products Page (`/products`)**

- Product grid (12-24 per page)
- Search bar
- Filters (category, price, brand)
- Sort options (price, newest, popular)
- Pagination

**Single Product (`/products/[id]`)**

- Image gallery (3-5 images)
- Product title & price
- Description
- Add to cart button
- Quantity selector
- Stock indicator
- Reviews section
- Related products

**Cart (`/cart`)**

- Cart items list
- Quantity controls
- Remove items
- Subtotal calculation
- Proceed to checkout button
- Continue shopping link

**Checkout (`/checkout`)**

- Shipping information form
- Payment method (Stripe)
- Order summary
- Apply coupon (optional)
- Place order button

**Order Success (`/order-success`)**

- Order confirmation message
- Order number
- Tracking link
- Continue shopping button

**Order Tracking (`/track/[token]`)**

- Order status timeline
- Tracking number
- Shipping address
- Order items
- Create account CTA (for guests)

**Account (`/account`)**

- Order history
- Profile information
- Saved addresses (optional)
- Sign out button

**Auth Pages**

- Sign In (`/auth/signin`)
- Sign Up (`/auth/signup`)
- Forgot Password (`/auth/forgot-password`) - optional

#### Admin Pages

**Admin Dashboard (`/admin`)**

- Total revenue card
- Total orders card
- Low stock alerts
- Recent orders table
- Sales chart (last 30 days)

**Products Management (`/admin/products`)**

- Products table
- Add product button
- Edit/delete actions
- Search products
- Bulk actions (optional)

**Add/Edit Product (`/admin/products/new` or `/admin/products/[id]/edit`)**

- Product form
- Image upload (Cloudinary)
- Price & stock inputs
- Category selection
- Save button

**Orders Management (`/admin/orders`)**

- Orders table
- Filter by status
- Update status dropdown
- View order details
- Export orders (optional)

---

### 1.2 Features Breakdown

#### Phase 1: Must Have (MVP)

- [ ] User authentication (sign up, sign in, sign out)
- [ ] Product catalog (list, search, filter)
- [ ] Shopping cart (add, remove, update)
- [ ] Checkout with Stripe
- [ ] Order creation & tracking
- [ ] Email notifications (order confirmation)
- [ ] Admin panel (manage products, orders)

#### Phase 2: Should Have

- [ ] Product reviews & ratings
- [ ] User profile & order history
- [ ] Image optimization (Cloudinary)
- [ ] Mobile responsive design
- [ ] Loading states & error handling
- [ ] SEO optimization

#### Phase 3: Nice to Have

- [ ] Wishlist
- [ ] Coupon codes
- [ ] Inventory management
- [ ] Multiple payment methods
- [ ] Guest checkout
- [ ] Social media integration
- [ ] Blog/content pages

---

### 1.3 Database Schema (PostgreSQL)

```typescript
// Users Table
users {
  id: uuid (primary key)
  email: string (unique)
  name: string
  password_hash: string
  role: enum('customer', 'admin')
  created_at: timestamp
  updated_at: timestamp
}

// Products Table
products {
  id: serial (primary key)
  name: string
  slug: string (unique)
  description: text
  price: decimal(10,2)
  compare_at_price: decimal(10,2) // for discounts
  stock: integer
  low_stock_threshold: integer (default: 10)
  images: text[] // array of URLs
  category: string
  brand: string (nullable)
  is_active: boolean (default: true)
  is_featured: boolean (default: false)
  created_at: timestamp
  updated_at: timestamp
}

// Orders Table
orders {
  id: serial (primary key)
  order_number: string (unique)
  user_id: uuid (nullable, foreign key)
  email: string
  status: enum('pending', 'processing', 'shipped', 'delivered', 'cancelled')
  payment_status: enum('pending', 'paid', 'failed', 'refunded')
  payment_intent: string // Stripe payment ID
  access_token: string (unique) // for guest tracking
  
  subtotal: decimal(10,2)
  tax: decimal(10,2)
  shipping: decimal(10,2)
  discount: decimal(10,2)
  total: decimal(10,2)
  
  shipping_address: jsonb
  billing_address: jsonb (nullable)
  notes: text (nullable)
  
  created_at: timestamp
  updated_at: timestamp
}

// Order Items Table
order_items {
  id: serial (primary key)
  order_id: integer (foreign key)
  product_id: integer (foreign key)
  product_name: string // snapshot at time of order
  product_image: string (nullable)
  quantity: integer
  price: decimal(10,2) // price at time of order
  total: decimal(10,2)
}

// Cart Items Table (optional - can use session storage)
cart_items {
  id: serial (primary key)
  user_id: uuid (nullable, foreign key)
  session_id: string (nullable) // for guests
  product_id: integer (foreign key)
  quantity: integer
  created_at: timestamp
  updated_at: timestamp
}

// Reviews Table (Phase 2)
reviews {
  id: serial (primary key)
  product_id: integer (foreign key)
  user_id: uuid (foreign key)
  rating: integer (1-5)
  title: string
  comment: text
  is_verified_purchase: boolean
  is_approved: boolean
  created_at: timestamp
}

// Addresses Table (Phase 2)
addresses {
  id: serial (primary key)
  user_id: uuid (foreign key)
  full_name: string
  address_line1: string
  address_line2: string (nullable)
  city: string
  state: string
  postal_code: string
  country: string (default: 'US')
  phone: string
  is_default: boolean
  created_at: timestamp
}
```

---

### 1.4 Folder Structure (Final)

```
my-ecommerce/
│
├── src/
│   ├── lib/
│   │   │
│   │   ├── server/                    # Server-only code
│   │   │   ├── db.ts                  # Database connection
│   │   │   ├── schema.ts              # All Drizzle schemas
│   │   │   ├── auth.ts                # Better Auth config
│   │   │   ├── stripe.ts              # Stripe client
│   │   │   ├── email.ts               # Email functions (Resend)
│   │   │   ├── cloudinary.ts          # Image upload config
│   │   │   └── utils.ts               # Server helpers
│   │   │
│   │   ├── stores/                    # Client-side state
│   │   │   ├── cart.ts                # Cart store
│   │   │   ├── auth.ts                # Auth store
│   │   │   └── ui.ts                  # UI state (modals, etc.)
│   │   │
│   │   ├── components/                # Svelte components
│   │   │   │
│   │   │   ├── ui/                    # Shadcn components
│   │   │   │   ├── button/
│   │   │   │   ├── input/
│   │   │   │   ├── card/
│   │   │   │   ├── dialog/
│   │   │   │   ├── sheet/
│   │   │   │   └── ... (other shadcn)
│   │   │   │
│   │   │   ├── layout/                # Layout components
│   │   │   │   ├── Navbar.svelte
│   │   │   │   ├── Footer.svelte
│   │   │   │   └── AdminSidebar.svelte
│   │   │   │
│   │   │   ├── product/               # Product components
│   │   │   │   ├── ProductCard.svelte
│   │   │   │   ├── ProductGrid.svelte
│   │   │   │   ├── ProductGallery.svelte
│   │   │   │   └── ProductFilters.svelte
│   │   │   │
│   │   │   ├── cart/                  # Cart components
│   │   │   │   ├── CartSidebar.svelte
│   │   │   │   ├── CartItem.svelte
│   │   │   │   └── CartSummary.svelte
│   │   │   │
│   │   │   └── shared/                # Reusable components
│   │   │       ├── LoadingSkeleton.svelte
│   │   │       ├── ErrorMessage.svelte
│   │   │       └── EmptyState.svelte
│   │   │
│   │   ├── utils/                     # Utility functions
│   │   │   ├── validation.ts          # All Zod schemas
│   │   │   ├── formatters.ts          # Price, date formatters
│   │   │   ├── animations.ts          # GSAP animation helpers
│   │   │   └── constants.ts           # App constants
│   │   │
│   │   └── config/                    # Configuration
│   │       ├── seo.ts                 # SEO config
│   │       └── site.ts                # Site settings
│   │
│   ├── routes/                        # Pages & API routes
│   │   │
│   │   ├── +layout.svelte             # Root layout
│   │   ├── +layout.server.ts          # Root layout data
│   │   ├── +page.svelte               # Home page
│   │   │
│   │   ├── products/
│   │   │   ├── +page.svelte           # Products list
│   │   │   ├── +page.server.ts        # Load products
│   │   │   └── [id]/
│   │   │       ├── +page.svelte       # Single product
│   │   │       └── +page.server.ts    # Load product
│   │   │
│   │   ├── cart/
│   │   │   └── +page.svelte           # Cart page
│   │   │
│   │   ├── checkout/
│   │   │   └── +page.svelte           # Checkout page
│   │   │
│   │   ├── order-success/
│   │   │   └── +page.svelte           # Success page
│   │   │
│   │   ├── track/
│   │   │   └── [token]/
│   │   │       ├── +page.svelte       # Order tracking
│   │   │       └── +page.server.ts    # Load order
│   │   │
│   │   ├── account/
│   │   │   ├── +page.svelte           # Account page
│   │   │   └── +page.server.ts        # Load user data
│   │   │
│   │   ├── auth/
│   │   │   ├── signin/
│   │   │   │   └── +page.svelte       # Sign in
│   │   │   ├── signup/
│   │   │   │   └── +page.svelte       # Sign up
│   │   │   └── [...all]/
│   │   │       └── +server.ts         # Better Auth routes
│   │   │
│   │   ├── admin/
│   │   │   ├── +layout.svelte         # Admin layout
│   │   │   ├── +layout.server.ts      # Admin auth guard
│   │   │   ├── +page.svelte           # Dashboard
│   │   │   │
│   │   │   ├── products/
│   │   │   │   ├── +page.svelte       # Products list
│   │   │   │   ├── new/
│   │   │   │   │   └── +page.svelte   # Add product
│   │   │   │   └── [id]/
│   │   │   │       └── edit/
│   │   │   │           └── +page.svelte # Edit product
│   │   │   │
│   │   │   └── orders/
│   │   │       ├── +page.svelte       # Orders list
│   │   │       └── [id]/
│   │   │           └── +page.svelte   # Order details
│   │   │
│   │   └── api/                       # API endpoints
│   │       ├── products/
│   │       │   ├── +server.ts         # GET /api/products
│   │       │   └── [id]/
│   │       │       └── +server.ts     # GET/PUT/DELETE /api/products/[id]
│   │       │
│   │       ├── cart/
│   │       │   ├── +server.ts         # GET/POST/DELETE /api/cart
│   │       │   └── [id]/
│   │       │       └── +server.ts     # PATCH/DELETE /api/cart/[id]
│   │       │
│   │       ├── checkout/
│   │       │   └── +server.ts         # POST /api/checkout
│   │       │
│   │       ├── orders/
│   │       │   ├── +server.ts         # GET /api/orders
│   │       │   └── track/
│   │       │       └── +server.ts     # GET /api/orders/track
│   │       │
│   │       ├── upload/
│   │       │   └── +server.ts         # POST /api/upload (Cloudinary)
│   │       │
│   │       └── webhooks/
│   │           └── stripe/
│   │               └── +server.ts     # POST /api/webhooks/stripe
│   │
│   ├── app.html                       # HTML template
│   ├── app.css                        # Global styles
│   └── hooks.server.ts                # SvelteKit hooks
│
├── static/                            # Static assets
│   ├── favicon.png
│   ├── og-image.png
│   └── images/
│
├── drizzle/                           # Drizzle migrations
│   └── migrations/
│
├── .env                               # Environment variables
├── .env.example                       # Example env file
├── .gitignore
├── package.json
├── bun.lockb
├── tsconfig.json
├── svelte.config.js
├── vite.config.ts
├── tailwind.config.ts
├── drizzle.config.ts
├── components.json                    # Shadcn config
└── README.md
```

**Key Principles:**

- ✅ Flat structure (avoid nesting >3 levels)
- ✅ Group by feature (product/, cart/, admin/)
- ✅ Clear separation (server/ vs client)
- ✅ Shadcn components in ui/ folder
- ✅ API routes in routes/api/

---

### 1.5 Environment Variables

```env
# .env (local development)

# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://user:password@host/database"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key-min-32-chars"
BETTER_AUTH_URL="http://localhost:5173"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Resend (Email)
RESEND_API_KEY="re_..."

# Cloudinary (Images)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Public variables (accessible in browser)
PUBLIC_SITE_URL="http://localhost:5173"
PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
```

---

## 🏗️ Stage 2: Building

### Week 1: Foundation

#### Day 1-2: Project Setup

**Tasks:**

- [ ] Create SvelteKit project
- [ ] Install all dependencies
- [ ] Set up PostgreSQL database (Neon/Supabase)
- [ ] Configure Drizzle ORM
- [ ] Create database schema
- [ ] Run initial migration
- [ ] Set up environment variables
- [ ] Initialize Shadcn-svelte
- [ ] Configure Tailwind CSS

**Commands:**

```bash
# 1. Create project
npm create svelte@latest my-ecommerce
cd my-ecommerce

# 2. Install dependencies (use the complete command from earlier)
bun add gsap @formkit/auto-animate lucide-svelte drizzle-orm postgres zod sveltekit-superforms better-auth stripe @stripe/stripe-js resend cloudinary date-fns recharts

bun add -D drizzle-kit shadcn-svelte @types/node

# 3. Initialize Shadcn
npx shadcn-svelte@latest init

# 4. Create database schema file
# (Copy schema from section 1.3)

# 5. Generate and run migrations
bunx drizzle-kit generate
bunx drizzle-kit push

# 6. Test database connection
bun run dev
```

**Deliverables:**

- ✅ Working SvelteKit app
- ✅ Database connected
- ✅ All libraries installed
- ✅ Folder structure created

---

#### Day 3-4: Authentication System

**Tasks:**

- [ ] Set up Better Auth
- [ ] Create sign up page
- [ ] Create sign in page
- [ ] Create auth stores
- [ ] Implement sign out
- [ ] Add auth guards for protected routes

**Files to Create:**

```
src/lib/server/auth.ts
src/lib/stores/auth.ts
src/routes/auth/signin/+page.svelte
src/routes/auth/signup/+page.svelte
src/routes/auth/[...all]/+server.ts
```

**Features:**

- Email/password authentication
- Session management
- Remember me checkbox (optional)
- Form validation with Zod
- Error handling
- Loading states

**Test:**

- Sign up new user
- Sign in
- Sign out
- Try accessing protected routes

---

#### Day 5-7: Product System

**Tasks:**

- [ ] Create product schema
- [ ] Build products listing page
- [ ] Build single product page
- [ ] Add product filters
- [ ] Add search functionality
- [ ] Create admin: add product page
- [ ] Create admin: edit product page
- [ ] Integrate Cloudinary for images

**Pages:**

```
/products                    # List all products
/products/[id]              # Single product
/admin/products             # Manage products
/admin/products/new         # Add product
/admin/products/[id]/edit   # Edit product
```

**Features:**

- Product grid with cards
- Image gallery
- Price display
- Stock indicator
- Search bar
- Category filters
- Price filters
- Sort options
- Pagination
- Admin CRUD operations
- Image upload (Cloudinary)

**GSAP Animations:**

```javascript
// Product card hover
gsap.to(card, {
  y: -10,
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  duration: 0.3
});

// Products stagger on page load
gsap.from(".product-card", {
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.6
});
```

**Test:**

- Browse products
- Search products
- Filter by category
- View single product
- Admin: Add new product with image
- Admin: Edit product
- Admin: Delete product

---

### Week 2: Core Features

#### Day 8-10: Shopping Cart

**Tasks:**

- [ ] Create cart store (Svelte store)
- [ ] Build cart sidebar (Shadcn Sheet)
- [ ] Build cart page
- [ ] Implement add to cart
- [ ] Implement remove from cart
- [ ] Implement update quantity
- [ ] Add cart badge (item count)
- [ ] Persist cart (localStorage or database)

**Files:**

```
src/lib/stores/cart.ts
src/lib/components/cart/CartSidebar.svelte
src/lib/components/cart/CartItem.svelte
src/routes/cart/+page.svelte
src/routes/api/cart/+server.ts
```

**Features:**

- Add to cart button
- Cart sidebar (slides in from right)
- Update quantities
- Remove items
- Calculate subtotal
- Show item count badge
- Empty cart state
- Continue shopping link

**GSAP Animations:**

```javascript
// Cart sidebar slide in
gsap.from(cartSidebar, {
  x: "100%",
  duration: 0.4,
  ease: "power3.out"
});

// Add to cart animation (fly to cart icon)
gsap.timeline()
  .to(productImage, {
    scale: 0.5,
    x: cartIconX,
    y: cartIconY,
    duration: 0.6
  })
  .to(cartIcon, { scale: 1.2, duration: 0.2 })
  .to(cartIcon, { scale: 1, duration: 0.2 });
```

**AutoAnimate:**

```svelte
<script>
  import { autoAnimate } from '@formkit/auto-animate/svelte';
</script>

<div use:autoAnimate>
  {#each cartItems as item}
    <CartItem {item} />
  {/each}
</div>
```

**Test:**

- Add item to cart
- View cart sidebar
- Update quantity
- Remove item
- View cart page
- Empty cart works

---

#### Day 11-12: Checkout & Payments

**Tasks:**

- [ ] Create checkout page
- [ ] Build shipping form (with validation)
- [ ] Integrate Stripe payment
- [ ] Create order on successful payment
- [ ] Clear cart after order
- [ ] Redirect to success page
- [ ] Set up Stripe webhook

**Files:**

```
src/routes/checkout/+page.svelte
src/routes/order-success/+page.svelte
src/routes/api/checkout/+server.ts
src/routes/api/webhooks/stripe/+server.ts
src/lib/server/stripe.ts
```

**Features:**

- Shipping address form
- Form validation (Zod + Superforms)
- Order summary
- Stripe payment element
- Payment processing
- Loading states
- Error handling
- Order confirmation
- Guest checkout support

**Stripe Integration:**

```typescript
// Create payment intent
const paymentIntent = await stripe.paymentIntents.create({
  amount: Math.round(total * 100),
  currency: 'usd',
  metadata: {
    orderId: order.id.toString()
  }
});
```

**Webhook Setup:**

```bash
# Test webhooks locally
stripe listen --forward-to localhost:5173/api/webhooks/stripe
```

**Test:**

- Add items to cart
- Proceed to checkout
- Fill shipping form
- Enter test card: 4242 4242 4242 4242
- Complete payment
- Verify order created
- Check email received
- Cart cleared

---

#### Day 13-14: Order Tracking & Emails

**Tasks:**

- [ ] Create order tracking page
- [ ] Generate unique access tokens
- [ ] Build email templates (Resend)
- [ ] Send order confirmation email
- [ ] Add tracking link to email
- [ ] Create user order history page
- [ ] Link guest orders to accounts

**Files:**

```
src/routes/track/[token]/+page.svelte
src/routes/track/[token]/+page.server.ts
src/routes/account/+page.svelte
src/lib/server/email.ts
```

**Features:**

- Order tracking page (no login required)
- Order status timeline
- Shipping address display
- Order items list
- Beautiful email template (HTML)
- Tracking link in email
- "Create account" CTA for guests
- Order history for logged-in users

**Email Template Structure:**

```html
- Header with logo
- "Order Confirmed" message
- Order number & date
- Items table
- Total breakdown
- Shipping address
- Track order button (with access token)
- Create account CTA (if guest)
- Footer with support info
```

**Test:**

- Complete an order
- Check email inbox
- Click tracking link
- View order status
- Create account from guest order
- Verify order appears in account

---

### Week 3: Admin & Polish

#### Day 15-17: Admin Dashboard

**Tasks:**

- [ ] Create admin layout with sidebar
- [ ] Build dashboard with stats
- [ ] Add revenue chart (Recharts)
- [ ] Create products management page
- [ ] Create orders management page
- [ ] Add product search
- [ ] Add order filters
- [ ] Update order status feature

**Files:**

```
src/routes/admin/+layout.svelte
src/routes/admin/+layout.server.ts
src/routes/admin/+page.svelte
src/routes/admin/products/+page.svelte
src/routes/admin/orders/+page.svelte
src/lib/components/layout/AdminSidebar.svelte
```

**Dashboard Stats:**

- Total revenue card
- Total orders card
- Low stock alerts card
- Recent orders table
- Revenue chart (last 30 days)
- Top selling products

**Admin Features:**

- Product table with search
- Edit/delete product buttons
- Add new product
- Order table with filters
- Update order status dropdown
- View order details modal
- Export data (optional)

**Admin Protection:**

```typescript
// src/routes/admin/+layout.server.ts
export const load = async (event) => {
  const session = await getSession(event);
  
  if (!session?.user) {
    throw redirect(303, '/auth/signin');
  }
  
  if (session.user.role !== 'admin') {
    throw redirect(303, '/');
  }
  
  return { user: session.user };
};
```

**Test:**

- Access /admin as non-admin (should redirect)
- Sign in as admin
- View dashboard stats
- Search products
- Edit product
- View orders
- Update order status
- Check low stock alerts

---

#### Day 18-19: User Account & Polish

**Tasks:**

- [ ] Build user account page
- [ ] Show order history
- [ ] Add profile edit form
- [ ] Create loading skeletons (Shadcn)
- [ ] Add error boundaries
- [ ] Implement toast notifications
- [ ] Add empty states
- [ ] Mobile responsive testing

**Files:**

```
src/routes/account/+page.svelte
src/routes/account/+page.server.ts
src/lib/components/shared/LoadingSkeleton.svelte
src/lib/components/shared/EmptyState.svelte
```

**Account Features:**

- Order history table
- Order status badges
- View order details
- Profile information
- Edit profile form
- Change password (optional)
- Sign out button

**Polish Features:**

- Loading skeletons everywhere
- Toast notifications (Shadcn)
- Error messages
- Empty states
- 404 page
- 500 error page
- Loading indicators
- Form validation errors

**Responsive Testing:**

- Test on mobile (375px)
- Test on tablet (768px)
- Test on desktop (1440px)
- Fix any layout issues

**Test:**

- View account page
- See order history
- Edit profile
- View order details
- Test all loading states
- Test error handling
- Test on different screen sizes

---

#### Day 20-21: Final Polish & Bug Fixes

**Tasks:**

- [ ] Add GSAP animations throughout
- [ ] Optimize images
- [ ] Add meta tags (SEO)
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Improve page speed
- [ ] Fix any bugs
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Final QA testing

**GSAP Animations to Add:**

**Hero Section:**

```javascript
gsap.from('.hero-title', {
  opacity: 0,
  y: 30,
  duration: 0.8
});

gsap.from('.hero-cta', {
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  delay: 0.4
});
```

**Scroll Animations:**

```javascript
gsap.utils.toArray('.fade-in-section').forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%'
    }
  });
});
```

**Page Transitions:**

```javascript
// Add to +layout.svelte
import { beforeNavigate, afterNavigate } from '$app/navigation';

beforeNavigate(() => {
  gsap.to('main', { opacity: 0, duration: 0.2 });
});

afterNavigate(() => {
  gsap.from('main', { opacity: 0, duration: 0.3 });
});
```

**SEO Checklist:**

- [ ] Meta titles (50-60 chars)
- [ ] Meta descriptions (150-160 chars)
- [ ] OG images
- [ ] Twitter cards
- [ ] Canonical URLs
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml
- [ ] Robots.txt

**Performance Optimizations:**

- [ ] Lazy load images
- [ ] Code splitting
- [ ] Compress images
- [ ] Minify CSS/JS
- [ ] Enable caching
- [ ] Use CDN (Cloudinary)

**Accessibility:**

- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] ARIA labels
- [ ] Color contrast
- [ ] Focus states
- [ ] Alt text on images

**Test:**

- Run Lighthouse audit
- Check Core Web Vitals
- Test with screen reader
- Test keyboard navigation
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile testing (iOS, Android)

---

## 🧪 Stage 3: Testing

### 3.1 Manual Testing Checklist

#### Customer Flow

```
□ Home Page
  □ Hero section loads
  □ Featured products display
  □ Links work
  □ Responsive on mobile

□ Products Page
  □ Products load
  □ Search works
  □ Filters work
  □ Sort options work
  □ Pagination works
  □ Click product → single page

□ Single Product Page
  □ Images display
  □ Add to cart works
  □ Quantity selector works
  □ Reviews show (if added)
  □ Related products display

□ Shopping Cart
  □ Items show correctly
  □ Update quantity works
  □ Remove item works
  □ Subtotal calculates correctly
  □ Proceed to checkout works

□ Checkout
  □ Form validation works
  □ Stripe payment loads
  □ Test payment succeeds (4242 4242 4242 4242)
  □ Redirects to success page
  □ Email received

□ Order Tracking
  □ Can access with token
  □ Order details correct
  □ Status shows
  □ Guest can create account

□ User Account
  □ Sign up works
  □ Sign in works
  □ Order history shows
  □ Profile editable
  □ Sign out works
```

#### Admin Flow

```
□ Admin Access
  □ Non-admin can't access /admin
  □ Admin can access dashboard

□ Dashboard
  □ Stats display correctly
  □ Chart loads
  □ Recent orders show

□ Products Management
  □ Products list loads
  □ Search works
  □ Add new product works
  □ Upload image works (Cloudinary)
  □ Edit product works
  □ Delete product works

□ Orders Management
  □ Orders list loads
  □ Filter by status works
  □ Update status works
  □ View order details works
```

#### Edge Cases

```
□ Empty cart checkout (should prevent)
□ Out of stock product (should show message)
□ Invalid coupon code (should show error)
□ Duplicate email signup (should show error)
□ Wrong password (should show error)
□ Guest order tracking with wrong token (404)
□ Very long product names (should truncate)
□ Very large cart quantities (should validate)
□ Simultaneous admin edits (should handle)
```

#### Performance

```
□ Page loads < 3 seconds
□ Images lazy load
□ No console errors
□ No layout shift
□ Smooth animations
□ Mobile performance good
```

#### Browser Testing

```
□ Chrome (latest)
□ Firefox (latest)
□ Safari (latest)
□ Edge (latest)
□ Mobile Safari (iOS)
□ Mobile Chrome (Android)
```

---

### 3.2 Testing Tools

**Lighthouse Audit:**

```bash
# Run in Chrome DevTools
# Check:
- Performance (aim for 90+)
- Accessibility (aim for 100)
- Best Practices (aim for 100)
- SEO (aim for 100)
```

**Manual Testing:**

```bash
# Test cards (Stripe test mode)
4242 4242 4242 4242  # Success
4000 0000 0000 9995  # Declined
4000 0025 0000 3155  # Requires authentication
```

**Responsive Testing:**

```
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1440px)
- Large Desktop (1920px)
```

---

### 3.3 Bug Tracking Template

```markdown
## Bug Report

**Title:** [Brief description]

**Priority:** High / Medium / Low

**Steps to Reproduce:**
1. Go to...
2. Click on...
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Screenshots:**
[Add screenshot]

**Environment:**
- Browser: Chrome 120
- OS: macOS
- Device: Desktop

**Status:** Open / In Progress / Fixed
```

---

## 🚀 Stage 4: Deployment

### 4.1 Pre-Deployment Checklist

```
□ Code Quality
  □ No console.logs in production
  □ Remove test data
  □ All TODO comments resolved
  □ Code formatted
  □ TypeScript errors fixed

□ Environment Variables
  □ All production keys set
  □ Test keys removed
  □ Secrets not in code

□ Database
  □ Production database created
  □ Migrations run
  □ First admin user created
  □ Test data removed

□ Third-Party Services
  □ Stripe in live mode
  □ Resend configured
  □ Cloudinary configured
  □ Better Auth URL updated

□ SEO
  □ Sitemap generated
  □ Robots.txt created
  □ Meta tags added
  □ OG images created

□ Performance
  □ Images optimized
  □ Code minified
  □ Lighthouse score > 90
```

---

### 4.2 Deployment Steps (Vercel)

#### Step 1: Prepare Repository

```bash
# 1. Create .gitignore
echo "node_modules
.env
.env.local
.svelte-kit
build
.vercel
.DS_Store
*.log" > .gitignore

# 2. Initialize Git
git init
git add .
git commit -m "Initial commit"

# 3. Create GitHub repo and push
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

#### Step 2: Set Up Production Database

**Using Neon:**

```bash
# 1. Go to https://neon.tech
# 2. Create new project
# 3. Copy connection string
# 4. Run migrations in production

# Set DATABASE_URL to production
DATABASE_URL="postgresql://user:pass@host.neon.tech/db"

# Run migrations
bunx drizzle-kit push
```

**Create First Admin:**

```sql
-- Run this in Neon SQL Editor
UPDATE users 
SET role = 'admin' 
WHERE email = 'youremail@example.com';
```

#### Step 3: Deploy to Vercel

```bash
# 1. Install Vercel CLI
bun add -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: your-ecommerce
# - Directory: ./
# - Override settings? No

# 4. Set environment variables
vercel env add DATABASE_URL production
vercel env add STRIPE_SECRET_KEY production
vercel env add RESEND_API_KEY production
# ... add all env vars

# 5. Deploy to production
vercel --prod
```

#### Step 4: Configure Stripe Webhooks

```bash
# 1. Go to Stripe Dashboard
# 2. Developers → Webhooks
# 3. Add endpoint: https://yourdomain.com/api/webhooks/stripe
# 4. Select events:
#    - payment_intent.succeeded
#    - payment_intent.payment_failed
# 5. Copy webhook secret
# 6. Add to Vercel env vars:
vercel env add STRIPE_WEBHOOK_SECRET production
```

#### Step 5: Custom Domain (Optional)

```bash
# 1. In Vercel dashboard
# 2. Settings → Domains
# 3. Add your domain
# 4. Update DNS records at your registrar
# 5. Wait for SSL certificate
```

---

### 4.3 Post-Deployment

```
□ Test Production Site
  □ Visit live URL
  □ Complete test purchase
  □ Check email delivery
  □ Test admin panel
  □ Test order tracking

□ Monitoring Setup
  □ Vercel Analytics enabled
  □ Google Analytics installed
  □ Error tracking (Sentry - optional)
  □ Uptime monitoring (BetterUptime - optional)

□ Submit to Search Engines
  □ Google Search Console
  □ Bing Webmaster Tools
  □ Submit sitemap

□ Final Checks
  □ All features working
  □ Mobile responsive
  □ Fast page loads
  □ No console errors
  □ SSL certificate active
```

---

### 4.4 Environment Variables Reference

**Production `.env` file structure:**

```env
# Database
DATABASE_URL="postgresql://..."

# Auth
BETTER_AUTH_SECRET="min-32-char-secret"
BETTER_AUTH_URL="https://yourdomain.com"

# Stripe
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email
RESEND_API_KEY="re_..."

# Images
CLOUDINARY_CLOUD_NAME="your-cloud"
CLOUDINARY_API_KEY="your-key"
CLOUDINARY_API_SECRET="your-secret"

# Public (accessible in browser)
PUBLIC_SITE_URL="https://yourdomain.com"
PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud"
```

---

## 🎨 Design Resources Quick Reference

### Figma Templates

- Search: "ecommerce template" in Figma Community
- Top picks: Modern ecommerce, Online shop, Product dashboard
- <https://www.figma.com/community>

### AI Tools

- **v0.dev**: Text to UI - <https://v0.dev>
- **Galileo AI**: AI design generator - <https://usegalileo.ai>
- **Uizard**: Screenshot to design - <https://uizard.io>

### Component Libraries

- **Tailwind UI**: <https://tailwindui.com> (has free components)
- **Flowbite**: <https://flowbite.com>
- **HyperUI**: <https://www.hyperui.dev>

### Inspiration

- **Dribbble**: <https://dribbble.com/search/ecommerce>
- **Behance**: <https://www.behance.net>
- **Mobbin**: <https://mobbin.com>

### Free Resources

- **Icons**: Lucide (already installed), Heroicons
- **Images**: Unsplash, Pexels, Pixabay
- **Fonts**: Google Fonts - Inter, Poppins, DM Sans
- **Colors**: Coolors.co

---

## 🔧 Troubleshooting

### Common Issues

**Database Connection Failed**

```bash
# Check connection string
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL

# Regenerate migrations
bunx drizzle-kit generate
bunx drizzle-kit push
```

**Stripe Webhook Not Working**

```bash
# Check webhook URL is correct
# Verify webhook secret matches
# Check Vercel logs for errors
vercel logs

# Test locally first
stripe listen --forward-to localhost:5173/api/webhooks/stripe
```

**Images Not Uploading**

```bash
# Check Cloudinary credentials
# Verify API keys are correct
# Check file size limits
# Test upload in Cloudinary dashboard
```

**Build Failed on Vercel**

```bash
# Check build logs
vercel logs --build

# Common fixes:
# - Update TypeScript
# - Fix type errors
# - Check dependencies installed
# - Verify environment variables set
```

**Emails Not Sending**

```bash
# Check Resend API key
# Verify "from" email domain
# Check spam folder
# Test in Resend dashboard
```

---

## 📝 Development Best Practices

### Code Organization

```typescript
// ✅ Good: Clear, organized
export async function createOrder(data: OrderData) {
  const validated = orderSchema.parse(data);
  const order = await db.insert(orders).values(validated);
  await sendEmail(order);
  return order;
}

// ❌ Bad: Too much in one function
export async function checkout(data: any) {
  // 50 lines of code here...
}
```

### Error Handling

```typescript
// ✅ Good: User-friendly messages
try {
  await createOrder(data);
} catch (error) {
  if (error instanceof ZodError) {
    return { error: 'Invalid form data' };
  }
  return { error: 'Something went wrong. Please try again.' };
}

// ❌ Bad: Generic errors
} catch (error) {
  return { error: error.message };
}
```

### Performance

```svelte
<!-- ✅ Good: Lazy load images -->
<img loading="lazy" src={product.image} alt={product.name} />

<!-- ✅ Good: Use key in loops -->
{#each products as product (product.id)}
  <ProductCard {product} />
{/each}

<!-- ❌ Bad: Load all images immediately -->
<img src={product.image} alt={product.name} />
```

### TypeScript

```typescript
// ✅ Good: Proper types
interface Product {
  id: number;
  name: string;
  price: number;
}

// ❌ Bad: Using any
const product: any = await getProduct();
```

---

## 🎯 Success Metrics

### Track These Metrics

**Week 1:**

- [ ] Project setup complete
- [ ] Auth working
- [ ] Products displaying

**Week 2:**

- [ ] Cart functional
- [ ] Checkout complete
- [ ] First test order

**Week 3:**

- [ ] Admin panel working
- [ ] All features complete
- [ ] Mobile responsive

**Week 4:**

- [ ] Deployed to production
- [ ] First real order
- [ ] Client approval

---

## 📚 Additional Resources

### Documentation

- **SvelteKit**: <https://kit.svelte.dev/docs>
- **Drizzle ORM**: <https://orm.drizzle.team/docs>
- **Stripe**: <https://stripe.com/docs>
- **Tailwind CSS**: <https://tailwindcss.com/docs>
- **GSAP**: <https://greensock.com/docs/>

### Communities

- **Svelte Discord**: <https://svelte.dev/chat>
- **Svelte Reddit**: r/sveltejs
- **Stack Overflow**: Tag: sveltekit

### Learning

- **SvelteKit Course**: <https://learn.svelte.dev>
- **Drizzle Tutorial**: <https://orm.drizzle.team/learn>
- **Stripe Integration**: <https://stripe.com/docs/stripe-js>

---

## ✅ Final Checklist

### Before Launch

```
□ All features tested
□ Mobile responsive
□ Fast page loads (Lighthouse > 90)
□ SEO optimized
□ Error tracking set up
□ Analytics installed
□ Domain configured
□ SSL certificate active
□ Test purchase completed
□ Email notifications working
□ Admin can manage products
□ Admin can manage orders
□ Backup strategy in place
□ Documentation written
□ Client trained on admin panel
□ Launch date set
```

### Day of Launch

```
□ Final production test
□ Monitor error logs
□ Watch for first order
□ Respond to issues quickly
□ Post on social media
□ Celebrate! 🎉
```

---

## 🎉 You Got This

Remember:

- **Take breaks** - Don't burn out
- **One feature at a time** - Don't overwhelm yourself
- **Test as you go** - Catch bugs early
- **Ask for help** - It's okay to not know everything
- **Celebrate wins** - Every feature completed is progress

**Timeline is flexible!** If something takes longer, that's normal. Quality > Speed.

---

**Good luck with your build! You're going to create something amazing! 🚀**

---

*Last updated: October 29, 2025*
*Version: 1.0*
