import { useState } from 'react'
import './App.css'
import MiniMovieApp from './components/MiniMovieApp/MiniMovieApp';
import movies from './data/movies';

function App() {
  return (
    <div className="App">
      <MiniMovieApp movies={movies} />
    </div >
  )
}

export default App
