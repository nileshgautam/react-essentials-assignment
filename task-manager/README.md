# Task Manager

A React-based task manager built with Vite. This app lets users create, edit, filter, and manage tasks in a clean interface.

## Features

- Add new tasks with a title and description
- Edit and delete existing tasks
- Filter tasks by status or category
- Modal form interface for task creation and updates
- Alert notifications powered by `sweetalert2`

## Tech Stack

- React 19
- Vite
- SweetAlert2
- ESLint

## Project Structure

- `src/` - application source code
  - `App.jsx` - main app component
  - `main.jsx` - app entry point
  - `assets/` - static assets
  - `componets/` - UI components
    - `FilterControls.jsx`
    - `Modal.jsx`
    - `TaskForm.jsx`
    - `TaskItem.jsx`
    - `TaskList.jsx`
  - `context/TaskContext.jsx` - task state management
  - `hooks/` - custom hooks
  - `utils/` - utility functions

## Getting Started

### Prerequisites

- Node.js 18+ or compatible version
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local development URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Notes

- The app is configured as a Vite project using the `module` package type.
- Task UI and behavior are handled through React component state and context.

## License

This project is provided as-is.
