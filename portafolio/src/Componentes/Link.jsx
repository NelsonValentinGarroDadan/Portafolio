import React from "react";
import '../Estilos/Link.css'
function Link ({name , active}){
    return(
        <a data-tab={`${name}`} className={active? "link-nav active" : "link-nav"} >{name}</a>
    );
}

export default Link;