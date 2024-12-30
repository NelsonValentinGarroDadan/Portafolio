import React from "react";
import '../Estilos/ItemProyecto.css';

function ItemProyecto({ img, name, des, job, time, deployLink, repoLink, deployLinkApi, repoLinkApi }) {
    const timeFormat = time.split("-").reverse().join("/");
    return (
        <div className="item">
            <img src={img} alt={`${name}`} />
            <div className="name">{name}</div>
            <div className="des">{des}</div>

            <div className="links">
                {deployLink && (
                    <a href={deployLink} target="_blank" rel="noopener noreferrer" className="link-button">
                        Deploy 
                    </a>
                )}
                {deployLinkApi && (
                    <a href={deployLinkApi} target="_blank" rel="noopener noreferrer" className="link-button">
                        Deploy Api
                    </a>
                )}
                {repoLink && (
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="link-button">
                        Repositorio
                    </a>
                    
                )}
                {repoLinkApi && (
                    <a href={repoLinkApi} target="_blank" rel="noopener noreferrer" className="link-button">
                        Repositorio Api
                    </a>
                    
                )}
            </div>

            <div className="author">
                <div className="job">{job}</div>
                <div className="time">
                    {time&& timeFormat}
                    <i className="fa-regular fa-clock"></i>
                </div>
            </div>
        </div>
    );
}

export default ItemProyecto;
