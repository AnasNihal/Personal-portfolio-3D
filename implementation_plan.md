# Website Color Theme Conversion

The goal is to unify the entire website's color palette to match the provided "Black and Coral" theme, replacing all other accent colors (like purple, green, blue, dark red). 

## User Review Required

> [!IMPORTANT]
> **Clarification on "blank and other color":** I assume "blank" means **Black** (`#0C0C0C`), and the "other color" refers to **Coral** (`#FF5949`) and the **Cyan/Teal** (`#00C2CB`) dot seen in your reference image. 
> 
> **Question:** Do you want the entire website background to be Coral (`#FF5949`) with Black text? Or do you want to keep the dark Black background (`#0C0C0C`) but use Coral and Cyan for all text, buttons, borders, and hover effects?
> 
> *My proposed plan below assumes keeping the dark/black background as the main canvas, while using Coral and Cyan as the primary brand colors for everything else, to match the industrial dark aesthetic.*

## Proposed Changes

### `src/index.css` & Global
- Define CSS variables for the theme to ensure consistency:
  - `--bg-primary`: `#0C0C0C` (Black)
  - `--accent-coral`: `#FF5949` (Coral)
  - `--accent-cyan`: `#00C2CB` (Cyan)
  - `--text-primary`: `#FFFFFF` or `#FF5949`

### `src/components/Footer.tsx`
- Add the Cyan dot above the "S" in "ANAS." as shown in the reference image.

### `src/pages/Home.tsx`
- Change the Hero text ("HELLO THERE") gradient from Dark Red (`#D22B2B` -> `#6A1212`) to Coral/Cyan or pure Coral.

### `src/pages/About.tsx`
- Change the `PillShape` color from `#FF4500` to Coral (`#FF5949`).

### `src/pages/Contact.tsx`
- Change the `PlusIcon` (currently Purple `#8A2BE2`) to Cyan (`#00C2CB`) or Coral (`#FF5949`).

### `src/components/LiveProjectButton.tsx` & `ProjectCard.tsx`
- Update borders and text colors from light grey (`#D7E2EA`) to Coral/Black combos.
- Ensure hover states use the new theme.

### `src/components/Preloader.tsx`
- Change loading bar color from `#D7E2EA` to Coral (`#FF5949`) or Cyan.

## Verification Plan
- Review all pages locally to ensure no rogue colors (purple, green, blue) remain.
- Verify that hover states seamlessly transition between Black and Coral.
