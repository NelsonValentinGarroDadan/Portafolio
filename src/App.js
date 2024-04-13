import './App.css';
import {lazy} from 'react';
const Header = lazy(()=>import( './Componentes/Header'));
const Presentacion = lazy(()=>import( './Componentes/Presentacion'));
const Educacion = lazy(()=>import( './Componentes/Educacion'));
const Habilidades = lazy(()=>import( './Componentes/Habilidades'));
const Proyectos = lazy(()=>import( './Componentes/Proyectos'));
const Contacto = lazy(()=>import( './Componentes/Contacto'));
const TabAnimacion = lazy(()=>import( './Componentes/TabAnimacion'));
function App() {
  return (
    <div className="App">
      <Header />
      <Presentacion />
      <Educacion  />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <TabAnimacion />
    </div>
  );
}

export default App;
