# Gabriel Blum - Portfolio Website

Personal portfolio website for Gabriel Blum Santos — Full Stack Developer. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features a Matrix-inspired dark theme with animated background, smooth scroll animations, and a project detail system integrated with the GitHub API.

**Live demo:** https://portifolio-orpin-eight.vercel.app/

---

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, tailwind-merge, tailwindcss-animate |
| Animations | Framer Motion |
| UI Primitives | Radix UI (full suite via shadcn/ui) |
| Icons | Lucide React, React Icons, Phosphor React |
| Fonts | Inter (Google Fonts via next/font) |

---

## Project Structure

```
app/
  layout.tsx               # Root layout — metadata, Inter font, lang="pt-BR"
  page.tsx                 # Home page — composes all sections
  api/route.ts             # GET /api?owner=&repo= — proxies GitHub commit count
  project/
    [slug]/page.tsx        # Dynamic project detail page
    ProjectHeader.tsx      # Back-button header for detail page
    ProjectMeta.tsx        # Title, status badge, category, date
    ProjectDescription.tsx # Long description block
    ProjectFeatures.tsx    # Bullet list of features
    ProjectChallenges.tsx  # Bullet list of challenges
    ProjectTechnologies.tsx# Technology cards with gradient colors and level
    ProjectInfo.tsx        # GitHub link, demo link, commit count

components/
  Navigation.tsx           # Fixed top nav, scroll-aware background, mobile menu
  MatrixBackground.tsx     # Full-screen Canvas animation (Matrix rain)
  ThreeDName.tsx           # 3D parallax name heading with red/blue chromatic shift
  TechSlider.tsx           # Interactive 3D carousel of technologies
  theme-provider.tsx       # next-themes wrapper
  sections/
    HeroSection.tsx        # Full-height hero: ThreeDName, TechSlider, avatar, socials
    AboutSection.tsx       # "Sobre Mim" — education card + 4 feature cards
    SkillsSection.tsx      # Skills grid by category (Frontend / Backend / Tools)
    ProjectsSection.tsx    # Project cards grid, links to /project/[slug]
    ContactSection.tsx     # Contact info + contact form (UI only, no backend yet)
  ui/                      # shadcn/ui component library (50+ components)

data/
  projectData.ts           # Static project registry (slug → project data)

services/
  getCommitCount.ts        # Client helper that calls /api to get commit count

lib/
  utils.ts                 # cn() helper (clsx + tailwind-merge)

hooks/
  use-mobile.tsx           # useIsMobile hook
  use-toast.ts             # Toast state hook

styles/
  globals.css              # Tailwind base + CSS custom properties (color tokens)
```

---

## Pages

### `/` — Home
Single-page application layout. Renders all sections in order:
1. `MatrixBackground` — fixed canvas layer behind everything
2. `Navigation` — fixed top nav
3. `HeroSection` → `AboutSection` → `SkillsSection` → `ProjectsSection` → `ContactSection`

Uses `useScroll` + `useTransform` from Framer Motion for parallax-ready scroll tracking (background parallax layer is currently commented out).

### `/project/[slug]` — Project Detail
Dynamic route powered by the `projectsData` registry. On mount, fetches the GitHub commit count via the internal API route and displays it in `ProjectInfo`. Renders a full-detail layout:

- Left column (2/3): Description → Features → Challenges
- Right column (1/3): Technologies → Project Info (links, commit count)

---

## Key Components

### `MatrixBackground`
Canvas-based Matrix rain animation. Renders green (`#0F4`) falling characters with occasional red (`#F04`) flashes. Handles window resize with debounce (120 ms), preserving existing frame data and dynamically expanding the column buffer to 2× the visible width to avoid gaps on resize.

### `ThreeDName`
Displays the developer name as a large heading with a 3D chromatic aberration effect. Accepts mouse position from a parent (external mode) or tracks it internally. Two shadow layers (red offset, blue offset) move opposite to the cursor, simulating depth. Includes a blurred reflection below the text.

### `TechSlider`
A 3D perspective carousel of 6 technologies (React, TypeScript, Python, Rust, Next.js, Node.js). Shows 5 items at a time with scale, opacity, rotateY, and blur falloff from center. Auto-advances every 3 s; pauses for 5 s after user interaction. Clicking an off-center icon rotates it to the center.

### `Navigation`
Fixed top navigation bar. Becomes opaque (`bg-black/90 backdrop-blur`) after scrolling 50 px. Includes a hamburger mobile menu.

### `ProjectsSection`
Reads from `projectsData`, maps slugs to cards. Each card links to `/project/[slug]` via a full-card overlay `<Link>`. GitHub and demo links sit above the overlay via `z-20` and `e.stopPropagation()`.

### `ContactSection`
Contact form with name/email/message fields. Submission is handled client-side only (no backend integration yet). Shows a temporary "em desenvolvimento" notice after submit.

---

## API

### `GET /api`
Proxies a request to the GitHub API to count commits for a repository.

**Query params:** `owner`, `repo`

**How it works:** Fetches the last page of commits (`per_page=1`) and parses the `Link` header to extract the total page count, which equals the total commit count.

**Auth:** Uses `GITHUB_TOKEN` environment variable (Bearer token).

**Returns:** `{ count: number }`

---

## Data Layer

### `data/projectData.ts`
Single source of truth for all portfolio projects. Each entry is keyed by slug and contains:

| Field | Type | Description |
|---|---|---|
| `title` | string | Display name |
| `description` | string | Short summary (used in cards) |
| `longDescription` | string | Markdown-like full description |
| `technologies` | `{ name, color, level }[]` | Tech stack with gradient color class and proficiency level |
| `github` | string \| null | GitHub repository URL |
| `demo` | string \| null | Live demo URL |
| `status` | string | "Completed" or "In Development" |
| `date` | string | Year |
| `category` | string | e.g. "Web Development", "AI/Computer Vision" |
| `features` | string[] | Bullet points |
| `challenges` | string[] | Bullet points |

**Current projects:**
- `calculadora-rust` — CLI calculator in Rust
- `hand-tracking` — Real-time hand tracking with OpenCV + MediaPipe
- `portfolio-website` — This portfolio site
- `banco-cpp` — C++ banking system with SQLite
- `identify-person` — Person tracking with YOLOv5 + Kalman Filter

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | Yes (for commit count) | GitHub personal access token |

Create a `.env.local` file at the project root:

```
GITHUB_TOKEN=your_token_here
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

---

## UI Component Library (`components/ui/`)

This project uses the full [shadcn/ui](https://ui.shadcn.com/) suite built on Radix UI primitives. Available components include: Accordion, Alert, Avatar, Badge, Button, Calendar, Card, Carousel, Chart, Checkbox, Command, Dialog, Drawer, Dropdown Menu, Form, Hover Card, Input, Label, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable Panels, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (toast), Switch, Table, Tabs, Textarea, Toast, Toggle, Tooltip, and more.

These are available for use across the app but most are not used in the current portfolio sections (reserved for future features).
