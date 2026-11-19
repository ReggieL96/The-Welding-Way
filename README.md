# Milestone 2 — Accessible Welding Portfolio

## Pages included
- `index.html` — Home
- `projects.html` — Projects
- `about.html` — About and Contact form
- `styles.css` — Shared visual system and responsive layout
- `form-validation.js` — Accessible client-side form validation

## Accessibility improvements and fix log

- I added a descriptive document title, page description, and English language declaration so assistive technologies and browser tabs can identify each page.
- I added a keyboard-visible skip link to all three pages so keyboard users can bypass repeated navigation and reach the main content.
- I preserved one top-level page heading and organized each page's sections under level-two headings to make the content hierarchy easier to navigate.
- I gave the primary navigation an accessible name and marked the current page with `aria-current="page"` so users can identify their location.
- I connected each content section to its heading with `aria-labelledby` so assistive technology can identify section purpose.
- I used semantic header, navigation, main, section, article, and footer elements to expose meaningful page landmarks and content relationships.
- I added visible labels associated with every contact-form input so users can identify the purpose of each control.
- I grouped the topic radio buttons in a `fieldset` with a `legend` so the related choices are announced together.
- I added inline validation messages, an announced error summary, and `aria-invalid` and `aria-describedby` updates so errors are visible and programmatically associated with their fields.
- I added visible keyboard focus indicators so keyboard users can track the active link, button, or form control.
- I added a reduced-motion media query so visitors who request reduced motion are not forced to experience smooth scrolling or animated transitions.
- I used responsive grid and navigation layouts so the content remains usable on narrow screens.

## WCAG AA color contrast

The same palette is used on all three pages. Normal text requires at least **4.5:1** and large text requires at least **3:1** under WCAG AA.

| Foreground | Background | Contrast ratio | WCAG AA normal text |
|---|---|---:|---|
| `#17212B` | `#F7F8FA` | 15.33:1 | Pass |
| `#FFFFFF` | `#17324D` | 13.13:1 | Pass |
| `#F1F4F7` | `#17324D` | 11.89:1 | Pass |
| `#005A52` | `#FFFFFF` | 8.13:1 | Pass |
| `#46515D` | `#FFFFFF` | 8.09:1 | Pass |
| `#FFFFFF` | `#005A52` | 8.13:1 | Pass |
| `#A12622` | `#FFF7F6` | 7.06:1 | Pass |
| `#17324D` | `#FFFFFF` | 13.13:1 | Pass |
| `#FFD27A` | `#17324D` | 9.22:1 | Pass |
| `#005A52` | `#F7F8FA` | 7.65:1 | Pass |
| `#17212B` | `#FFF7F6` | 15.43:1 | Pass |

**Verification note:** Ratios are calculated from the CSS hex values using the WCAG relative-luminance formula. Paste each pair into the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to independently verify and capture screenshots if required by the course. The listed pairs exceed the 4.5:1 normal-text threshold.

## Gestalt principles used

- **Proximity:** I grouped related project articles and form labels with their content using consistent spacing so users can quickly understand which information belongs together.
- **Similarity:** I used the same card borders, teal accents, heading typography, navigation styling, and spacing patterns across all three pages so repeated interface elements are recognized as belonging to one portfolio.
- **Common region:** I placed related content inside shared panels and cards so their boundaries visually communicate which information forms a group.

## Accessible contact form

The About page contains Full name, Email address, Subject, Message, and a grouped topic choice. Each text field has an associated visible label. The topic radio buttons use `fieldset` and `legend`. Invalid fields receive visible inline messages, `aria-invalid="true"`, and `aria-describedby` references; an error summary is announced and lists links to invalid fields.

**Important:** This is a front-end validation demonstration. It does not transmit or store messages. Connect a secure form provider or server endpoint before using it for live contact submissions.

## WAVE testing checklist and status

Run the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) against the deployed versions of all three pages:

1. `index.html`
2. `projects.html`
3. `about.html`

Review each WAVE report, correct any remaining errors, and save a screenshot of each zero-error report for submission evidence. Automated testing does not replace keyboard and screen-reader testing.

**Testing status:** The code has been updated with the fixes described above, but WAVE has not yet been run against the deployed pages. Do not claim WAVE verification or zero WAVE errors until all three live reports have been checked.


## Welding hazard and safety color guide

The About page includes labeled examples of common safety-sign color meanings:

| Color | Meaning | Welding-related examples |
|---|---|---|
| Red | Danger / fire protection | Fire hazards and fire protection equipment |
| Yellow | Warning | Potential hazards requiring caution |
| Orange | Caution / machine hazards | Hot metal and hazardous machine parts |
| Blue | Required action | Mandatory PPE and safety instructions |
| Green | Safe condition | First aid and emergency exits |

Color is always paired with a written label and explanation so the information does not depend on color perception alone. Follow the safety-sign standards and procedures used by the specific workplace.
