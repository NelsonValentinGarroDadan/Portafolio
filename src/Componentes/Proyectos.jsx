import React , {lazy} from "react";
import '../Estilos/Proyectos.css';
const ItemProyecto = lazy(()=>import('./ItemProyecto'));
function Proyectos(){
    let proyects =[
        {
            "repoLink" : "https://github.com/NelsonValentinGarroDadan/testimonios",
            "img" : "./Imagenes/Proyectos/testimonios.webp",
            "name" : "Listado de testimonios",
            "des" : "Una aplicación que muestra un listado de testimonios. Desarrollada como parte de las prácticas de React, se centra en los conceptos de componentes.",
            "job" : "React",
            "time" : "2023-10-08",
        },
        {
            "repoLink" : "https://github.com/NelsonValentinGarroDadan/clicks",
            "img" : "./Imagenes/Proyectos/contador_clicks.webp",
            "name" : "Contador de clicks",
            "des" : "En el marco de las prácticas de React, creé este contador de clicks utilizando el hook useState. Muestra el número de clicks en un botón, con la opción de reiniciar el contador.",
            "job" : "React",
            "time" : "2023-10-09",
        },
        {
            "repoLink" : "https://github.com/NelsonValentinGarroDadan/calculadora",
            "img" : "./Imagenes/Proyectos/calculadora.webp",
            "name" : "Calculadora",
            "des" : "Desarrollé esta calculadora simple como práctica del curso de React. La aplicación implementa operaciones básicas y presenta una interfaz intuitiva y fácil de usar.",
            "job" : "React",
            "time" : "2023-11-13",
        },
        {
            "repoLink" : "https://github.com/NelsonValentinGarroDadan/tareas",
            "img" : "./Imagenes/Proyectos/tareas.webp",
            "name" : "Listado de tareas",
            "des" : "Continuando con las prácticas de React y el uso de hooks, diseñé esta aplicación para ingresar, listar y eliminar tareas. Ofrece una interfaz simple y funcional.",
            "job" : "React",
            "time" : "2023-11-17",
        },
        {
            "deployLink": "https://nelsonvalentingarrodadan.github.io/Netflis/index.html",
            "repoLink" : "https://github.com/NelsonValentinGarroDadan/Netflis",
            "deployLinkApi": "https://netflisapi.onrender.com/movies",
            "repoLinkApi" : "https://github.com/NelsonValentinGarroDadan/NetflisAPI",
            "img" : "./Imagenes/Proyectos/netflis.webp",
            "name" : "Netflis",
            "des" : "Netflis es una plataforma de streaming 100% original (por favor, ignoren las similitudes con cualquier otra plataforma que puedan conocer).",
            "job" : "HTML CSS Boostrap JS Axios",
            "time" : "2024-09-04",
        },
        {
            "deployLink": "https://ideas-633x.onrender.com/ideas",
            "repoLink" : "https://github.com/NelsonValentinGarroDadan/ideas",
            "img" : "./Imagenes/Proyectos/ideas.webp",
            "name" : "Mural de Ideas",
            "des" : "Aplicación web para compartir y visualizar ideas. Desplegada en Render y con una base de datos mongo.",
            "job" : "TypeScript Express MongoDB",
            "time" : "2024-09-10",
        },
        {
            "deployLinkApi": "https://ecommerce-peh6.onrender.com/api",      
            "repoLinkApi": "https://github.com/NelsonValentinGarroDadan/backend-ecommerce",
            "img": "./Imagenes/Proyectos/ecommerce.webp",
            "name": "E-commerce Backend",
            "des": "Backend de una tienda en línea con autenticación JWT, documentación Swagger y pruebas E2E. Desarrollado para practicar Nest.js y una arquitectura modular.",
            "job": "NestJS PostgreSQL Swagger",
            "time": "2024-11-20",
        },
        {
            "deployLink": "https://buddifytest.vercel.app/",
            "repoLink" : "https://github.com/chi-bosio/Buddify",
            "deployLinkApi": "https://buddify-api-ju0h.onrender.com/api",
            "repoLinkApi" : "https://github.com/chi-bosio/Buddify_API",
            "img" : "./Imagenes/Proyectos/buddify.webp",
            "name" : "Buddify",
            "des" : "App web de actividades en grupo a ciegas con geolocalización y chat en tiempo real. Incluye autenticación OAuth 2.0 y funcionalidades premium.",
            "job" : "Next.js NestJS MongoDB",
            "time" : "2024-12-12",
        },
        {
            "repoLink" : "https://github.com/NelsonValentinGarroDadan/GuessTheSong",
            "img" : "./Imagenes/Proyectos/guessthesong.webp",
            "name" : "Guess The Song",
            "des" : "Juego en línea donde los usuarios adivinan canciones de un artista escuchando fragmentos. Utiliza Next.js y NestJS para una experiencia interactiva y amigable.",
            "job" : "Next.js TypeScript Express MongoDB",
            "time" : "2024-12-15",
        },
        {
            "deployLink": "https://e-commerce-mu-silk-58.vercel.app/",
            "repoLink" : "https://github.com/NelsonValentinGarroDadan/E-commerce-Challenge-BC",
            "img": "./Imagenes/Proyectos/ecomerceChanllenge.webp",
            "name": "E-commerce Challenge",
            "des": "Challenge técnico para construir una tienda online con Next.js, Tailwind y React Query. Incluye catálogo, carrito persistente, autenticación simulada y diseño responsive con tema claro/oscuro.",
            "job": "Next.js Tailwind ReactQuery Zustand",
            "time": "2025-04-19"
        },
        {
        "img" : "./Imagenes/Proyectos/plataforma_inmobiliaria.webp",
        "name" : "Plataforma Integral de Administración Inmobiliaria (Full-Stack)",
        "des" : "Coradir S.A. Lideré la reestructuración full-stack (Next.js/Express.js) de un sistema inmobiliario existente. Implementé una arquitectura modular robusta (JWT, Prisma, Swagger, manejo de errores) y lógica avanzada para cálculo de intereses (IPC/mora), multas y gestión contractual.",
        "job" : "Next.js, Express.js, TypeScript, Tailwind CSS, Redux, Zustand, JWT, Prisma, PostgreSQL, Swagger.",
        "time" : "2025-08-15",
        "company": "Coradir S.A.", // Añadido para mejor identificación visual si tu componente lo usa.
        },
        // 2. Espejo Mágico
        {
            "img" : "./Imagenes/Proyectos/espejo_magico.webp",
            "name" : "Prototipo de Interfaz Inteligente (GPT Realtime/TTS)",
            "des" : "Coradir S.A. Prototipo interactivo basado en investigación try-it-out. Integración de GPT en tiempo real para conversación, Text-to-Speech (TTS) y FluxContext para la gestión de estado. Demostración de adopción rápida de tecnologías de IA complejas.",
            "job" : "TypeScript, Node.js, GPT Realtime, TTS APIs, FluxContext.",
            "time" : "2025-07-20", 
            "company": "Coradir S.A.",
        },
        // 3. Coradir Homes (Más reciente de las landings)
        {
            "img" : "./Imagenes/Proyectos/coradir_homes.webp",
            "name" : "Landing Page: Coradir Homes (Lead Generation)",
            "des" : "Coradir S.A. Desarrollo de landing extensa (Next.js/Tailwind) para la rama Homes. Proyecto finalizado con alta UX/UI y sistema de Lead Generation automatizado: n8n orquesta datos tras la validación de consultas mediante IA.",
            "job" : "Next.js, Tailwind CSS, TypeScript, n8n, Express, PostgreSQL, IA.",
            "time" : "2025-07-15", 
            "company": "Coradir S.A.",
        },
        // 4. Coradir Seguridad (Con URL pública)
        {
            "deployLink": "https://seguridad.coradir.com.ar/",
            "img" : "./Imagenes/Proyectos/coradir_seguridad.webp",
            "name" : "Landing Page: Coradir Seguridad (Desplegada)",
            "des" : "Coradir S.A. Desarrollo full-stack (Next.js/Tailwind) para la rama Seguridad. Implementé sistema de Lead Generation en producción: n8n orquesta datos tras la validación de consultas mediante IA (similar a Homes). Diseño responsive validado por auditorías.",
            "job" : "Next.js, Tailwind CSS, TypeScript, n8n, Express, PostgreSQL, IA.",
            "time" : "2025-07-01", 
            "company": "Coradir S.A.",
        },
        {
            deployLink: "https://nelsonvalentingarrodadan.github.io/NovaLink",
            repoLink: "https://github.com/NelsonValentinGarroDadan/NovaLink",
            img: "./Imagenes/Proyectos/NovaLink.webp",
            name: "NovaLink",
            des: "Proyecto integrador de la materia Web 1. Sitio web estático desarrollado con HTML, CSS y JavaScript, con navegación responsive, menú burger y formulario de contacto con validación y mensaje de éxito.",
            job: "HTML CSS JavaScript",
            time: "2025-10-07"
        }
    ];
    proyects.sort((a,b)=>new Date(b.time) - new Date(a.time));
    return(
        <section className="tab" id="Proyectos">
            <div className="container">
                <div className="list">
                    {
                        proyects.map((pro)=>{
                            return(
                                <ItemProyecto 
                                    key={pro.name}
                                    {...pro}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Proyectos;
