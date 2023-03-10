import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome';
import AboutUs from './components/AboutUs/AboutUs';
import Services from '../src/components/Services/Services'
import Team from '../src/components/Team/Team'
import Steps from './components/Steps/Steps';
import Benefits from './components/Benefits/Benefits';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CR from './components/CopyRight/CopyRight';
import fondoTeam from '../src/assests/fondoTeam.png';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <AboutUs />
      <div className='section'>
        <div className='background'>
          <img className='bg-team' src={fondoTeam} alt='...'/>
        </div>
        <Team />
        <Services />
      </div>
      <Steps />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
      <CR />
    </div>
  );
}

export default App;
