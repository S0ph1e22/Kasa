import '../styles/Apropos.scss';
import Collabs from "./Collabs.jsx"
import Banner from "./Banner.jsx";
import banner_a_propos from "../assets/banner-a-propos.png";

function APropos(){
return(
    <>
        <div className='a-propos-banner'>
            <Banner image={banner_a_propos} />
        </div>
        <div className='txt-collabs'>
            <Collabs text="Fiabilité "/>
            <Collabs text="Respect"/>
            <Collabs text="Service"/>
            <Collabs text="Sécurité"/>
        </div>
    </>
)
}

export default APropos