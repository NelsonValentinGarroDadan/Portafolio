import React from "react";
import '../Estilos/ItemHabilidad.css';

function ItemHabilidad({name , icon, des}){
    return(
        <div className="item">
            <img src={icon}/>
            <div className="name">{name}</div>
            <div className="des">{des}</div>
        </div>
    );
}

export default ItemHabilidad;