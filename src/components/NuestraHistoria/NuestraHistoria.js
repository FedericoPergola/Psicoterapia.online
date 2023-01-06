import './NuestraHistoria.css';
import flechaVioleta from '../../assests/flechaVioleta.svg';

const NuestraHistoria = () => {
    return (
        <div class='container-fluid d-flex flex-column container-NH'>
            <div class='d-flex justify-content-center'>
                <img class="img-flecha" src={flechaVioleta} alt="flecha"/>            
            </div>
            <div class="d-flex flex-column container-conoceNH">
                <div className='d-flex justify-content-center pt-5'>
                    <h2 class="card-text">Conoce nuestra historia</h2>
                </div>
                <div class="d-flex justify-content-evenly p-5">
                    <div class="card-conoceNH">
                        <p class="card-text card-text-title">Contexto</p>
                        <p class="card-text">Psicoterapia Online surge a comienzos del año 2020, como consecuencia de la pandemia por COVID 19, como un espacio de contención psicosocial en un momento de inestabilidad mundial. A partir de esta situación, se desencadenaron ciertas acciones emocionales relacionadas a la salud mental: angustia, ansiedad, pánico, incertidumbre, desconfianza, indefensión, miedo al contagio, entre otras.</p>
                    </div>
                    <div class="card-conoceNH">
                        <p class="card-text card-text-title">Comienzos</p>
                        <p class="card-text">Iniciamos con un espacio de grupos de contención, abiertos y gratuitos a la comunidad.
                        En estos grupos se trabajaban las exigencias que el aislamiento obligatorio nos presentaba día tras día: la capacidad de adaptación, elaboración de los cambios, las ansiedades cotidianas, amenazas, incertidumbres, y situaciones personales que afrontábamos.</p>
                    </div>
                    <div class="card-conoceNH">
                        <p class="card-text card-text-title">Actualidad</p>
                        <p class="card-text">Luego de los primeros meses comenzamos a ofrecer nuestros servicios como terapeutas, en sesiones individuales y grupales. Y fueron sumándose al equipo psicólogos con diversas orientaciones, haciendo de Psicoterapia Online un espacio que responde a muchas necesidades de la salud mental.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuestraHistoria;