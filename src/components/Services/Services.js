import React from 'react'
import './Services.css'
import button from '../../assests/button.png'
import Modal from '../Modal/Modal'
import useModal from '../Hooks/useModal'
import serviceTitle from '../../assests/serviceTitle.svg'

const Services = () => {

    const [isOpenFirstModal, closeFirstModal, openFirstModal] = useModal()
    const [isOpenSecondModal, closeSecondModal, openSecondModal] = useModal()
    const [isOpenThirdModal, closeThirdModal, openThirdModal] = useModal()

    return (
        <>
            <div id='services' className='d-flex justify-content-center pt-5 m-5'>
                <img src={serviceTitle} alt='Los servicios que ofrecemos'/>
            </div>
            <div className='d-flex justify-content-center'>
            <p className='text-style'>Te invitamos a explorar las herramientas y servicios que proponemos para relacionarte con lo que te está pasando y para que tus acciones sean un reflejo de tus valores y deseos.</p>
            </div>
            <div className='service d-flex justify-content-evenly m-5'>
                <div class="card">
                    <div class="card-body card-body-service ">
                        <h5 class="card-title">Psicología Clínica</h5>
                        <p class="card-text-service pe-2 ps-1">La psicología clínica estudia todos los elementos implicados en los trastornos mentales y, de forma más genérica, la salud mental. </p>
                        <div className='d-flex justify-content-end pt-5 button-service'>
                            <button onClick={openFirstModal}><img src={button}  alt=''></img></button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body card-body-service ">
                        <h5 class="card-title">Desarrollo Personal</h5>
                        <p class="card-text-service pe-2 ps-1">La psicología ofrece una serie de técnicas y recursos para potenciar las habilidades sociales y cognitivas de las personas, permitiéndoles descubrir su singularidad.</p>
                        <div className='d-flex justify-content-end pt-5 button-service'>
                            <button onClick={openSecondModal}><img src={button} alt=''></img></button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class=" card-body card-body-service">
                        <h5 class="card-title">Talleres y Formaciones</h5>
                        <p class="card-text-service pe-2 ps-1">Brindamos talleres grupales de diversas temáticas orientadas a la salud para cualquier persona interesada en el desarrollo personal.</p>
                        <div className='d-flex justify-content-end pt-5 button-service'>
                            <button onClick={openThirdModal}><img src={button}  alt=''></img></button>
                        </div>
                    </div>
                </div>
            </div>

            {/*MODALES*/}

            <Modal
                isOpen={isOpenFirstModal}
                closeModal={closeFirstModal}>

                <div className='modal-text modal-scroll'>
                    <h2 className='title-modal'><b>Psicología Clínica</b></h2>
                    <p className='description-modal'>La psicología clínica estudia todos los elementos implicados en los trastornos mentales y, de forma más genérica, la salud mental.
                        Así, lleva a cabo todas las tareas de evaluación, diagnóstico, prevención e intervención terapéutica en personas con algún tipo de afectación mental o de conducta desadaptativa, con el fin de restaurar el equilibrio psicológico.
                        Los profesionales de Psicoterapia Online están formados con diferentes orientaciones y especialidades, por ello podrás encontrar:</p>
                    <ul>
                        <li>Psicología Cognitiva</li>
                        <li>Psicoanálisis</li>
                        <li>Psicología Positiva</li>
                        <li>Terapias Tercer Ola</li>
                        <li>Terapia Familiar</li>
                        <li>Terapia de Pareja</li>
                    </ul>
                </div>
            </Modal>

            <Modal
                isOpen={isOpenSecondModal}
                closeModal={closeSecondModal}>
                    <div className='modal-text modal-scroll'>
                        <h2 className='title-modal'><b>Desarrollo Personal</b></h2>
                        <p className='description-modal'>La Psicología ofrece una serie de técnicas y recursos para potenciar las habilidades sociales y cognitivas de las personas, permitiéndoles descubrir su singularidad.
                        Cada persona está llamada a desarrollarse y es responsable por ello. En búsqueda del bienestar emocional nos damos cuenta de que podemos aprovechar mucho más nuestras cualidades, potenciar y regular algunas conductas que nos impiden relacionarnos como quisiéramos.
                        Si bien, toda proceso terapéutico trabaja en las fortalezas, aquí te presentamos tres espacios para el autoconocimiento y desarrollo personal</p>
                        <ul>
                            <li>Psicoterapia para el desarrollo:</li>
                        </ul>
                        <p className='description-modal p-0'>Deconstruir significa deshacer analíticamente algo para darle una nueva estructura. Reconstruir nuestra forma de auto percibirnos, conocer sobre nuestro mundo emocional, vincular, existencial, nos otorga empoderamiento.
                        La vida constantemente nos propone elecciones, a las cuales podemos responder auténticamente o no.</p>
                        <ul>
                            <li>Arteterapia:</li>
                        </ul>
                        <p className='description-modal p-0'>El Arteterapia es una profesión con más de setenta años de historia que se encuadra dentro de las profesiones asistenciales. El Arteterapia se práctica siguiendo una metodología bajo un marco terapéutico definido. En este caso, la psicología transpersonal confluye junto al arte en un proceso holístico destinado a recrearnos mediante la exploración.
                        Permite expresar conflictos y emociones en personas con dificultad en la expresión verbal o con deseos de expresión de su ser mediante la creación.
                        Sin ser necesarias grandes habilidades o conocimientos plásticos, la obra es siempre valiosa porque nace de la autenticidad del creador. No es un espacio para aprender técnicas plásticas, aquí lo estético no tiene valor. Es un espacio terapéutico, el foco está puesto en que cada creación es la expresión interior de nuestro ser, aportándonos información, permitiéndonos reencontrarnos. Si querés conocer en mayor profundidad este espacio agenda tu primera sesión para experimentarlo.</p>
                        <ul>
                            <li>Orientación Vocacional/Laboral</li>
                        </ul>
                        <p className='description-modal p-0'>La Orientación Vocacional es un proceso de aprendizaje que implica autoconocernos e identificar nuestros objetivos de vida. Esto nos permite identificar aquellas carreras que se adaptan mejor a nuestra forma de ser.
                        Vocación significa llamado interior, al cual para muchas personas no es fácil de escuchar. Este llamado es también una construcción familiar, social, comunitaria pero ante todo personal. Con ello se trabaja en este espacio, desanudar aquellos mandatos, creencias, o acciones que sostenemos sin replantear, para direccionar nuestra elecciones acorde a tus motivaciones, aptitudes y actitudes. No se trata de un único test, si no de un proceso de varios encuentros que te brinda la posibilidad de que te conozcas mejor y descubras tus intereses vocacionales con el objetivo de identificar campos, carreras y proyectos que puedan alinearse a vos a través de la palabra y de técnicas psicológicas profundizamos sobre nuestras elecciones.</p>
                    </div>

            </Modal>

            <Modal
                isOpen={isOpenThirdModal}
                closeModal={closeThirdModal}>

                    <div className='modal-text'>
                        <h2 className='title-modal'><b>Talleres y Formaciones</b></h2>
                        <p className='description-modal'>Brindamos talleres grupales de diversas temáticas orientadas a la salud para cualquier persona interesada en el desarrollo personal.
                            Si sos profesional de la salud o estudiante, también contamos con una oferta de formación que se va renovando año a año.
                            Para enterarte de las novedades podés dejarnos tu correo contandonos si te interesan los talleres o formaciones y te contactaremos compartiendote las novedades.
                        </p>
                    </div>
            </Modal>
        </>
    )
}

export default Services