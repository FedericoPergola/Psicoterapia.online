import React from 'react'
import './Services.css'
import button from '../../assests/button.png'

const Services = () => {
  return (
    <>
        <div className='title-team d-flex justify-content-center pt-5 mt-10'>
            <h2>Los servicios que ofrecemos</h2>
        </div>
        <div className='service'>
            <div class="card">
                <div class="card-body card-body-service ">
                    <h5 class="card-title">Psicología Clínica</h5>
                    <p class="card-text-service pe-2 ps-1">La psicología clínica estudia todos los elementos implicados en los trastornos mentales y, de forma más genérica, la salud mental.<br/>
                    Así, lleva a cabo todas las tareas de evaluación, diagnóstico, prevención e intervención terapéutica en personas con algún tipo de afectación mental o de conducta desadaptativa, con el fin de restaurar el equilibrio psicológico.</p>
                    <div className='d-flex justify-content-end pt-5'>
                        <button><img src={button}></img></button> 
                    </div> 
                </div>
            </div>
            <div class="card">
                <div class="card-body card-body-service ">
                    <h5 class="card-title">Desarrollo Personal</h5>
                    <p class="card-text-service pe-2 ps-1">La psicología ofrece una serie de técnicas y recursos para potenciar las habilidades sociales y cognitivas de las personas, permitiéndoles descubrir su singularidad.<br/>
                    Cada persona está llamada a desarrollarse y es responsable por ello. En búsqueda del bienestar emocional nos damos cuenta de que podemos aprovechar mucho más nuestras cualidades, potenciar y regular algunas conductas que nos impiden relacionarnos como quisiéramos.</p>
                    <div className='d-flex justify-content-end pt-5'>
                        <button><img src={button}></img></button> 
                    </div> 
                </div>
            </div>
            <div class="card">
                <div class="card-body card-body-service">
                    <h5 class="card-title">Talleres y Formaciones</h5>
                    <p class="card-text-service pe-2 ps-1">Brindamos talleres grupales de diversas temáticas orientadas a la salud para cualquier persona interesada en el desarrollo personal.<br/>
                    Si sos profesional de la salud o estudiante también contamos con una oferta de formación que se ve renovando año a año.</p><br></br><br></br><br></br>
                    <div className='d-flex justify-content-end pt-5'>
                        <button><img src={button}></img></button> 
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Services