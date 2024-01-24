import React from "react";
import '../Estilos/Proyectos.css';
import ItemProyecto from "./ItemProyecto";
function Proyectos(){
    const proyects =[
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/inmobiliariaGarro/",
            "img" : "/Imagenes/Proyectos/inmobiliariaGarro.png",
            "name" : "Inmobiliaria Garro",
            "des" : "Simula el funcionamiento de una inmobiliaria, siguiendo el patrón de diseño MVC. Utiliza tecnologías como Razor para las plantillas de vistas, Asp .net core, Boostrap para el estilo, y una base de datos MySQL.",
            "job" : "Full Stack",
            "time" : "15/09/2023 ",
        }
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/BiblotecaMobile",
            "img" : "/Imagenes/Proyectos/biblioteca.png",
            "name" : "Biblioteca Mobile",
            "des" : "Biblioteca Mobile es una aplicación Android desarrollada en Java que emula una biblioteca virtual. Su interfaz incluye un menú con todos los libros y una opción para cerrar la aplicación, siguiendo el patrón MVVM para una estructura eficiente.",
            "job" : "Mobile",
            "time" : "25/09/2023 ",
        }
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/inmobiliariaGarroAPI",
            "img" : "/Imagenes/Proyectos/inmobiliariaGarroApi.png",
            "name" : "Inmobiliaria Garro Api",
            "des" : "Una API diseñada para ser consumida por una aplicación móvil. Realiza consultas a una base de datos simulando las operaciones de una inmobiliaria, con verificación mediante JWT.",
            "job" : "Back-end",
            "time" : "26/09/2023 ",
        }
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/testimonios",
            "img" : "/Imagenes/Proyectos/testimonios.png",
            "name" : "Listado de testimonios",
            "des" : "Una aplicación que muestra un listado de testimonios. Desarrollada como parte de las prácticas de React, se centra en los conceptos de componentes.",
            "job" : "Front-end",
            "time" : "08/10/2023 ",
        }
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/clicks",
            "img" : "/Imagenes/Proyectos/contador_clicks.png",
            "name" : "Contador de clicks",
            "des" : "En el marco de las prácticas de React, creé este contador de clicks utilizando el hook useState. Muestra el número de clicks en un botón, con la opción de reiniciar el contador.",
            "job" : "Front end",
            "time" : "09/10/2023 ",
        },
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/calculadora",
            "img" : "/Imagenes/Proyectos/calculadora.png",
            "name" : "Calculadora",
            "des" : "Desarrollé esta calculadora simple como práctica del curso de React. La aplicación implementa operaciones básicas y presenta una interfaz intuitiva y fácil de usar.",
            "job" : "Front end",
            "time" : "13/11/2023 ",
        }
        
        ,
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/inmobiliariaGarroAPI",
            "img" : "/Imagenes/Proyectos/inmobiliariaGarroApp.png",
            "name" : "Inmobiliaria Garri App",
            "des" : "Aplicación móvil para Android que consume la API anterior. Permite a los propietarios consultar y subir propiedades, realizar llamadas y gestionar su información. Desarrollada en Java con Retrofit.",
            "job" : "Back-end / Mobile",
            "time" : "15/10/2023 ",
        },
        {
            "link" : "https://github.com/NelsonValentinGarroDadan/tareas",
            "img" : "/Imagenes/Proyectos/tareas.png",
            "name" : "Listado de tareas",
            "des" : "Continuando con las prácticas de React y el uso de hooks, diseñé esta aplicación para ingresar, listar y eliminar tareas. Ofrece una interfaz simple y funcional.",
            "job" : "Front end",
            "time" : "17/11/2023 ",
        }
        
        ,
        {
            "link" : "https://nelsonvalentingarrodadan.github.io/ConsultorioEducacionEspecial/",
            "img" : "/Imagenes/Proyectos/consultorio.png",
            "name" : "Consultorio de Educacion Especial",
            "des" : "Desarrollé un sitio web para un consultorio de educación especial como proyecto final. Utilicé React y emailjs para la gestión de correos electrónicos, y añadí reCaptcha para mejorar la seguridad.",
            "job" : "Front-end",
            "time" : "22/12/2023 ",
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