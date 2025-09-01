# My CV (React + Vite + TypeScript)

A fast, lightweight CV/portfolio built with React. This README covers setup, configuration, development, and deployment.

> Assumes Vite + TypeScript. If your setup differs, adjust commands accordingly.

---

## Features

* ⚡ **Fast dev** with Vite + HMR
* 🧩 **Config‑driven** via `config.ts` (name, roles, skills, projects, links, etc.)
* 🖨️ **Print/PDF‑friendly** (use your browser’s print dialog; add custom print styles if needed)
* 📱 **Responsive** layout
* 🎨 **SCSS** styles (easy to customize)

---

## Quick Start

### Prerequisites

* Node.js **≥ 18** (LTS recommended)
* Your preferred package manager: **npm**, **pnpm**, or **yarn**

### Install

```bash
# Clone
git clone https://github.com/nitishk1316/my-cv-react.git
cd my-cv-react

# Install dependencies
npm install   # or: pnpm install / yarn
```

### Configure

A sample config is provided as `config.ts.sample`. Copy it and add your details:

```bash
cp config.ts.sample config.ts
```

> set API_BASE url.

**Example (minimal) `config.ts`:**

```ts
export const API_BASE = "http://localhost:3001";
```

### Run Dev Server

```bash
npm run dev
```

* Opens on `http://localhost:3000`.

### Build for Production & Preview

```bash
npm run build
npm run preview
```

---

## Scripts

> Check `package.json` for the exact list. Typical Vite scripts:

```jsonc
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

---

## Customization

* **Branding/Theme**: Edit colors, typography, and spacing in your SCSS files.
* **Sections/Blocks**: Add/remove components (About, Skills, Projects, Experience, Education, Contact).
* **Print Styles**: Add `@media print { … }` rules for perfect PDFs.
* **SEO**: Update `index.html` (title, meta, OpenGraph/Twitter tags).
* **i18n (optional)**: Integrate `react-i18next` if you want multilingual content.

---

## Contributing

Issues and PRs are welcome. Please keep changes focused and describe them clearly.

---

## License

Not specified. Add a license file (e.g., `MIT`) if you plan to open‑source.

---