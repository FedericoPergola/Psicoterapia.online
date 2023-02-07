import welcomeImg from '../../assests/welcomeImg.png';
import welcomeLyrics from '../../assests/welcomeLyrics.svg';
import instagram from '../../assests/instagram.png';
import whatsapp from '../../assests/whatsapp.png';
import linkedin from '../../assests/linkedin.png';
import ReactWhatsapp from 'react-whatsapp';
import './Welcome.css';

const Welcome = () => {
return (
    <div className='welcome container-fluid d-flex justify-content-around flex-row pt-5 mobile-version'>
        <div className='container-fluid p-5'>
            <div className='container-fluid'>
                <img className='mb-5  img-welcome' src={welcomeLyrics} alt='welcome'/>
            </div>
            <p className='text-justify pt-2 text-mobile'><strong>Somos</strong> un equipo de trabajo con profesionales orientados en diversos ámbitos de la salud mental y conectados en red con profesionales de otras disciplinas.</p>
            <p className='text-justify text-mobile'><strong>Ofrecemos</strong> a posibilidad de que podamos comunicarnos regularmente, trabajar temas que consideremos de necesidad o interés en cada etapa de nuestro trabajo, supervisar casos, y pensar en conjunto, más allá de la especialidad que amerite cada persona a tratar.</p>
            <p className='text-justify text-mobile'><strong>Entendemos</strong> a la persona que nos consulta como un ser integral al que le pasan cosas y quien sea su terapeuta guiará ese tratamiento, pero podrá apoyarse en el equipo y la formación en otras áreas que miembros del mismo tengan para aportar más al crecimiento de la persona a asistir.</p>
            <a href='https://calendly.com/psicoterapia-online-ar1' target="_blank" rel="noreferrer"><button className='btn btn-bienv shadow mobile-version'>QUIERO MI CONSULTA INICIAL</button></a>
            <div className='d-none d-sm-block'>
                <a href='https://www.instagram.com/psicoterapia.online.ar/' target="_blank" rel="noreferrer"><img className='btn' src={instagram} alt="instagram"/></a>
                <ReactWhatsapp number='+54 1164935117' message='Hola, quisiera mas información sobre la terapia ...'>
                    <img className='btn' src={whatsapp} alt="whatsapp"/>
                </ReactWhatsapp>
                <a href='https://www.linkedin.com/company/88436055/admin/' target="_blank" rel="noreferrer"><img className='btn' src={linkedin} alt="linkedin"/></a>
            </div>
        </div>
        <div className='container-fluid d-none d-sm-block'>
            <img className='img-fluid d-none d-sm-block' src={welcomeImg} alt='Bienvenidos'/>
        </div>
    </div>
)
}

export default Welcome;