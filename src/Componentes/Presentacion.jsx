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
                        <span className="text-gradient"> FullStack Developer </span>
                    </div>
                    <div className="des">
                        Full Stack Developer con fuerte enfoque en Backend, especializado en Node.js, NestJS, React y TypeScript.
                        Me adapto rápidamente a nuevos entornos y proyectos, analizando problemas con claridad y proponiendo soluciones eficientes.
                        Busco siempre un equilibrio entre un código sólido y entregas rápidas de producto, asegurando valor real para el equipo y los usuarios.
                        Trabajo de manera colaborativa, aprendiendo de cada desafío sin perder seguridad en mis capacidades técnicas.
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