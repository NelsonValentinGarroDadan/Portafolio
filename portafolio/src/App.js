import './App.css';
import Header from './Componentes/Header';
import Presentacion from './Componentes/Presentacion';
import EXP from './Componentes/EXP';
import Habilidades from './Componentes/Habilidades';
import Proyectos from './Componentes/Proyectos';
import Contacto from './Componentes/Contacto';
function Navegation(){
  const links = document.querySelectorAll('.link-nav');
  const zIndex = 2;
  const active = "Presentacion";
  let valueTab;
  let tabActive;
  links.forEach( a => {
    a.addEventListener('click' , (e)=>{
      valueTab = a.dataset.tab;
      if(valueTab && valueTab !== active){
        tabActive = document.getElementById(valueTab);
        zIndex++;
        tabActive.style.zIndex = zIndex;
        active = valueTab;
        tabActive.classList.add('active');
      }
    })
  })
}
function App() {
  return (
    <div className="App">
      <Header />
      <Presentacion />
      <EXP />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
