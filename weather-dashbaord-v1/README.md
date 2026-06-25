# Weather Dashboard

A simple React weather dashboard built with Vite. It lets users search for a city and view the current weather along with a 5-day forecast.

## Features

- Search weather by city name
- Shows current temperature, weather condition, humidity, wind speed, and feels-like temperature
- Displays a 5-day forecast with high and low temperatures
- Shows precipitation probability for each forecast day
- Loads Noida weather by default
- Uses responsive styling for mobile and desktop screens

## Tech Stack

- React
- Vite
- CSS
- Open-Meteo Geocoding API
- Open-Meteo Weather Forecast API

## Getting Started

### Prerequisites

Install Node.js on your system. Then install the project dependencies.

```bash
npm install
```

You can also use pnpm if you prefer:

```bash
pnpm install
```

### Run the App

```bash
npm run dev
```

Or with pnpm:

```bash
pnpm dev
```

After starting the development server, open the local URL shown in the terminal.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

## Project Structure

```text
weather-dashbaord-v1/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## API Information

This project uses free Open-Meteo APIs:

- Geocoding API: Finds latitude and longitude from the searched city name.
- Forecast API: Fetches current weather and daily forecast data using coordinates.

No API key is required.

## Notes

- Weather data depends on the city result returned by Open-Meteo.
- If a city is not found, the app shows an error message.
- If the network request fails, the app asks the user to try again.
