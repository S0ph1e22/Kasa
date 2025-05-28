//page /home, affiche les cards, banner, header et footer

import '../styles/App.scss'
import React, {useEffect, useState} from 'react'
import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import banner_home from "../assets/banner.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [logementsData, setLogementsData] = useState([]); //logementData va contenir les données de logement.json, initalisé vide
  const [loading, setLoading] = useState(true); //laoding est un boolean pour savoir si le chargement est en cours, initalisé a true
  const navigate = useNavigate(); //pour rediriger

  useEffect(() => {
    async function fetchLogements() {
      try {
        const response = await fetch('/logement.json'); // requete fetch vers logement.json dans le dossier public
        if (!response.ok) { //si rep pas correct, erreur 
          throw new Error('Erreur lors du chargement des logements');
        }
        const data = await response.json(); //transforme rep json en objet js
        setLogementsData(data); //MAJ etat logement.json avec ces données
        setLoading(false); //chargement fini
      } catch (error) { //si erreur, affiché et rediriger vers la page d'erreur
        console.error('Erreur dans Home :', error);
        navigate ("/error");
      }
    }

    fetchLogements();
  }, []);

  if (loading) return <p>Chargement...</p>; //tant que les données ne sont pas arrivée, retourne un texte chargement....

  return (
    <>
      <Banner image={banner_home} text="Chez vous, partout et ailleurs" /> {/*bannière */}
      <div className="logements-list">
        {logementsData.map((logement) => (
          <Link key={logement.id}to={`/Logements/${logement.id}`} className='card-link'> {/* pour rediriger la page */}
          <Card logement={logement} />
          </Link>
        ))}
      </div>
      
    </>
  )
}

export default Home
