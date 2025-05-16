import '../styles/Apropos.scss';
import Collabs from "../components/Collabs.jsx"
import Banner from "../components/Banner.jsx";
import banner_a_propos from "../assets/banner-a-propos.png";
import aProposData from "../aPropos.json";

function APropos(){

return(
    <>
        <Banner image={banner_a_propos} />
        <div className='txt-collabs'>   {/* div qui contient les collabs */}
            {/* parcours tt les objets du tableau apropos, item = 'une case', creation composant collabs avec le titre, txt et id*/}
                {aProposData.map((item) => ( 
                    <Collabs 
                        key={item.id} 
                        textTitle={item.title} 
                        textCollabs={item.texte} 
                    />
                ))}
            </div>
        </>
    );
}

export default APropos