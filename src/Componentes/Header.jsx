import {React , lazy } from "react";
import '../Estilos/Header.css'
const Link = lazy (()=>import('./Link'));
function Header(){
    const links=
        [
            {"name": "Inicio", "active" : true},
            {"name": "Trayectoria" ,"active": false},
            {"name":"Habilidades" , "active" : false},
            {"name":"Proyectos" , "active" : false},
            {"name":"Contacto" , "active" : false},

        ];
   return (
        <header>
            <nav>
                {links.map((link)=>(
                    <Link 
                        key = {link.name}
                        name ={link.name}
                        active = {link.active}
                    /> 
                    
                ))
                }
            </nav>
        </header>
    ); 
}

export default Header;