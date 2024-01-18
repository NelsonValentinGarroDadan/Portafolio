import React from "react";
import '../Estilos/Link.css'
function Link ({name , active, click}){
    return(
        <a href={`#${name}`} className={active? "link-nav active" : "link-nav"} onClick={() => click((prevLinks) => {
            const updatedLinks = prevLinks.map(link => ({ ...link, active: link.name === name }));
            return updatedLinks;
        })}>{name}</a>
    );
}

export default Link;