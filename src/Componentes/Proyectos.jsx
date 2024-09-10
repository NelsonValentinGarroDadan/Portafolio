import React , {lazy} from "react";
import '../Estilos/Proyectos.css';
const ItemProyecto = lazy(()=>import('./ItemProyecto'));
function Proyectos(){
    const proyects =[
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/testimonios",
            "img" : "./Imagenes/Proyectos/testimonios.webp",
            "name" : "Listado de testimonios",
            "des" : "Una aplicación que muestra un listado de testimonios. Desarrollada como parte de las prácticas de React, se centra en los conceptos de componentes.",
            "job" : "React",
            "time" : "08/10/2023 ",
        }
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/clicks",
            "img" : "./Imagenes/Proyectos/contador_clicks.webp",
            "name" : "Contador de clicks",
            "des" : "En el marco de las prácticas de React, creé este contador de clicks utilizando el hook useState. Muestra el número de clicks en un botón, con la opción de reiniciar el contador.",
            "job" : "React",
            "time" : "09/10/2023 ",
        },
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/calculadora",
            "img" : "./Imagenes/Proyectos/calculadora.webp",
            "name" : "Calculadora",
            "des" : "Desarrollé esta calculadora simple como práctica del curso de React. La aplicación implementa operaciones básicas y presenta una interfaz intuitiva y fácil de usar.",
            "job" : "React",
            "time" : "13/11/2023 ",
        }
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/tareas",
            "img" : "./Imagenes/Proyectos/tareas.webp",
            "name" : "Listado de tareas",
            "des" : "Continuando con las prácticas de React y el uso de hooks, diseñé esta aplicación para ingresar, listar y eliminar tareas. Ofrece una interfaz simple y funcional.",
            "job" : "React",
            "time" : "17/11/2023 ",
        }
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/Netflis",
            "img" : "./Imagenes/Proyectos/netflis.webp",
            "name" : "Netflis",
            "des" : 'Netflis es una plataforma de streaming 100% original (por favor, ignoren las similitudes con cualquier otra plataforma que puedan conocer).',
            "job" : "HTML-CSS-Boostrap-JS-Axios",
            "time" : "04/09/2024 ",
        }
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/NetflisAPI",
            "img" : "./Imagenes/Proyectos/netflis.webp",
            "name" : "Netflis API",
            "des" : 'API que devuelve peliculas de una MongoDB.',
            "job" : "JS-Node-Moongose-MongoDB",
            "time" : "03/09/2024 ",
        },
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/Ideas",
            "img" : "./Imagenes/",
            "name" : "Idia Mural",
            "des" : 'Idea Mural es una aplicación web para agregar y visualizar ideas. Desplegada en Render.',
            "job" : "TypeScript-Express-MongoDB",
            "time" : "03/09/2024 ",
        }
    ]
    return(
        <section className="tab" id="Proyectos">
            <div className="container">
                <div className="list">
                    {
                        proyects.map((pro)=>{
                            return(
                                <ItemProyecto 
                                    key={pro.name}
                                    link={pro.link}
                                    name={pro.name}
                                    img={pro.img}
                                    des={pro.des}
                                    job={pro.job}
                                    time={pro.time}
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