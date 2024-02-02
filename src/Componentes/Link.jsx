import React from "react";
import '../Estilos/Link.css'
function Link ({name , active}){
    return(
        <a data-tab={name} href={`#${name}`} className={active? "link link-nav active" : "link link-nav"} >{name}</a>
    );
}

export default Link;