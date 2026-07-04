# Expense Tracker

A lightweight React expense tracker app built with Vite. Users can add expenses, filter by category, search by description, and track totals with data persisted in browser localStorage.

## Key Features

- Add expenses with description, amount, and category.
- Filter expenses by category.
- Search expenses by description.
- Filter by minimum and maximum amount.
- View total expenses and filtered totals.
- Persist expense data using localStorage.

## How It Works

- `src/App.jsx` contains the main UI for adding expenses, filtering them, and displaying the list.
- `src/hooks/useExpenses.js` manages expense state and persistence.
- `src/hooks/useFilters.js` manages filtering state and calculates filtered results.
- `src/hooks/useLocalStorage.js` syncs application state with browser localStorage.

## Tech Stack

- React 19
- Vite
- JavaScript
- Browser LocalStorage

## Project Structure

- `src/App.jsx` - main application component
- `src/hooks/useExpenses.js` - expense state + localStorage persistence
- `src/hooks/useFilters.js` - filter state and filtering logic
- `src/hooks/useLocalStorage.js` - reusable localStorage hook
- `index.html` - application entry page
- `package.json` - project dependencies and scripts

## Installation

```bash
cd expense-tracker
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal to use the app.

## Usage

1. Enter a description for the expense.
2. Enter a numeric amount.
3. Pick a category.
4. Click **Add Expense**.
5. Use the filter controls to narrow the list by category, description, and amount range.

## Notes and Improvements

- The app stores expenses in `localStorage`, so the data remains after page refresh.
- The current hook implementation includes `dateFrom`/`dateTo` filters, but the UI does not expose date-based filtering yet.
- The UI summary logic can be improved by referencing the computed `summary` object consistently.
- Future enhancements could include edit/delete confirmation, date filters, category totals, and improved responsive styling.

## Available Scripts

- `npm run dev` — start the development server.
- `npm run build` — build the app for production.
- `npm run preview` — preview the production build.
- `npm run lint` — run the configured linter.
