# 武印视界 Vision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-end, immersive official website for Wuyin Vision with 5 core modules using a Black & Red oriental martial arts aesthetic.

**Architecture:** A module-based React application with a centralized design system. Each page utilizes immersive video backgrounds and interactive SVG/Framer-Motion components for a cinematic feel.

**Tech Stack:** React 19, Tailwind CSS v4, Framer Motion, React Router 7, Lucide React.

---

### Task 1: Design System & Routing Setup

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.tsx`
- Create: `src/lib/constants.ts`

- [ ] **Step 1: Configure Tailwind CSS v4 Theme and global types**

```css
@import "tailwindcss";

@theme {
  --color-brand-black: #050505;
  --color-brand-red: #e61c23;
  --color-brand-gold: #d4af37;
  --font-display: "Ma Shan Zheng", cursive;
  --font-sans: "Inter", system-ui, sans-serif;
}

:root {
  background-color: var(--color-brand-black);
  color: white;
  font-family: var(--font-sans);
}

.text-glow-red {
  text-shadow: 0 0 10px rgba(230, 28, 35, 0.5);
}

.bg-red-glow {
  box-shadow: 0 0 20px rgba(230, 28, 35, 0.3);
}
```

- [ ] **Step 2: Define Routes and Project Constants**

```typescript
// src/lib/constants.ts
export const NAV_LINKS = [
  { name: '引力核', path: '/' },
  { name: '武印宇宙', path: '/universe' },
  { name: '武印视界', path: '/sight' },
  { name: '武印阁', path: '/pavilion' },
  { name: '合作入口', path: '/partners' }
];

// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Universe from './pages/Universe';
import Sight from './pages/Sight';
import Pavilion from './pages/Pavilion';
import Partners from './pages/Partners';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universe" element={<Universe />} />
          <Route path="/sight" element={<Sight />} />
          <Route path="/pavilion" element={<Pavilion />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/index.css src/App.tsx src/lib/constants.ts
git commit -m "feat: design system and routing foundation"
```

---

### Task 2: Home Page - Hero & Declaration

**Files:**
- Create: `src/pages/Home.tsx`
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/Declaration.tsx`

- [ ] **Step 1: Build Hero Component with Video Background**

```tsx
// src/components/home/Hero.tsx
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fallback Image */}
      <img src="/src/images/首页/unnamed.png" className="absolute w-full h-full object-cover opacity-60" />
      {/* Assuming a video might be added later, or using a subtle zoom animation on the image */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-bold tracking-tighter text-glow-red uppercase"
        >
          武印视界
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-lg md:text-2xl tracking-[0.5em] text-gray-300 font-light"
        >
          东 方 武 道 沉 浸 式 盛 典
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.2 }}
           className="mt-12 space-x-6"
        >
          <button className="px-8 py-3 bg-brand-red text-white hover:bg-white hover:text-brand-red transition-all duration-300 rounded-none font-bold uppercase tracking-widest">
             预约观赛
          </button>
          <button className="px-8 py-3 border border-white hover:border-brand-red hover:text-brand-red transition-all duration-300 rounded-none font-bold uppercase tracking-widest">
             成为伙伴
          </button>
        </motion.div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Home.tsx src/components/home/Hero.tsx src/components/home/Declaration.tsx
git commit -m "feat: home hero and declaration sections"
```

---

### Task 3: Home Page - Hexagon Hub & Global Nav

**Files:**
- Create: `src/components/common/Navbar.tsx`
- Create: `src/components/home/HexagonHub.tsx`

- [ ] **Step 1: Implement Hexagon Matrix Interaction**
(Logic for 6 hex tiles arranged in a grid with hover glow effects)

- [ ] **Step 2: Commit**

---

### Task 4: Universe Module - Interactive Lore

**Files:**
- Create: `src/pages/Universe.tsx`
- Create: `src/components/universe/CharacterCard.tsx`

- [ ] **Step 1: Build Image-based Interactive "Map" with Hotspots**

- [ ] **Step 2: Commit**

---

### Task 5: Sight Module - Event Showcase

**Files:**
- Create: `src/pages/Sight.tsx`
- Create: `src/components/sight/CombatDuel.tsx`

- [ ] **Step 1: Build the "Mecha vs Traditional" split-screen view**

- [ ] **Step 2: Commit**

---

### Task 6: Pavilion Module - Ecosystem Diagram

**Files:**
- Create: `src/pages/Pavilion.tsx`
- Create: `src/components/pavilion/SynergyMap.tsx`

- [ ] **Step 1: Create Interactive SVG Diagram for the 6 entity companies**

- [ ] **Step 2: Commit**

---

### Task 7: Cooperation Portal & Polish

**Files:**
- Create: `src/pages/Partners.tsx`
- Create: `src/components/partners/ContactForm.tsx`

- [ ] **Step 1: Build the multi-category application form**

- [ ] **Step 2: Final animations and responsiveness check**

- [ ] **Step 3: Commit**
