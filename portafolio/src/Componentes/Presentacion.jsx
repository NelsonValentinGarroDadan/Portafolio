import React from "react";
import '../Estilos/Presentacion.css'
function Presentacion (){
    return(
        <section className="tab" id="Inicio" >
            <div className="container">
                <div className="avatar">
                    <img src='/Imagenes/avatar_sinbg.png'  alt=""/>
                </div>
                <div className="content">
                    <div className="name">Valentin Garro</div>
                    <div className="job">
                        <span className="text-gradient"> Desarrolador Web Junior</span>
                    </div>
                    <div className="des">
                    ¡Hola! Soy Valentin Garro, estudiante de la Tecnicatura Universitaria de Desarrollo de Software en la Universidad de la Punta, San Luis, Argentina. Me considero un apasionado desarrollador web con habilidades que abarcan desde HTML, CSS, JavaScript, Node.js, C#, C++, y .NET hasta Java, SQL, React y Android Studio. ¡Estoy listo para enfrentar nuevos desafíos y aprovechar oportunidades de aprendizaje! <br></br>
                        <a data-tab="Habilidades"  className="text-gradient link-nav">
                            Ve mis habilidades
                        </a>
                    </div>
                    <i className="fa-solid fa-quote-right"></i>
                </div>
            </div>
        </section>
    );
}

export default Presentacion;