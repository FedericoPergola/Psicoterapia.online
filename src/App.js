import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import LineaDiv from './components/LineaDiv/LineaDiv';
import Bienvenidos from './components/Bienvenidos/Bienvenidos';
import NuestraHistoria from './components/NuestraHistoria/NuestraHistoria';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Bienvenidos />
      <NuestraHistoria />
    </div>
  );
}

export default App;
