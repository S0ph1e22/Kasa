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
            <p className="logement-tag">{logement.tags}</p>
            <Collabs textTitle="Description" textCollabs={logement.description} />
            <Collabs textTitle="Equipement" textCollabs={logement.equipments} />
            <p className="logement-host">{logement.host.name}</p>
            <img className="image-host" src={logement.host.picture} />
            {/*etoile */}          
        </div>
    )
}

export default Logements