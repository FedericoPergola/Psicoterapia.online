import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
// import LineaDiv from './components/LineaDiv/LineaDiv';
import Welcome from './components/Welcome/Welcome';
import AboutUs from './components/AboutUs/AboutUs';
import Services from '../src/components/Services/Services'
import Team from '../src/components/Team/Team'
import Steps from './components/Steps/Steps';
import Benefits from './components/Benefits/Benefits';
import FAQ from './components/FAQ/FAQ';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <AboutUs />
      <div className='background'>
        <Team />
        <Services />
      </div>
      <Steps />
      <Benefits />
      <FAQ />
    </div>
  );
}

export default App;
