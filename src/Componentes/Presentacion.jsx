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
                        <span className="text-gradient"> Desarrolador Web Junior</span>
                    </div>
                    <div className="des">
                    ¡Hola! Soy Valentin Garro, desarrollador web junior. Me considero un apasionado desarrollador web con habilidades que abarcan desde HTML, CSS, JavaScript y Node.js hasta MongoDB, SQL, React y Express. <br/>¡Estoy listo para enfrentar nuevos desafíos y aprovechar oportunidades de aprendizaje! <br></br>
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