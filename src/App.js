import './App.css';
import Header from './Componentes/Header';
import Presentacion from './Componentes/Presentacion';
import EXP from './Componentes/EXP';
import Habilidades from './Componentes/Habilidades';
import Proyectos from './Componentes/Proyectos';
import Contacto from './Componentes/Contacto';
import TabAnimacion from './Componentes/TabAnimacion';

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
