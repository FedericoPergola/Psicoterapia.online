import './Welcome.css';
import welcomeImg from '../../assests/welcomeImg.png';
import welcomeLyrics from '../../assests/welcomeLyrics.svg';
import instagram from '../../assests/instagram.png';
import whatsapp from '../../assests/whatsapp.png';
import linkedin from '../../assests/linkedin.png'

const Welcome = () => {
return (
    <div className='d-flex justify-content-around flex-row pt-5 bienvenidos-container'>
        <div className='container-bienv'>
            <img className='mb-5' src={welcomeLyrics} alt='welcome' />
            <p className='text-justify pt-2'>Somos un espacio de psicólogos dedicados a la clínica con diferentes orientaciones y formaciones, con un enfoque <strong>terapéutico y preventivo</strong> de la salud mental.</p>
            <p className='text-justify'>Nuestro objetivo es brindarte la posibilidad de elección entre varias opciones de servicio, para promover tu <strong>bienestar psíquico y físico</strong>, con el asesoramiento de profesionales adecuados a tu búsqueda o consulta.</p>
            <a href='https://calendly.com/psicoterapia-online-ar1' target="_blank" rel="noreferrer"><button className='btn btn-bienv shadow'>QUIERO MI CONSULTA INICIAL</button></a>
            <div>
                <a href='https://www.instagram.com/psicoterapia.online.ar/' target="_blank" rel="noreferrer"><img className='btn' src={instagram} alt="instagram"/></a>
                <a href='#' target="_blank" rel="noreferrer"><img className='btn' src={whatsapp} alt="whatsapp"/></a>
                <a href='https://www.linkedin.com/company/88436055/admin/' target="_blank" rel="noreferrer"><img className='btn' src={linkedin} alt="linkedin"/></a>
            </div>
        </div>
        <div className='container-imgBienv'>
            <img className='img-bienvenidos' src={welcomeImg} alt='Bienvenidos'/>
        </div>
    </div>
)
}

export default Welcome;