//page /home, affiche les cards, banner, header et footer

import '../styles/App.css'
import React from 'react'
import logementsData from '../logement.json'
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import banner_home from "../assets/banner.png";
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <Banner image={banner_home} text="Chez vous, partout et ailleurs" /> {/*bannière */}
      <div className="logements-list">
        {logementsData.map((logement) => (
          <Link key={logement.id}to={`/Logements/${logement.id}`} className='card-link'> {/* pour rediriger la page */}
          <Card logement={logement} />
          </Link>
        ))}
      </div>
      
    </>
  )
}

export default App
