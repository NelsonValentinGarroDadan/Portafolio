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
      "name": "SQL",
      "icon": "./Imagenes/Habilidades/sql_icon.webp",
      "des": "Conocimientos en el diseño y administración de bases de datos relacionales para almacenar y gestionar datos de manera eficiente.",
    },
    {
      "name": "React",
      "icon": "./Imagenes/Habilidades/react_icon.webp",
      "des": "Habilidad en el desarrollo de interfaces de usuario reactivas y eficientes utilizando la biblioteca React.",
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