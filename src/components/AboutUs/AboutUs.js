import arrowViolet from '../../assests/arrowViolet.svg';
import aboutUsTitle from '../../assests/aboutUsTitle.svg';
import bgAboutUs from '../../assests/bgAboutUs.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id="aboutUs" className='d-flex flex-column'>
            <div className='bg-container'>
                <img className='bg-aboutUs d-none d-sm-block' src={bgAboutUs} alt='...'/>
            </div>
            <div className='d-flex justify-content-center'>
                <img className='img-flecha' src={arrowViolet} alt='flecha'/>            
            </div>
            <div className='d-flex flex-column container-conoceNH'>
                <div className='container-fluid d-flex justify-content-center pt-5'>
                    <img className='img-fluid p-1' src={aboutUsTitle} alt='Conoce nuestra historia'/>
                </div>
                <div className=' container-fluid d-flex justify-content-evenly p-5'>
                    <div className='card-conoceNH'>
                        <p className='card-text card-text-title d-none d-sm-block'>Contexto</p>
                        <p className='card-text text-mobile'>Psicoterapia Online surge a comienzos del año 2020, como consecuencia de la pandemia por COVID 19, como un espacio de contención psicosocial en un momento de inestabilidad mundial. A partir de esta situación, se desencadenaron ciertas acciones emocionales relacionadas a la salud mental: angustia, ansiedad, pánico, incertidumbre, desconfianza, indefensión, miedo al contagio, entre otras.</p>
                    </div>
                    <div className='card-conoceNH d-none d-sm-block'>
                        <p className='card-text card-text-title'>Comienzos</p>
                        <p className='card-text'>Iniciamos con un espacio de grupos de contención, abiertos y gratuitos a la comunidad.
                        En estos grupos se trabajaban las exigencias que el aislamiento obligatorio nos presentaba día tras día: la capacidad de adaptación, elaboración de los cambios, las ansiedades cotidianas, amenazas, incertidumbres, y situaciones personales que afrontábamos.</p>
                    </div>
                    <div className='card-conoceNH d-none d-sm-block'>
                        <p className='card-text card-text-title'>Actualidad</p>
                        <p className='card-text'>Luego de los primeros meses comenzamos a ofrecer nuestros servicios como terapeutas, en sesiones individuales y grupales. Y fueron sumándose al equipo psicólogos con diversas orientaciones, haciendo de Psicoterapia Online un espacio que responde a muchas necesidades de la salud mental.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;