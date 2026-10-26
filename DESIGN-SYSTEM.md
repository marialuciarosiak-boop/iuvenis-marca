# Iuvenis Design System

Iuvenis is a Brazilian mentoring company that helps students (ensino médio → pós/profissionais) get into international programs: graduação fora, intercâmbio, mestrado, bolsas, fellowships. Products seen in the sources:

- **Site institucional / landing** — sales pages for the annual plan (ocean blue, mist gray, sand).
- **Área de membros (premium)** — navy + gold editorial pages describing the members area.
- **Onboarding quiz** — light, playful multi-step app ("Em que momento você está?") with XP gamification.
- **IuNews** — biweekly curated newsletter of the 10 best open opportunities (WhatsApp).

## Sources
Only screenshots and logo PNGs uploaded by the user (no Figma, no codebase). Copies live in `assets/reference/`:
`ref-o-que-te-espera.png`, `ref-banco-oportunidades.png`, `ref-alunos-hoje.png`, `ref-quiz-onboarding.png`, `ref-area-membros.png`. All values were sampled from these; treat them as approximate.

## Content fundamentals
- **Language:** Brazilian Portuguese, informal "você". The brand speaks as "nós" ("nós garimpamos", "que recomendamos").
- **Tone:** close mentor, confident, slightly colloquial — "entregamos **mastigado** para você", "saíram do **absoluto zero**", "vivem o sonho internacional".
- **Proof over hype:** concrete numbers and names — "200+ Horas de Aulas", "mais de 40 tipos de intercâmbio", "Yale e Stanford", "10 melhores oportunidades da quinzena".
- **Headline pattern:** a plain lead + highlighted payoff. "Um **Banco de Oportunidades** que nunca para", "Tudo o que você precisa. *Em um único lugar.*", "Em que momento **você está?**".
- **Body pattern:** bold first sentence (the hook) followed by regular explanation.
- **Casing:** Title Case for card titles on the site ("Modelos de Documentos"); sentence case in premium/app ("Modelos de documentos").
- **Faith & aspiration:** handwritten verse quotes appear ("Eis que faço uma coisa nova." — Isaías 43:19) and motivational lines ("Seu futuro tem as fronteiras que você delimita"). Use sparingly, only in handwritten notes.
- **No emoji** in UI copy. The middle dot "·" separates terms ("IuNews · curadoria quinzenal").
- Product names: **Iuvenis**, **IuNews**, **Banco de Oportunidades**, **área de membros**.

## Visual foundations
- **Three registers** sharing one logo:
  1. *Institucional* — `--ocean-600` grounds with a dotted world map, `--mist-300` sections, `--petrol-900` deep sections; Poppins.
  2. *Premium* — `--navy-950` with `--gold-500` accents; Cormorant Garamond headlines (roman + gold italic); hairline grid.
  3. *App* — `--sky-100` gradient ground, `--azure-500` accents, white option rows, Caveat handwritten notes and line doodles (plane, globe, symbol outline).
- **Color:** blues dominate; gold/sand is the single warm accent and marks *the* hero item (the sand center card, gold italic). Never more than one warm element per group.
- **Type:** Poppins 300 vs 700 contrast inside one headline; card titles 600; body 12–16px, lh 1.6. Cormorant only for premium. Caveat only for margin notes. A giant ghosted lowercase "iuvenis" watermark (petrol on petrol, ~+6% lightness) closes deep sections.
- **Backgrounds:** flat brand colors; dotted world map on ocean; real photography (campuses, students abroad, travel selfies). No loud gradients, except the soft pastel CTA gradient in the app.
- **Imagery:** warm, saturated, daylight; university landmarks; student selfies in front of landmarks with the university logo in white over a bottom navy fade (`--fade-photo`). Rows bleed off-screen and fade at the edges.
- **Cards:** filled (mist, ocean, sand), radius 16px, soft large shadow (`--shadow-card`), centered icon + title + description. The hero card is taller, overlaps its siblings and carries the float shadow. Premium cards are borderless cells separated by 1px `--border-on-dark` lines. App option rows: white, 8px radius, faint shadow, radio on the right.
- **Corners:** 6px photos, 8px inputs/options, 12–16px cards, pill buttons/badges.
- **Borders:** rare; 1px white hairline as section divider on dark; translucent white border on photos.
- **Shadows:** soft, low-opacity navy; deeper on floating hero elements.
- **Layout:** centered, symmetrical, max ~1120px; cards overlap image rows (negative margin) to create depth.
- **Transparency/blur:** photo fades and edge masks only; no glassmorphism.
- **Motion:** slow horizontal marquee for photo rows; 150–250ms ease-out (`--ease-out`) for hover/selection. No bounces.
- **Hover:** buttons darken (ocean → ocean-700) or lighten (gold → gold-300); option rows get a azure border. **Press:** no shrink; selection ring `0 0 0 3px` azure 12%.

## Iconography
- Site: **solid/filled** glyphs (play, users, video camera, briefcase, target, chat-plus) in petrol or white, ~28px, centered above titles. The logo symbol itself doubles as an icon (IuNews, Modelos de Documentos).
- Premium: **thin line** geometric glyphs in gold (triangle play, diamond, concentric circles, square, sparkle) ~22px.
- App: small filled glyphs in azure inside option rows; trophy for XP.
- ⚠️ **Substitution:** the original icon set is unknown; this system uses **Phosphor Icons** via CDN (`https://unpkg.com/@phosphor-icons/web@2.1.1`) — `fill` weight for the site, `light` for premium. See `components/core/Icon.jsx`.
- No emoji. Unicode "→" used in CTAs ("Continuar →").

## Index
- `styles.css` — entry point (imports `tokens/*`).
- `tokens/` — `fonts.css` (Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `guidelines/` — specimen cards (Colors, Type, Spacing, Brand).
- `assets/` — `logo-wordmark-{navy,gold,white}.png`, `logo-symbol-{navy,gold,white,gray}.png`, `reference/` screenshots.
- `components/`
  - `core/` — Button, Badge, Icon
  - `cards/` — FeatureCard, PhotoCard
  - `forms/` — OptionCard, ProgressSteps, TextInput
  - `layout/` — SectionHeading
- `ui_kits/site/` — landing sections. `ui_kits/onboarding/` — interactive quiz.
- `SKILL.md` — Agent Skill entry.

### Intentional additions
- `Icon` — wrapper for the Phosphor substitute set.
- `TextInput` — not in the screenshots; needed for the quiz name step, styled like the option rows.

## Fonts
Poppins, Cormorant Garamond and Caveat loaded from Google Fonts. They match the screenshots by eye; replace with official files if the brand uses licensed versions. The app screenshot's sans may be a different geometric face (e.g. Plus Jakarta Sans) — Poppins is used there too for consistency.
