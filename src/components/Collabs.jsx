import React from "react";
import "../styles/Collabs.scss";
import { FaChevronUp } from "react-icons/fa";

function Collabs({text}){
return(
    <div className="collabs-a-propos">
        {text && <p>{text}</p>}
        <FaChevronUp className="collabs-icon"/>
    </div>
)
}

export default Collabs