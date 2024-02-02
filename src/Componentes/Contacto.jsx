import React from "react";
import '../Estilos/Contacto.css';

function Contacto(){
    return(
        <section className="tab" id="Contacto">
            <div className="container">
                <div className="thank text-gradient">
                    Gracias!
                </div>
                <div className="des">
                ¡Muchas gracias por visitar mi portafolio! Si tienes alguna pregunta, propuesta de colaboración o simplemente quieres charlar sobre tecnología, estaré encantado de escucharte. ¡No dudes en ponerte en contacto!
                    <br/>
                    <a data-tab="Inicio" href="Habilidades" className="text-gradient link-nav">Ve mi presentacion</a>
                </div>
                <div className="list">
                    <div className="item">
                        <i className="fa-brands fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/valentín-garro" target="blank">Valentin Garro</a>
                    </div>
                    <div className="item">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:nelsonvgarro@sanluis.edu.ar">nelsonvgarro@sanluis.edu.ar</a>
                    </div>
                    <div className="item">
                    <i className="fa-solid fa-file"></i>
                        <a href="/CV-IT.pdf" download="CV-IT" target="blank"  rel="noopener noreferrer">Ve mi CV!</a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Contacto;