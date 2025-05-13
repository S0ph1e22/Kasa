import Collabs from "../components/Collabs";
import logementsData from '../logement.json';
import Carousel from "../components/Carousel.jsx";
import React from "react";
import "../styles/Logements.scss";
import { useParams } from "react-router-dom";

function Logements (){

    const { id } =useParams();
    const logement = logementsData.find (item=>item.id===id);
    const rating = parseInt(logement.rating); //recup la note dans le fichier json
    const totalStars = 5 ;  //nb d'étoile
    const stars = Array.from ({length: totalStars}, (_, index) => (  //tableau de 5 éléments avec array from
        <span key={index} className={index < rating ? "star full" : "star empty"}> ★ </span> //le tableau renvoie une etoile pour chaque elements
    ))

    return(
        <div className="logement-detail">
            <Carousel pictures ={logement.pictures} />
            <div className="info">
                <div className="info-position">
                    <div className="txt-logement">
                        <h2>{logement.title}</h2>
                        <p className="logement-location">{logement.location}</p>
                    </div>

                    <div className="logement-tag">
                        {logement.tags.map((tag,index)=>
                        <span key={index} className="one-tag"> {tag} </span>
                    )}
                    </div>
                </div>

                <div className="info-proprio">
                    <div className="logement-host">
                        <p className="name-host">{logement.host.name}</p>
                        <img className="image-host" src={logement.host.picture} />
                    </div>

                    <div className="logement-rating">
                        {stars}
                    </div>     
                </div>
                  
                <div className="collabs-logement">
                    <div className="description-logement">
                        <Collabs textTitle="Description" textCollabs={logement.description} /> 
                    </div>
                    <div className="equipement-logement">
                        <Collabs textTitle="Equipements" textCollabs={logement.equipments} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logements