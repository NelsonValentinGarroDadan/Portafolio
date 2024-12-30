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
