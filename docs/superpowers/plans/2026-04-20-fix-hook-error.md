# Fix Invalid Hook Call and TS Errors Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve the runtime "Invalid hook call" error in LocaleProvider and fix TypeScript errors in HeroSection.

**Architecture:** 
1. Update React imports to use namespace imports where named imports might be failing due to bundling issues.
2. Fix Framer Motion 12 type errors by casting ease arrays to `any` or the correct `BezierDefinition` type.
3. Clean up unused imports and variables identified during the build.

**Tech Stack:** React 19, Framer Motion 12, Vite 6, TypeScript 5.

---

### Task 1: Fix LocaleProvider Runtime Error

**Files:**
- Modify: `src/i18n/LocaleProvider.tsx`

- [ ] **Step 1: Update imports to use React namespace**
Change named imports from "react" to `import * as React from "react"` to ensure reliable access to hooks in React 19/Vite 6 environments.

```typescript
import * as React from "react";
// ...
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(() => readStoredLocale() ?? detectBrowserLocale());
  // ...
}
```

- [ ] **Step 2: Verify named exports consistency**
Ensure all hooks use `React.` prefix.

### Task 2: Fix HeroSection TS Errors

**Files:**
- Modify: `src/sections/HeroSection.tsx`

- [ ] **Step 1: Fix transition ease typing**
Cast the cubic bezier array to `any` to satisfy the stricter Framer Motion 12 types.

```typescript
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9] as any,
      },
    },
  };
```

### Task 3: Cleanup Unused Code

**Files:**
- Modify: `src/components/partners/PartnerLogos.tsx`
- Modify: `src/components/universe/SequenceMap.tsx`
- Modify: `src/pages/NarrativePage.tsx`
- Modify: `src/pages/PartnershipPage.tsx`
- Modify: `src/pages/PavilionPage.tsx`
- Modify: `src/pages/TimelinePage.tsx`
- Modify: `src/sections/EcosystemMatrixSection.tsx`

- [ ] **Step 1: Remove unused imports and variables**
Go through the list of TS6133 errors from the build log and remove the offending lines.

### Task 4: Verification

- [ ] **Step 1: Run build again**
Run: `npm run build`
Expected: SUCCESS with zero errors.

- [ ] **Step 2: Verify site loads**
Check the site in the browser (if possible) or verify that the "Invalid hook call" is gone from logs.
