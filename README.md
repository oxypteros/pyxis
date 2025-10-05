## Pyxis

> Writer of `code`, copy, and narratives.

Pyxis is the complete source code and design system for the Oxypteros Portfolio. This repository serves as a public, living case study demonstrating a commitment to superior engineering, minimalistic design, and a professional development lifecycle.

**View the live portfolio:** [oxypteros.com](https://oxypteros.com)

### Guiding Principles

This project is built upon a small set of non-negotiable quality standards. The goal is not just to build a functional site, but to build it with a systemic, maintainable, and professional approach.

- **Systemic, Component-Driven Architecture:** The UI is constructed from a small, robust design system.

- **Pragmatic & DRY:** Logic is abstracted to its most sensible location. Abstractions are created only when they demonstrably improve clarity, safety, or maintainability, strictly adhering to the YAGNI principle.

- **Superior Accessibility (A11y):** Accessibility is a foundational requirement, not an afterthought. This includes semantic HTML, correct `aria` attribute usage, visually hidden text for screen readers, and WCAG-compliant, branded focus states for all interactive elements.

- **Precise & Modern TypeScript:** The codebase uses strict, explicit types. 


### Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting & Formatting:** ESLint & Prettier

### Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/oxypteros/pyxis.git
    cd pyxis
    ```

2.  **Install dependencies:**
    (This project uses `pnpm` as its package manager)
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.