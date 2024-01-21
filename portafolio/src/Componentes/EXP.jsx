import React from "react";
import ItemExp from "./ItemExp";
import '../Estilos/EXP.css';

function EXP (){
    const experience = [
        {
          time: "2020",
          icon: "fa-solid fa-graduation-cap",
          job: "Bachiller en Informática",
          company: "Colegio Nº40 'Héroes de Malvinas'",
          des:
            "Me gradué en el Bachiller Orientado a la Informática, con sólidos conocimientos en los fundamentos de la programación. Durante este período, adquirí un enfoque práctico en el lenguaje de programación C# y C++.",
        },
        {
          time: "2021",
          icon: "fa-solid fa-book",
          job: "Curso de Fundamentos de la Programación",
          company: "Argentina Programa #SePrograma",
          des:
            "Realicé este curso con el objetivo de ampliar mis conocimientos y habilidades en programación. Además, la finalidad era obtener una computadora con mejores características para mejorar mi entorno de estudio.",
        },
        {
          time: "2021",
          icon: "fa-solid fa-book",
          job: "Curso de Fundamentos de HTML, CSS y JavaScript",
          company: "Plataforma de cursos online",
          des:
            "Completé un curso intensivo de HTML, CSS y JavaScript con una duración de 30 horas. Este curso fue una iniciativa personal para complementar los conocimientos adquiridos en la carrera y fortalecer mis habilidades en el desarrollo web.",
        },
        {
          time: "2023",
          icon: "fa-brands fa-react",
          job: "Curso de Introducción a React",
          company: "Plataforma de cursos online",
          des:
            "Realicé un curso de introducción a React con una duración de 10 horas. Aunque no profundiza en todos los aspectos, me proporcionó los fundamentos necesarios para comenzar a trabajar con esta biblioteca y desarrollar aplicaciones web más dinámicas.",
        },
      ];
    return(
      <div className="tab" id="EXP" >
          <div className="container">
               <div className="list">
                    {
                        experience.map((exp)=>{
                            return(<ItemExp 
                                key={exp.job}
                                time={exp.time}
                                icon={exp.icon}
                                job={exp.job}
                                company={exp.company}
                                des={exp.des}
                            />)
                        })
                    }
               </div>
          </div>
      </div>
    );
}

export default EXP;