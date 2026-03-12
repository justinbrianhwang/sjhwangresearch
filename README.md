# Sunjun Hwang — Research Portal

Personal research portfolio website showcasing ongoing and completed work in AI security, quantum computing, autonomous driving, and more.

**Live site:** [sjhwangresearch.com](https://sjhwangresearch.com)

## About

This is the open research portal of **Sunjun Hwang (황선준)**, an undergraduate researcher at Yonsei University's School of Computer Science, affiliated with [RAISE LAB](https://raise.yonsei.ac.kr/).

Research areas include:
- AI Security & Adversarial Robustness
- Quantum Computing & Quantum Machine Learning
- Federated Learning for Autonomous Driving
- AI Semiconductors & Neuromorphic Computing
- Medical AI & Document Automation
- Network Security

## Features

- **Multi-page layout** — Home, Areas, Projects, Publications, Timeline, Future Research, Collaborations
- **Multi-language support** — English, Korean (한국어), Japanese (日本語), Spanish (Español)
- **Data-driven rendering** — All content defined in JS data files for easy updates
- **Responsive design** — Mobile-friendly with adaptive navigation
- **Research Map** — Interactive visualization of research area connections
- **Progress tracking** — Real-time project progress indicators

## Project Structure

```
├── index.html              # Main entry point (Home)
├── html/                   # Sub-pages (areas, projects, publications, …)
├── sections/               # Reusable HTML section templates
├── css/
│   ├── variables.css       # Design tokens & CSS custom properties
│   ├── base.css            # Reset & typography
│   ├── layout.css          # Grid & layout utilities
│   ├── components.css      # Shared UI components
│   └── sections/           # Per-section styles
├── js/
│   ├── data/               # Content data (profile, projects, publications, …)
│   ├── i18n.js             # Internationalization & language toggle
│   ├── main.js             # Section loader & render orchestration
│   ├── navigation.js       # Nav bar & mobile menu
│   ├── progress.js         # Progress bar animations
│   └── timeline.js         # Timeline rendering
└── assets/
    ├── icons/              # Research area & section icons
    └── logos/              # Lab, university, and partner logos
```

## Getting Started

No build step required — this is a static site.

1. Clone the repository:
   ```bash
   git clone https://github.com/justinbrianhwang/sjhwangresearch.git
   ```
2. Open `index.html` in a browser, or serve locally:
   ```bash
   npx serve .
   ```

## Updating Content

All content lives in `js/data/` as plain JavaScript objects with multi-language keys:

```js
{
  en: "English text",
  ko: "한국어 텍스트",
  ja: "日本語テキスト",
  es: "Texto en español"
}
```

| File | Content |
|------|---------|
| `profile.js` | Name, title, affiliation, stats, links |
| `research-areas.js` | Core research domains |
| `projects.js` | Current active projects |
| `past-projects.js` | Completed research |
| `publications.js` | Papers & conference publications |
| `talks.js` | Presentations & seminars |
| `timeline-data.js` | Research milestones |
| `future-research.js` | Future directions & open questions |
| `collaborations.js` | Partner labs & industry collaborators |

## Deployment

Hosted on **GitHub Pages** with a custom domain (`sjhwangresearch.com`). Pushing to `main` automatically deploys.

## License

[Apache License 2.0](LICENSE)
