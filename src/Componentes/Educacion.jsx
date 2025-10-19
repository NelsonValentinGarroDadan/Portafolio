import {React, lazy } from "react";
import '../Estilos/Educacion.css';
import { FaGraduationCap, FaBook, FaReact, FaBriefcase} from "react-icons/fa";
const ItemEdu = lazy(()=>import('./ItemEdu')) ;


function Educacion (){
    const experience = [
        {
            time: "Jun 2025 – Sep 2025",
            icon: FaBriefcase,
            job: "Jr. Full Stack Developer",
            company: "Coradir SA",
            des:
              "Soluciones Full Stack enfocadas en mantenibilidad (Next.js, NestJS, Express). Lideré la reestructuración de módulos críticos (JWT, cronjobs) de una app inmobiliaria. Prototipado e integración IA (GPT Realtime, TTS) para proyecto de espejo inteligente. Implementación de flujo de leads automatizado (n8n + IA) y mejoras en la documentación técnica.",
        },
        {
            time: "Mar 2025 – Jun 2025",
            icon: FaBriefcase,
            job: "Pasantía - Front-End Developer",
            company: "DEVDATEP CONSULTING",
            des:
              "Implementación de funcionalidades Front-End (React + TypeScript) para plataforma de festivales, priorizando UX y rendimiento. Coordinación con diseñadores para componentes reutilizables e integración fluida con el Backend. Participación activa en flujos ágiles (dailies, sprints) para el cumplimiento de hitos.",
        },
        
        {
            time: "Nov 2024 - Ene 2025",
            icon: FaBook,
            job: "Full Stack Teaching Assistant",
            company: "Henry",
            des:
              "En remoto. Coordinación de grupos de estudiantes para la integración en equipos de trabajo. Asistencia técnica en la resolución de ejercicios con JavaScript, Express, HTML, CSS y fomento de la colaboración (Pair Programming).",
        }, 
        {
            time: "Jul 2024 - Dic 2024",
            icon: FaBook,
            job: "Full Stack Developer",
            company: "Bootcamp intensivo de desarrollo web",
            des:
                "Completé un bootcamp intensivo de más de 800 horas que abarcó tanto el frontend como el backend, adquiriendo habilidades sólidas en tecnologías modernas como React, Node.js, Express y PostgreSQL. El programa incluyó proyectos prácticos que me permitieron aplicar y consolidar mis conocimientos en desarrollo web.",
        },
        {
            time: "Jun 2023",
            icon: FaReact,
            job: "Curso de Introducción a React",
            company: "Plataforma de cursos online",
            des:
                "Realicé un curso de introducción a React con una duración de 10 horas. Aunque no profundiza en todos los aspectos, me proporcionó los fundamentos necesarios para comenzar a trabajar con esta biblioteca y desarrollar aplicaciones web más dinámicas.",
        },
        {
            time: "Jun 2021",
            icon:FaBook,
            job: "Curso de Fundamentos de HTML, CSS y JavaScript",
            company: "Plataforma de cursos online",
            des:
                "Completé un curso intensivo de HTML, CSS y JavaScript con una duración de 30 horas. Este curso fue una iniciativa personal para complementar los conocimientos adquiridos en la carrera y fortalecer mis habilidades en el desarrollo web.",
        },
        {
            time: "Jun 2021",
            icon: FaBook,
            job: "Curso de Fundamentos de la Programación",
            company: "Argentina Programa #SePrograma",
            des:
                "Realicé este curso con el objetivo de ampliar mis conocimientos y habilidades en programación. Además, la finalidad era obtener una computadora con mejores características para mejorar mi entorno de estudio.",
        },
        {
            time: "Feb 2021 - Presente",
            icon: FaGraduationCap,
            job: "Tecnicatura, Desarrollo de Software",
            company: "Universidad de La Punta",
            des:
              "Actualmente cursando el último año de la carrera. Adquisición de conocimientos profundos en arquitectura de software, bases de datos y metodologías de desarrollo.",
        },
        {
            time: "Maz 2014 - Nov 2020",
            icon: FaGraduationCap,
            job: "Bachiller en Informática",
            company: "Colegio Nº40 'Héroes de Malvinas'",
            des:
                "Me gradué en el Bachiller Orientado a la Informática, con sólidos conocimientos en los fundamentos de la programación. Durante este período, adquirí un enfoque práctico en el lenguaje de programación C# y C++.",
        },
        
    ];
    return(
      <section className="tab" id="Trayectoria" >
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