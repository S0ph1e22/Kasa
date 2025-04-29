import Collabs from "../components/Collabs";
import logementsData from '../logement.json';
import React from "react";
import "../styles/Logements.scss";

function Logements (){
    return(
        <div className="logement-picture">
            {logementsData.map((logement)=>(
            <div key={logement.id}>
                <img src={logement.pictures}/>   
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
                <p>{logement.tags}</p>
                <Collabs textTitle="Description" textCollabs={logement.description} />
                <Collabs textTitle="Equipement" textCollabs={logement.equipments} />
                <p>{logement.name}</p>
                <img src={logement.picture} />
                {/*etoile */}

            </div>             
                ))}
        </div>
    )
}

export default Logements