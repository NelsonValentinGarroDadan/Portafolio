import React from "react";
import '../Estilos/Proyectos.css';
import ItemProyecto from "./ItemProyecto";
function Proyectos(){
    const proyects =[
        {
            "link" : "",
            "img" : "",
            "name" : "",
            "des" : "",
            "job" : "",
            "time" : "",
        }
        ,
        {
            "link" : "",
            "img" : "",
            "name" : "",
            "des" : "",
            "job" : "",
            "time" : "",
        },
        {
            "link" : "",
            "img" : "",
            "name" : "",
            "des" : "asdasdasdasd",
            "job" : "",
            "time" : "",
        }
    ]
    return(
        <section className="tab" id="Proyectos">
            <div className="container">
                <div className="list">
                    {
                        proyects.map((pro , index)=>{
                            return(
                                <ItemProyecto 
                                    key={pro.name}
                                    link={pro.link}
                                    name={pro.name}
                                    img={pro.img}
                                    des={pro.des}
                                    job={pro.job}
                                    time={pro.job}
                                    index={index}
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