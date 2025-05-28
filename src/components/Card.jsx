//card des logements

import React from "react";
import "../styles/Card.scss";

function Card ({logement}){
    return (
        <div className="logement-card">
            <div key={logement.id} >
                <img src={logement.cover} alt={logement.title}/>
                <h2>{logement.title}</h2>
            </div>
        </div>
      )
}

export default Card