import './App.css';
import {lazy} from 'react';
const Header = lazy(()=>import( './Componentes/Header'));
const Presentacion = lazy(()=>import( './Componentes/Presentacion'));
const EXP = lazy(()=>import( './Componentes/EXP'));
const Habilidades = lazy(()=>import( './Componentes/Habilidades'));
const Proyectos = lazy(()=>import( './Componentes/Proyectos'));
const Contacto = lazy(()=>import( './Componentes/Contacto'));
const TabAnimacion = lazy(()=>import( './Componentes/TabAnimacion'));
function App() {
  return (
    <div className="App">
      <Header />
      <Presentacion />
      <EXP />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <TabAnimacion />
    </div>
  );
}

export default App;
