# GEMINI.md - Portfolio Project

## Project Overview
This project is a personal portfolio website for **Abdourrahman Farkhsi**, a Full-Stack Developer. It showcases various web development projects, skills, and contact information. The application is built using **React 18** and is designed to be a modern, dynamic single-page application (SPA).

### Main Technologies
- **Frontend Framework:** React 18.2.0
- **Routing:** React Router DOM v6 (using `HashRouter` for GitHub Pages compatibility)
- **Styling:** CSS3, Bootstrap 5.3.3
- **Email Service:** EmailJS (`@emailjs/browser`)
- **Deployment:** GitHub Pages (`gh-pages`)

### Architecture
- **Entry Point:** `src/index.js` handles the root rendering and routing using `HashRouter`.
- **Pages:** Located in `src/pages/`, each page (Home, Projects, Contact) is structured as a directory with an `index.jsx`.
- **Components:** Reusable UI elements (NavBar, Card, Form, etc.) are in `src/components/`, typically with their own `style.css`.
- **Data:** Project data is centralized in `src/data/data.js`, which exports an array of project objects with titles, descriptions, technologies, and links.
- **Assets:** Images and logos are managed in `src/assets/`.

## Building and Running

### Prerequisites
- Node.js and npm installed.

### Key Commands
- **Start Development Server:**
  ```bash
  npm start
  ```
- **Build for Production:**
  ```bash
  npm run build
  ```
- **Run Tests:**
  ```bash
  npm test
  ```
- **Deploy to GitHub Pages:**
  ```bash
  npm run deploy
  ```

## Development Conventions

### Coding Style
- **Functional Components:** All components use functional syntax with React Hooks where necessary.
- **Component Organization:** Each component has its own directory containing the `.jsx` file and a `style.css` file for its styles.
- **Routing:** Use `HashRouter` for navigation to ensure compatibility with static hosting services like GitHub Pages.
- **Formatting:** Prettier is used for code formatting, as configured in `.prettierrc`.
- **Imports:** Absolute-like paths are used for assets (e.g., `import Logo from './../../assets/logo/logo.png'`).

### Testing
- Basic testing setup is available via `@testing-library/react`.
- `setupTests.js` is configured for `jest-dom`.

### Data Management
- When adding a new project, update the `DATA` array in `src/data/data.js`.
- Each project object should follow the structure: `{ id, image, title, description, technologie, link }`.
