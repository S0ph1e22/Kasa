//page /home, affiche les cards, banner, header et footer

import '../styles/App.css'
import React from 'react'
import logementsData from '../logement.json'
import Banner from "../components/Banner.jsx";
import Card from "./Card";
import banner_home from "../assets/banner.png";

function App() {

  return (
    <>
      <Banner image={banner_home} text="Chez vous, partout et ailleurs" /> {/*bannière */}
      <div className="logements-list">
        {logementsData.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </>
  )
}

export default App
