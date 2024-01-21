import React from "react";
import '../Estilos/ItemExp.css';
function ItemExp({time,icon,job,company,des}){
    return(
        <div className="item">
            <div className="time">
                {time}
            </div>
            <i className={icon}></i>
            <div className="content">
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

export default ItemExp;