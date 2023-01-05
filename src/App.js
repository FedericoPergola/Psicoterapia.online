import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Team from './components/Team/Team';
import Services from '../src/components/Services/Services'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='background'>
      <Team />
      <Services />
      </div>
    </div>
  );
}

export default App;
