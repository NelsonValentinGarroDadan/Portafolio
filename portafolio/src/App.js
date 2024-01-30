import './App.css';
import Header from './Componentes/Header';
import Presentacion from './Componentes/Presentacion';
import EXP from './Componentes/EXP';
import Habilidades from './Componentes/Habilidades';
import Proyectos from './Componentes/Proyectos';
import Contacto from './Componentes/Contacto';
import TabSwitcher from './Componentes/TabSwitcher';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentacion />
      <EXP />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <TabSwitcher />
    </div>
  );
}

export default App;
