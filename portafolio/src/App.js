import './App.css';
import Header from './Componentes/Header';
import Presentacion from './Componentes/Presentacion';
import EXP from './Componentes/EXP';
import Habilidades from './Componentes/Habilidades';
import Proyectos from './Componentes/Proyectos';
function App() {
  return (
    <div className="App">
      <Header />
      <Presentacion />
      <EXP />
      <Habilidades />
      <Proyectos />
    </div>
  );
}

export default App;
