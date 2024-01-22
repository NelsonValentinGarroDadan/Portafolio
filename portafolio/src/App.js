import './App.css';
import Header from './Componentes/Header';
import Presentacion from './Componentes/Presentacion';
import EXP from './Componentes/EXP';
import Habilidades from './Componentes/Habilidades';
function App() {
  return (
    <div className="App">
      <Header />
      <Presentacion />
      <EXP />
      <Habilidades />
    </div>
  );
}

export default App;
