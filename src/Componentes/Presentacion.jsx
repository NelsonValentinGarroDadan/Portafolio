import React from "react";
import '../Estilos/Presentacion.css'
import { FaQuoteRight } from "react-icons/fa";
function Presentacion (){
   
    return(
        <section className="tab active" id="Inicio" >
            <div className="container">
                <div className="avatar">
                    <img fetchpriority="high" src='./Imagenes/avatar_sinbg.webp'  alt="avtar-pinguino"/>
                </div>
                <div className="content">
                    <div className="name">Valentin Garro</div>
                    <div className="job">
                        <span className="text-gradient"> Desarrollador Web </span>
                    </div>
                    <div className="des">
                        Hola, soy Valentín Garro. Me dedico a desarrollar aplicaciones web utilizando tecnologías como JavaScript, TypeScript, React, Node.js, NestJS, Next.js, TailwindCSS, MongoDB y PostgreSQL.<br/> Disfruto creando soluciones prácticas y funcionales que marcan la diferencia. <br/>¡Estoy listo para enfrentar nuevos desafíos y seguir creciendo con cada experiencia! <br></br>
                    </div>
                    <div className="btn-skills">
                        <a data-tab="Habilidades" href="Habilidades" className="text-gradient link-nav">
                            Ve mis habilidades
                        </a>
                    </div>
                    <FaQuoteRight className="comillas"/>
                </div>
            </div>
        </section>
    );
}

export default Presentacion;