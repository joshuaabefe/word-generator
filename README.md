# TextGen — Word, Sentence & Paragraph Generator

> A beginner-friendly web app that instantly generates random words, sentences, and paragraphs for mockups, prototypes, and creative projects.

![TextGen Preview](https://img.shields.io/badge/Status-Live-D1495B?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-003D5B?style=for-the-badge&logo=html5&logoColor=EDAE49)
![CSS](https://img.shields.io/badge/CSS3-30638E?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-00798C?style=for-the-badge&logo=javascript&logoColor=EDAE49)

---

## ✨ Features

- **Three generation modes** — instantly generate a random Word, Sentence, or Paragraph
- **200+ word pool** — spanning tech, nature, abstract concepts, and everyday vocabulary
- **40+ sentence templates** — covering technology, innovation, nature, society, and science
- **6 paragraph topics** — each with shuffled body sentences for unique output every time
- **Copy to clipboard** — one-click copying with a toast confirmation
- **Generate Again** — re-roll the same content type without switching tabs
- **Live clock** — real-time date and time display updated every second
- **Dark / Light mode** — smooth toggle with user preference saved to `localStorage`
- **Fully responsive** — works beautifully on desktop, tablet, and mobile
- **Zero dependencies** — pure HTML, CSS, and Vanilla JavaScript; no frameworks, no npm

---

## 🎨 Color Palette

| Swatch | Name | Hex | Usage |
|---|---|---|---|
| 🟡 | Golden Yellow | `#EDAE49` | Hover highlights, accents, active toggle |
| 🔴 | Crimson Rose | `#D1495B` | Active buttons, hero accent, copy toast |
| 🟢 | Teal | `#00798C` | Card borders, badges, primary UI |
| 🔵 | Steel Blue | `#30638E` | Default buttons, muted text |
| 🌑 | Navy Deep | `#003D5B` | Body text, dark background, footer |

---

## 🗂️ Project Structure

```
word-generator/
├── index.html       # App structure and semantic markup
├── style.css        # All styles, CSS variables, dark/light mode, responsive layout
├── script.js        # Data pools, generators, DOM logic, clock, theme toggle
├── favicon.svg      # SVG favicon using brand colors
├── LICENSE          # MIT License
└── README.md        # This file
```

---

## 🚀 Getting Started

### Option 1 — Open directly (no server needed)

```bash
# 1. Clone the repository
git clone https://github.com/joshuaabefe/word-generator.git

# 2. Navigate into the folder
cd word-generator

# 3. Open index.html in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Use VS Code Live Server

1. Open the project folder in [VS Code](https://code.visualstudio.com/)
2. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Right-click `index.html` → **Open with Live Server**

### Option 3 — Python local server

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

---

## 🧠 How It Works

### JavaScript Architecture

The `script.js` file is divided into 11 clearly commented sections:

| Section | Description |
|---|---|
| **1. Data Pools** | Arrays of 200+ words, 40+ sentences, and 6 paragraph topic objects |
| **2. State** | A single `state` object tracks active type and generation count |
| **3. DOM References** | All elements grabbed once at startup for efficiency |
| **4. Utility Helpers** | `randomInt()`, `pickRandom()`, `shuffle()` — small, reusable functions |
| **5. Generators** | `generateWord()`, `generateSentence()`, `generateParagraph()` |
| **6. Display Updater** | `displayOutput()` updates the card and triggers a CSS fade-in animation |
| **7. Core Logic** | `generate()` ties the generator and display together |
| **8. Event Listeners** | Handles button clicks, copy, and generate-again interactions |
| **9. Dark/Light Mode** | `applyTheme()` sets `data-theme` on `<html>` and persists to `localStorage` |
| **10. Live Clock** | `setInterval` calls `updateClock()` every 1000ms |
| **11. Init** | Runs on `DOMContentLoaded` to boot the app cleanly |

### CSS Architecture

Styles are built on **CSS custom properties (variables)** for both light and dark themes. Swapping themes requires changing a single `data-theme` attribute on the `<html>` element — CSS handles the rest with smooth `transition` properties. Layout uses **CSS Grid** for the button group and stats row, and **Flexbox** for everything else.

### Paragraph Generation

Paragraphs are not stored as fixed strings. Each topic object holds:
- An **opener** sentence
- A **body** array of 5 sentences (shuffled, 2–4 picked randomly per generation)
- A **closer** sentence

This means each paragraph generation produces a unique combination, even from the same topic.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout changes |
|---|---|
| `> 768px` | Full horizontal header, 3-column button grid, side-by-side stats |
| `≤ 768px` | Stacked single-column buttons, compact header clock |
| `≤ 480px` | Clock text hidden (icon only), action button labels hidden, touch-friendly tap targets |

---

## 🛠️ Built With

- **HTML5** — Semantic markup with accessibility attributes (`aria-label`, `role`)
- **CSS3** — Custom properties, Grid, Flexbox, keyframe animations, backdrop-filter
- **Vanilla JavaScript (ES6+)** — No libraries, no build tools, no dependencies
- **Google Fonts** — [Syne](https://fonts.google.com/specimen/Syne) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)

---

## ♿ Accessibility

- Semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<section>`)
- `aria-label` on all icon-only buttons
- `role="group"` on the button group
- Sufficient color contrast ratios across both light and dark modes
- Keyboard-navigable interactive elements

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Joshua Abefe**

- 🌐 Portfolio: [joshuaabefe.github.io](https://joshuaabefe.github.io/)
- 💼 GitHub: [@joshuaabefe](https://github.com/joshuaabefe)

---

<p align="center">Copyright &copy; 2026 Joshua Abefe. All Rights Reserved.</p>
