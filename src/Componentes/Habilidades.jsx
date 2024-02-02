import React from "react";
import ItemHabilidad from "./ItemHabilidad";
import '../Estilos/Habilidades.css';
function Habilidades(){
  const skills = [
    {
      "name": "HTML5",
      "icon": "./Imagenes/html_icon.png",
      "des": "Dominio de la estructura básica para crear páginas web, semántica y compatible con las últimas especificaciones.",
    },
    {
      "name": "CSS3",
      "icon": "./Imagenes/css_icon.png",
      "des": "Experiencia en estilos modernos y responsive design para mejorar la presentación y el aspecto visual de las páginas web.",
    },
    {
      "name": "JavaScript",
      "icon": "./Imagenes/js_icon.png",
      "des": "Conocimientos sólidos en programación del lado del cliente para crear interactividad y mejorar la experiencia del usuario.",
    },
    {
      "name": "Java",
      "icon": "./Imagenes/java_icon.png",
      "des": "Familiaridad con la programación orientada a objetos y su aplicación en el desarrollo de aplicaciones empresariales.",
    },
    {
      "name": "C#",
      "icon": "./Imagenes/c_icon.png",
      "des": "Experiencia en el desarrollo de aplicaciones con el lenguaje de programación C# para plataformas Windows y .NET.",
    },
    {
      "name": "SQL",
      "icon": "./Imagenes/sql_icon.png",
      "des": "Conocimientos en el diseño y administración de bases de datos relacionales para almacenar y gestionar datos de manera eficiente.",
    },
    {
      "name": ".NET",
      "icon": "./Imagenes/net_icon.png",
      "des": "Experiencia en el desarrollo de aplicaciones usando el framework .NET para crear soluciones robustas y escalables.",
    },
    {
      "name": "React",
      "icon": "./Imagenes/react_icon.png",
      "des": "Habilidad en el desarrollo de interfaces de usuario reactivas y eficientes utilizando la biblioteca React.",
    },
    {
      "name": "Bootstrap",
      "icon": "./Imagenes/boostrap_icon.png",
      "des": "Utilización de Bootstrap para facilitar el desarrollo de interfaces web atractivas y responsivas.",
    },
    {
      "name": "Node.js",
      "icon": "./Imagenes/node_icon.png",
      "des": "Conocimientos en la creación de aplicaciones del lado del servidor utilizando Node.js para entornos altamente escalables.",
    },
    {
      "name": "Express.js",
      "icon": "./Imagenes/express_icon.png",
      "des": "Experiencia en el desarrollo de aplicaciones web robustas utilizando el framework Express.js en conjunto con Node.js.",
    },
    {
      "name": "Pug",
      "icon": "./Imagenes/pug_icon.png",
      "des": "Familiaridad con el motor de plantillas Pug para simplificar la creación de vistas en aplicaciones web.",
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