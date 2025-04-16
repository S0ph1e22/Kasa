//page /home, affiche les cards, banner, header et footer

import '../styles/App.css'
import React from 'react'
import logementsData from '../logement.json'
import Card from "./Card";
import Banner from "./Banner"

function App() {

  return (
    <>
      <Banner/>
      <div className="logements-list">
        {logementsData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </>
  )
}

export default App
