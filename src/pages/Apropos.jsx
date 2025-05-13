import '../styles/Apropos.scss';
import Collabs from "../components/Collabs.jsx"
import Banner from "../components/Banner.jsx";
import banner_a_propos from "../assets/banner-a-propos.png";

function APropos(){
return(
    <>
        <Banner image={banner_a_propos} />
        <div className='txt-collabs'>
            <Collabs textTitle="Fiabilité " textCollabs="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
            <Collabs textTitle="Respect" textCollabs="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Collabs textTitle="Service" textCollabs="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
            <Collabs textTitle="Sécurité" textCollabs="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
    </>
)
}

export default APropos