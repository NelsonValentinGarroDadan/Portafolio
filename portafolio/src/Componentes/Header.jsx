import {React , useState} from "react";
import '../Estilos/Header.css'
import Link from "./Link";
function Header(){
    const [links, setLinks] = useState(
        [
            {"name": "Inicio", "active" : true},
            {"name": "EXP" ,"active": false},
            {"name":"Habilidades" , "active" : false},
            {"name":"Proyectos" , "active" : false},
            {"name":"Contactos" , "active" : false},

        ]
    );
   return (
        <header>
            <nav>
                {links.map((link)=>(
                    <Link 
                        key = {link.name}
                        name ={link.name}
                        active = {link.active}
                        click = {setLinks}
                    /> 
                    
                ))
                }
            </nav>
        </header>
    ); 
}

export default Header;