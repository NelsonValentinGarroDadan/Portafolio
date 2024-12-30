import {React , lazy} from "react";
import '../Estilos/Habilidades.css';
const ItemHabilidad = lazy(()=>import('./ItemHabilidad')) ;

function Habilidades(){
  const skills = [
    {
      "name": "HTML5",
      "icon": "./Imagenes/Habilidades/html_icon.webp",
      "des": "Dominio de la estructura básica para crear páginas web, semántica y compatible con las últimas especificaciones.",
    },
    {
      "name": "CSS3",
      "icon": "./Imagenes/Habilidades/css_icon.webp",
      "des": "Experiencia en estilos modernos y responsive design para mejorar la presentación y el aspecto visual de las páginas web.",
    },
    {
      "name": "JavaScript",
      "icon": "./Imagenes/Habilidades/js_icon.webp",
      "des": "Conocimientos sólidos en programación del lado del cliente para crear interactividad y mejorar la experiencia del usuario.",
    },
    {
      "name": "TypeScript",
      "icon": "./Imagenes/Habilidades/ts_icon.webp",
      "des": "Habilidad en la programación tipada para mejorar la escalabilidad y mantenibilidad de aplicaciones en proyectos frontend y backend.",
    },
    {
      "name": "TypeORM",
      "icon": "./Imagenes/Habilidades/typeorm_icon.webp",
      "des": "Experiencia en el manejo de ORM para interactuar con bases de datos relacionales de manera eficiente y orientada a objetos.",
    },
    {
      "name": "PostgreSQL",
      "icon": "./Imagenes/Habilidades/pgsql_icon.webp",
      "des": "Experiencia en bases de datos relacionales avanzadas con enfoque en consultas eficientes y modelado de datos complejo.",
    },
    {
      "name": "MongoDB",
      "icon": "./Imagenes/Habilidades/mongo_icon.webp",
      "des": "Conocimientos en bases de datos no relacionales para manejar datos flexibles y escalables en aplicaciones modernas.",
    },
    {
      "name": "React",
      "icon": "./Imagenes/Habilidades/react_icon.webp",
      "des": "Habilidad en el desarrollo de interfaces de usuario reactivas y eficientes utilizando la biblioteca React.",
    },
    {
      "name": "Next.js",
      "icon": "./Imagenes/Habilidades/nextjs_icon.webp",
      "des": "Dominio en el desarrollo de aplicaciones web rápidas y SEO-friendly con capacidades de renderizado del lado del servidor.",
    },
    {
      "name": "Bootstrap",
      "icon": "./Imagenes/Habilidades/boostrap_icon.webp",
      "des": "Utilización de Bootstrap para facilitar el desarrollo de interfaces web atractivas y responsivas.",
    },
    {
      "name": "Node.js",
      "icon": "./Imagenes/Habilidades/node_icon.webp",
      "des": "Conocimientos en la creación de aplicaciones del lado del servidor utilizando Node.js para entornos altamente escalables.",
    },
    {
      "name": "Express.js",
      "icon": "./Imagenes/Habilidades/express_icon.webp",
      "des": "Experiencia en el desarrollo de aplicaciones web robustas utilizando el framework Express.js en conjunto con Node.js.",
    },
    {
      "name": "NestJS",
      "icon": "./Imagenes/Habilidades/nestjs_icon.webp",
      "des": "Habilidad en el desarrollo de aplicaciones backend modulares y escalables con arquitectura orientada a microservicios.",
    },
    {
      "name": "JWT",
      "icon": "./Imagenes/Habilidades/jwt_icon.webp",
      "des": "Experiencia en la implementación de autenticación y autorización segura utilizando JSON Web Tokens.",
    },
    {
      "name": "Scrum",
      "icon": "./Imagenes/Habilidades/scrum_icon.webp",
      "des": "Conocimientos en la metodología ágil Scrum para organizar y desarrollar proyectos de manera colaborativa y eficiente.",
    },
  ];
  
    return(
        <section className="tab" id="Habilidades">
            <div className="container">
                <div className="list">
                    {
                        skills.map((skill)=>{
                            return(<ItemHabilidad 
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                    des={skill.des} 
                                    />);
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Habilidades;