//composant de la page /home, affiche logement, logo chargé depuis logement.json

import '../styles/App.css'
import logementsData from '../logement.json'
import React from 'react'

function App() {
 
  
  return (
    <>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="logements-list">
        {logementsData.map((logement) => (
          <div key={logement.id} className="logement-card">
            <h2>{logement.title}</h2>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.description}</p>
            <div className="pictures">
              {logement.pictures.map((picture, index) => (
                <img key={index} src={picture} alt={`Logement image ${index + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
