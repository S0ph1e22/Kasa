import React, { useState } from "react";
import "../styles/Collabs.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

function Collabs({ text }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouverture/fermeture
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //icone ouverture/fermeture
  return (
    <div className="collabs-a-propos">

        <details open={isOpen}>
            <summary>{text}</summary>
            <p>Ce produit a été fabriqué par ACME et respecte les pandas.</p>
        </details>

        <div onClick={handleToggle} className="collabs-icon">
            {isOpen ? (
                <FaChevronDown/>
                ) : (
                <FaChevronUp />
                )}
        </div>
    </div>
  );
}

export default Collabs;
