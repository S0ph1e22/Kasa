//card des logements

import React from "react";
import "../styles/Card.scss";

function Card ({logement}){
    return (
        <div className="logement-card">
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
        </div>
      )
}

export default Card