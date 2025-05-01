import React, { useState, useRef } from "react"; //pour savoir si le bloc est ouvert et fermé et pour mesurer la hauteur du txt caché
import "../styles/Collabs.scss";
import { FaChevronUp } from "react-icons/fa"; 

function Collabs({ textTitle, textCollabs }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // ref vers la div qui contient le txt pour lire sa hauteur

  // Fonction pour ouverture/fermeture
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //icone ouverture/fermeture
  return (
    <div className="collabs-a-propos">
      <div className="collabs-barre">
        <span className="collabs-title">{textTitle}</span>
        <div className={`collabs-icon ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <FaChevronUp />
          </div>
        </div>
        <div
        ref={contentRef}
        className={`collabs-txt ${isOpen ? "open" : ""}`}
        style={{
          //définir dynamiquement la max height avec scollHeight, si ouvert, hauteur rélle du contenu sinon 0px
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px", 
        }}
      >
            <p className={isOpen ? "slide-down" : "slide-up"}>{textCollabs}</p>
          </div>
    </div>
  );
}

export default Collabs;
