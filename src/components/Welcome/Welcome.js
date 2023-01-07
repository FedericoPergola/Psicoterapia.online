import './Welcome.css';
import welcomeImg from '../../assests/welcomeImg.png';
import welcomeLyrics from '../../assests/welcomeLyrics.svg';
import instagram from '../../assests/instagram.png';
import whatsapp from '../../assests/whatsapp.png';
import linkedin from '../../assests/linkedin.png'

const Welcome = () => {
return (
    <div class="d-flex justify-content-around flex-row pt-5 bienvenidos-container">
        <div class="container-bienv">
            <img class="mb-5" src={welcomeLyrics} alt="welcome" />
            <p class="text-justify pt-2">Somos un espacio de psicólogos dedicados a la clínica con diferentes orientaciones y formaciones, con un enfoque <strong>terapéutico y preventivo</strong> de la salud mental.</p>
            <p class="text-justify">Nuestro objetivo es brindarte la posibilidad de elección entre varias opciones de servicio, para promover tu <strong>bienestar psíquico y físico</strong>, con el asesoramiento de profesionales adecuados a tu búsqueda o consulta.</p>
            <button type="button"class=" btn btn-bienv shadow">QUIERO MI CONSULTA INICIAL</button>
            <div>
                <a><img class="btn" src={instagram} alt="instagram"/></a>
                <a><img class="btn" src={whatsapp} alt="whatsapp"/></a>
                <a><img class="btn" src={linkedin} alt="linkedin"/></a>
            </div>
        </div>
        <div class="container-imgBienv">
            <img class="img-bienvenidos" src={welcomeImg} alt="Bienvenidos"/>
        </div>
    </div>
)
}

export default Welcome;