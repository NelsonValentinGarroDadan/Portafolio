import {React, lazy } from "react";
import '../Estilos/Educacion.css';
import { FaGraduationCap, FaBook, FaReact} from "react-icons/fa";
const ItemEdu = lazy(()=>import('./ItemEdu')) ;


function Educacion (){
    const experience = [
        {
          time: "2020",
          icon: FaGraduationCap,
          job: "Bachiller en Informática",
          company: "Colegio Nº40 'Héroes de Malvinas'",
          des:
            "Me gradué en el Bachiller Orientado a la Informática, con sólidos conocimientos en los fundamentos de la programación. Durante este período, adquirí un enfoque práctico en el lenguaje de programación C# y C++.",
        },
        {
          time: "2021",
          icon: FaBook,
          job: "Curso de Fundamentos de la Programación",
          company: "Argentina Programa #SePrograma",
          des:
            "Realicé este curso con el objetivo de ampliar mis conocimientos y habilidades en programación. Además, la finalidad era obtener una computadora con mejores características para mejorar mi entorno de estudio.",
        },
        {
          time: "2021",
          icon:FaBook,
          job: "Curso de Fundamentos de HTML, CSS y JavaScript",
          company: "Plataforma de cursos online",
          des:
            "Completé un curso intensivo de HTML, CSS y JavaScript con una duración de 30 horas. Este curso fue una iniciativa personal para complementar los conocimientos adquiridos en la carrera y fortalecer mis habilidades en el desarrollo web.",
        },
        {
          time: "2023",
          icon: FaReact,
          job: "Curso de Introducción a React",
          company: "Plataforma de cursos online",
          des:
            "Realicé un curso de introducción a React con una duración de 10 horas. Aunque no profundiza en todos los aspectos, me proporcionó los fundamentos necesarios para comenzar a trabajar con esta biblioteca y desarrollar aplicaciones web más dinámicas.",
        },
      ];
    return(
      <section className="tab" id="Educacion" >
          <div className="container">
               <div className="list">
                    {
                        experience.map((edu)=>{
                            return(<ItemEdu 
                                key={edu.job}
                                time={edu.time}
                                icon={edu.icon}
                                job={edu.job}
                                company={edu.company}
                                des={edu.des}
                            />)
                        })
                    }
               </div>
          </div>
      </section>
    );
}

export default Educacion;