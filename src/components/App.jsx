//composant de la page /home, affiche logement, logo, compteur chargé depuis
//logement.json

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import logementsData from '../logement.json'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
