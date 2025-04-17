import "../styles/Banner.scss";


function Banner({image,alt="image de la bannière",text}){

    return(
        <div className="kasa_banner">
            <img src={image} alt={alt} className="kasa_image_banner" />
            {text && <p>{text}</p>}
        </div>
    )
}

export default Banner