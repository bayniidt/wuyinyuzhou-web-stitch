# Design System: The Technologic Ink Path

## 1. Overview & Creative North Star: "The Digital Ronin"
This design system is built upon the tension between two worlds: the fluid, meditative philosophy of traditional ink wash painting (Zen) and the rigid, high-performance precision of futuristic mecha-robotics (Cyberpunk). 

**The Creative North Star: "The Digital Ronin"**
We do not design static screens; we design "Digital Scrolls" that have been upgraded with holographic overlays. The experience should feel like a high-end editorial gallery. We break the "template" look by utilizing intentional asymmetry—placing heavy ink-style headings against hyper-technical hexagonal UI elements. Layouts should breathe with "Ma" (negative space), allowing the eye to rest before striking with high-contrast Vermilion accents.

---

## 2. Colors & Tonal Depth
The palette is rooted in the depth of `surface` (#131314). We avoid pure blacks and whites to maintain a cinematic, atmospheric quality.

### Surface Hierarchy & Nesting
Traditional borders are forbidden. Depth is achieved through "Tonal Stacking."
*   **The "No-Line" Rule:** Do not use 1px solid borders to section content. Use background shifts.
*   **Layering Logic:** 
    *   **Level 0 (Base):** `surface` (#131314) - The void/ink wash base.
    *   **Level 1 (Sections):** `surface_container_low` (#1B1B1C) - For large content blocks.
    *   **Level 2 (Cards):** `surface_container` (#1F1F20) - For interactive elements.
    *   **Level 3 (Pop-overs):** `surface_container_highest` (#353436) - For elements demanding immediate focus.

### The "Glass & Gradient" Rule
To bridge the gap between ink and mecha, floating UI elements must use **Glassmorphism**:
*   **Token:** `surface_variant` (#353436) at 60% opacity with a `20px` backdrop blur.
*   **Signature Gradient:** For primary CTAs, use a linear gradient from `primary` (#FFB3B1) to `on_primary_container` (#EF404C) at a 135-degree angle. This mimics the "glow" of a heated blade.

---

## 3. Typography: The Union of Soul and Machine
Typography is our primary tool for storytelling. We pair a traditional Serif with a technical Sans-Serif to represent the fusion of martial arts and technology.

*   **The Soul (Headings):** `notoSerif`
    *   Used for `display` and `headline` levels.
    *   Reflects the weight and brush-stroke pressure of calligraphy.
    *   *Implementation:* Use `display-lg` (3.5rem) with wide letter-spacing for a "cinematic title" feel.
*   **The Machine (Body & UI):** `manrope`
    *   Used for `title` and `body` levels.
    *   A clean, geometric sans-serif that ensures legibility in high-density data.
*   **The Interface (Meta-data):** `spaceGrotesk`
    *   Used for `label` levels.
    *   Mono-spaced characteristics to evoke terminal-style mecha readouts.

---

## 4. Elevation & Depth
We reject the standard Material drop shadow. Instead, we use "Ambient Luminance."

*   **Ambient Shadows:** When an element must float, use a shadow with a blur radius of `32px`, spread of `-4px`, and color `primary_container` (#3E0006) at 12% opacity. This creates a "Vermilion aura" rather than a grey shadow.
*   **The "Ghost Border" Fallback:** If an edge is absolutely required for accessibility, use `outline_variant` (#46474A) at 15% opacity. It should be felt, not seen.
*   **Hexagonal Grid Integration:** Use the hexagonal grid from the PRD as a background "watermark" in `surface_container_high`. It should only be visible in the transitions between dark and light gradients.

---

## 5. Components

### Buttons: The Strike
*   **Primary (The Vermilion Strike):** No rounded corners (use `sm` 0.125rem). Uses the Vermilion gradient. Text is `on_primary_fixed` (#410007) in all-caps `label-md`.
*   **Secondary (The Platinum Guard):** `secondary_container` background with a `Ghost Border`.
*   **Tertiary (The Ghost):** No background. `label-md` text using `tertiary` (#C1C4E5) with a subtle brushstroke underline on hover.

### Cards & Lists: The Scroll
*   **Rule:** Forbid divider lines.
*   **Layout:** Separate list items using `16px` of vertical space. 
*   **Interaction:** On hover, a card’s background should shift from `surface_container` to `surface_bright` (#39393A), and a subtle `2px` Vermilion accent should appear on the far-left edge—reminiscent of a wax seal.

### Input Fields: The Terminal
*   **Styling:** Underline-only (2px). Use `outline` (#909094) for the idle state. 
*   **Focus State:** The underline transforms into a `primary` (#FFB3B1) glow with a subtle hexagonal pattern appearing inside the text field area at 5% opacity.

### Signature Component: The "Ink-Pulse" Progress Bar
*   Instead of a smooth fill, the progress bar should have a "trailing ink" texture at the leading edge, moving with mecha-like precision but looking like a brush stroke.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace asymmetry. Place a large `display-lg` heading on the left and a small `label-sm` technical readout on the far right.
*   **Do** use "Vermilion Energy" sparingly. It should represent power, errors, or critical actions only.
*   **Do** use high-contrast lighting. Imagine a single spotlight hitting a dark dojo floor.

### Don't:
*   **Don't** use standard `lg` or `xl` rounded corners. This system is sharp and disciplined; stick to `none` or `sm` (0.125rem).
*   **Don't** use 100% opaque white for body text. Use `on_surface_variant` (#C7C6CA) to maintain the "ink on dark paper" atmosphere.
*   **Don't** use generic icons. Every icon must have a sharp, geometric mecha-style aesthetic.