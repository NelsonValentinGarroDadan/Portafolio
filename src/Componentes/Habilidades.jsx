import {React , lazy} from "react";
import '../Estilos/Habilidades.css';
const ItemHabilidad = lazy(()=>import('./ItemHabilidad')) ;

function Habilidades(){
  const skills = [
  // FRONTEND FUERTE
  {
    name: "React",
    icon: "./Imagenes/Habilidades/react_icon.webp",
    des: "Desarrollo de interfaces reactivas y eficientes, priorizando UX y rendimiento.",
  },
  {
    name: "Next.js",
    icon: "./Imagenes/Habilidades/nextjs_icon.webp",
    des: "Aplicaciones web rápidas y SEO-friendly con renderizado del lado del servidor.",
  },
  {
    name: "Tailwind CSS",
    icon: "./Imagenes/Habilidades/tailwind_icon.webp",
    des: "Estilos modernos y consistentes con enfoque en rapidez y mantenibilidad.",
  },
  {
    name: "Bootstrap",
    icon: "./Imagenes/Habilidades/boostrap_icon.webp",
    des: "Creación de interfaces responsivas y atractivas con componentes predefinidos.",
  },
  {
  name: "Responsive Design",
  icon: "./Imagenes/Habilidades/responsive_icon.webp",
  des: "Creación de interfaces que se adaptan a distintos dispositivos y tamaños de pantalla, asegurando buena experiencia de usuario.",
  },

  // BACKEND FUERTE
  {
    name: "Node.js",
    icon: "./Imagenes/Habilidades/node_icon.webp",
    des: "Desarrollo de aplicaciones del lado del servidor escalables y eficientes.",
  },
  {
    name: "Express.js",
    icon: "./Imagenes/Habilidades/express_icon.webp",
    des: "Aplicaciones web robustas y modulares en conjunto con Node.js.",
  },
  {
    name: "NestJS",
    icon: "./Imagenes/Habilidades/nestjs_icon.webp",
    des: "Backend modular y escalable con arquitectura orientada a microservicios.",
  },
  {
    name: "JWT",
    icon: "./Imagenes/Habilidades/jwt_icon.webp",
    des: "Autenticación y autorización segura usando JSON Web Tokens.",
  },

  // BASES DE DATOS
  {
  name: "SQL",
  icon: "./Imagenes/Habilidades/sql_icon.webp",
  des: "Dominio en bases de datos relacionales, escritura de consultas eficientes y optimización de modelos de datos.",
  }, 
  {
    name: "PostgreSQL",
    icon: "./Imagenes/Habilidades/pgsql_icon.webp",
    des: "Bases de datos relacionales avanzadas, consultas eficientes y modelado complejo.",
  },
  {
    name: "MongoDB",
    icon: "./Imagenes/Habilidades/mongo_icon.webp",
    des: "Bases de datos no relacionales para datos flexibles y escalables.",
  },
  {
    name: "TypeORM",
    icon: "./Imagenes/Habilidades/typeorm_icon.webp",
    des: "Interacción con bases de datos relacionales de forma eficiente y orientada a objetos.",
  },
  {
    name: "Prisma",
    icon: "./Imagenes/Habilidades/prisma_icon.webp",
    des: "ORM moderno que simplifica la interacción con bases de datos y asegura consistencia.",
  },
  {
    name: "Mongoose",
    icon: "./Imagenes/Habilidades/mongoose_icon.webp",
    des: "Modelado de datos para MongoDB con validación y esquemas claros.",
  },

  // LENGUAJES
  {
    name: "JavaScript",
    icon: "./Imagenes/Habilidades/js_icon.webp",
    des: "Programación sólida del lado del cliente y servidor, resolviendo problemas complejos.",
  },
  {
    name: "TypeScript",
    icon: "./Imagenes/Habilidades/ts_icon.webp",
    des: "Tipado estático para escalabilidad, mantenibilidad y seguridad en proyectos grandes.",
  },
  {
    name: "HTML5",
    icon: "./Imagenes/Habilidades/html_icon.webp",
    des: "Estructura web clara y semántica, compatible con estándares modernos.",
  },
  {
    name: "CSS3",
    icon: "./Imagenes/Habilidades/css_icon.webp",
    des: "Estilos modernos y responsivos que mejoran la experiencia visual.",
  },

  // OTROS
  {
    name: "Swagger",
    icon: "./Imagenes/Habilidades/swagger_icon.webp",
    des: "Documentación de APIs clara y profesional para equipos y clientes.",
  },
  {
    name: "Scrum",
    icon: "./Imagenes/Habilidades/scrum_icon.webp",
    des: "Metodología ágil para organizar proyectos de manera eficiente y colaborativa.",
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