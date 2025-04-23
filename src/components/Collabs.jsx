import React, { useState } from "react";
import "../styles/Collabs.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

function Collabs({ textTitle, textCollabs }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouverture/fermeture
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //icone ouverture/fermeture
  return (
    <div className="collabs-a-propos">
      <div onClick={handleToggle} className="collabs-barre">
        <span className="collabs-title">{textTitle}</span>
        <div className="collabs-icon">
            {isOpen ? <FaChevronDown /> : <FaChevronUp />}
          </div>
        </div>
        {isOpen && (
          <div className="collabs-txt">
            <p>{textCollabs}</p>
          </div>
        )}
    </div>
  );
}

export default Collabs;
