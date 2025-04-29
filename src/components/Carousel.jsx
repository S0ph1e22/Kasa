import React, { useState} from "react";
import "../styles/Carousel.scss"

function Carousel ({pictures}){

    const [current, setCurrent] =useState(0); //current pour l'index de l'img affiché actuellement
    const total = pictures.length;    //pour le nb total d'img

    const next = () => setCurrent ((current +1) % total);   //passer à l'img suivante, total pour boucler
    const preview = () => setCurrent ((current -1 + total ) % total); //+total pour éviter valeur negative

    return(
        <div className="carousel">
            <img src={pictures[current]} alt={`Slide ${current +1}`}/>

            {total > 1 && (
                <>
                <button onClick={preview} className="btn-prev"></button>
                <button onClick={next} className="btn-next"></button>
                <div className="carousel-count">{current + 1 } / {total} </div>
                </>
            )}
        </div>
    )

}

export default Carousel