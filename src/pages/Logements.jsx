import Collabs from "../components/Collabs";
import Carousel from "../components/Carousel.jsx";
import React, { useEffect, useState } from "react";
import "../styles/Logements.scss";
import { useNavigate, useParams } from "react-router-dom";

//Requete vers logement.json, si réponse correct, renvoie la liste de logement, sinon relance l'erreur
async function fetchLogement(){
    try{
        const response = await fetch ('/logement.json');
        if (!response.ok){
            throw new Error ('erreur lors du chargement de la page')
        }
        const data = await response.json();
        return data;
    } catch (error) {
    console.error ('erreur dans fetchlogement :', error);
    throw error;
    }
}

function Logements (){

    const { id } =useParams(); //récup id dans l'url
    const navigate = useNavigate(); //pour rediriger
    const [logement, setLogement] = useState(null); //stock les données du logement
    const [loading, setLoading] = useState(true); //gère état de charegement

    useEffect(()=>{
        async function getLogement(){
            try {
                const data = await fetchLogement(); //appel fonction fetchLogement qui va renvoyer un tableau
                const found = data.find (item => item.id===id); //recherche dans le tableau l'id qui correspond à celui dans l'url

                if (!found){ //si aucun logement trouvé, redirige vers la page erreur
                    navigate("/error"); 
                    return
                }
                setLogement(found); //si objet trouvé, met a jour l'état logement avec usestate 
                setLoading(false); //signal chargement terminé, permet de rendre le composant
            } catch (error){   //redirige si erreur
                console.error ('erreur lors du fetch logement :', error);
                navigate ("/error"); 
            }
        }
        getLogement();
    }, [id, navigate]); //useeffect s'execute qd id change dans l'url

    if (loading) return <p> chargement...</p> //empeche l'affichage du contenu tant que les données ne sont pas encore chargée depuis logement.json

    const rating = parseInt(logement.rating); //recup la note dans le fichier json
    const totalStars = 5 ;  //nb d'étoile
    const stars = Array.from ({length: totalStars}, (_, index) => (  //tableau de 5 éléments avec array from
        <span key={index} className={index < rating ? "star full" : "star empty"}> ★ </span> //le tableau renvoie une etoile pour chaque elements
    ));


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