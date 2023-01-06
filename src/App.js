import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import LineaDiv from './components/LineaDiv/LineaDiv';
import Bienvenidos from './components/Bienvenidos/Bienvenidos';
import NuestraHistoria from './components/NuestraHistoria/NuestraHistoria';
import Services from '../src/components/Services/Services'
import Team from '../src/components/Team/Team'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Bienvenidos />
      <NuestraHistoria />
      <div className='background'>
        <Team />
        <Services />
      </div>
    </div>
  );
}

export default App;
