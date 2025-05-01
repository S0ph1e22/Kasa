import Collabs from "../components/Collabs";
import logementsData from '../logement.json';
import Carousel from "../components/Carousel.jsx";
import React from "react";
import "../styles/Logements.scss";
import { useParams } from "react-router-dom";

function Logements (){

    const { id } =useParams();
    const logement = logementsData.find (item=>item.id===id);

    return(
        <div className="logement-detail">
            <Carousel pictures ={logement.pictures} />
            <h2>{logement.title}</h2>
            <p className="logement-location">{logement.location}</p>
            <div className="logement-tag">
                {logement.tags.map((tag,index)=>
                <span key={index} className="one-tag"> {tag} </span>
            )}
            </div>
            <div className="collabs-logement">
                <Collabs textTitle="Description" textCollabs={logement.description} />
                <Collabs textTitle="Equipement" textCollabs={logement.equipments} />
            </div>
            <div className="logement-host">
                <p className="name-host">{logement.host.name}</p>
                <img className="image-host" src={logement.host.picture} />
            </div>
            {/*etoile */}          
        </div>
    )
}

export default Logements