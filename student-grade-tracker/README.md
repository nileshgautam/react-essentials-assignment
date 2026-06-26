# Student Grade Tracker

A small React application for tracking students, subjects, grades, and pass/fail status.

## Features

- Add, edit, and delete student records
- View student name, subject, grade, and pass/fail status
- Supports inline edit modal for student updates
- Styled with Tailwind CSS

## Project setup

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Tech stack

- React 19
- Vite
- Tailwind CSS
- SweetAlert2

## Project structure

- `src/main.jsx` — app entry point
- `src/App.jsx` — main application component
- `src/components/StudentList.jsx` — student list view
- `src/components/StudentCard.jsx` — individual student card with edit/delete actions
- `src/components/StudentForm.jsx` — add new student form
- `src/components/FilterControls.jsx` — filtering and sorting controls
- `src/components/Modal.jsx` — shared modal component

## Notes

- The app is configured as an ES module project with Vite.
- Use the edit button on a student card to open the modal and save changes.
- If you want to enhance the app, consider adding validation, local storage persistence, or search/filter improvements.

