import React from "react";
import '../Estilos/ItemProyecto.css';
function ItemProyecto({link, index, img, name, des, job, time}){
    return(
        <a href={link} className="item">
            <img src={img}/>
            <div className="index">{`#${index+1}`}</div>
            <div className="name">{name}</div>
            <div className="des">{des}</div>
            <div className="author">
                <div className="job">{job}</div>
                <div className="time">
                    {time}
                    <i className="fa-regular fa-clock"></i>
                </div>
            </div>

        </a>
    );
}

export default ItemProyecto;