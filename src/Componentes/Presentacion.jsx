import React from "react";
import '../Estilos/Presentacion.css'
import { FaQuoteRight } from "react-icons/fa";
function Presentacion (){
   
    return(
        <section className="tab active" id="Inicio" >
            <div className="container">
                <div className="avatar">
                    <img fetchpriority="high" src='./Imagenes/avatar_sinbg.AVIF'  alt="avtar-pinguino"/>
                </div>
                <div className="content">
                    <div className="name">Valentin Garro</div>
                    <div className="job">
                        <span className="text-gradient"> Desarrolador Web Junior</span>
                    </div>
                    <div className="des">
                    ¡Hola! Soy Valentin Garro, estudiante de la Tecnicatura Universitaria de Desarrollo de Software en la Universidad de la Punta, San Luis, Argentina. Me considero un apasionado desarrollador web con habilidades que abarcan desde HTML, CSS, JavaScript, Node.js, C#, C++, y .NET hasta Java, SQL, React y Android Studio. <br/>¡Estoy listo para enfrentar nuevos desafíos y aprovechar oportunidades de aprendizaje! <br></br>
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