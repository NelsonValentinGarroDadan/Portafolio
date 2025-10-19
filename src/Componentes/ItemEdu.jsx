import React from "react";
import '../Estilos/ItemEdu.css';
function ItemEdu({time,icon:Icon,job,company,des}){
    return(
        <div className="item"> 
            <div className="contenedorSvg">
                <Icon /> 
            </div>
            <div className="content">
                <div className="time">
                    {time}
                </div>
                <div className="job">
                    {job}
                </div>
                <div className="company">
                    {company}
                </div>
                <div className="des">
                    {des}
                </div>
            </div>
        </div>
    );
}

export default ItemEdu;