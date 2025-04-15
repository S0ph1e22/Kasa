import "../styles/Banner.scss";
import image_banner from "../assets/banner.png";

function Banner(){

    return(
        <div className="kasa_banner">
            <img src={image_banner} alt="image de la bannière" className="kasa_image_banner"></img>
            <p> Chez vous, partout et ailleurs </p>
        </div>
    )
}

export default Banner