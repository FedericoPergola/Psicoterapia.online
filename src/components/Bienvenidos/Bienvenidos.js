import './Bienvenidos.css';
import imagenInicio from '../../assests/imagenInicio.png';

const Bienvenidos = () => {
return (
    <div class="d-flex justify-content-around flex-row pt-5">
        <div class="container-bienv">
            <h2>¡Te damos la bienvenida a</h2>
            <h1 class="mb-5"><strong>PSICOTERAPIA ONLINE!</strong></h1>
            <p class="text-justify pt-2">Somos un espacio de psicólogos dedicados a la clínica con diferentes orientaciones y formaciones, con un enfoque <strong>terapéutico y preventivo</strong> de la salud mental.</p>
            <p class="text-justify">Nuestro objetivo es brindarte la posibilidad de elección entre varias opciones de servicio, para promover tu <strong>bienestar psíquico y físico</strong>, con el asesoramiento de profesionales adecuados a tu búsqueda o consulta.</p>
            <button type="button"class=" btn btn-bienv shadow">QUIERO MI CONSULTA INICIAL</button>
            <div>
                <a><img /></a> 
                <a><img /></a> 
            </div>
        </div>
        <div class="container-imgBienv">
            <img class="img-bienvenidos" src={imagenInicio} alt="Bienvenidos"/>
        </div>
    </div>
)
}

export default Bienvenidos