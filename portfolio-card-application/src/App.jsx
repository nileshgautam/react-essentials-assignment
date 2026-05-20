import React, { useState } from 'react'
import PortfolioCard from './components/portfolioCard/PortfolioCard'
import { Profiles } from './data/Profiles';

function App() {
  return (
    <div className='app'>
      <PortfolioCard profiles={Profiles} />
    </div>
  )
}

export default App
