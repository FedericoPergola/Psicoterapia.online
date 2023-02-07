import React from 'react';
import bgFaq from '../../assests/bgFaq.png';
import faqTitle from '../../assests/faqTitle.svg';
import '../FAQ/FAQ.css';


const FAQ = () => {
    return (
        <div id='faq' className='faq-content'>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header d-flex justify-content-center mb-5" id="headingOne">
                        <button class="accordion-button d-flex justify-content-center mt-5 mb-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className='bg-container-faq'>
                                <img className='bg-faq' src={bgFaq} alt='...' />
                            </div>
                            <div className='faq-title d-flex'>
                                <img src={faqTitle} alt='Preguntas frecuentes'/>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body-second">
                            <p className='pt-5'>Solicitar una consulta psicológica o decidir si iniciar una terapia psicológica, pueden ser situaciones que generan diversas interrogantes en la mayoría de las personas y la terapia distancia suele generar además otras interrogantes debido a que es una modalidad en la cual intervienen otros factores, respecto a la modalidad convencional o presencial.<br></br><br></br>
                                <strong>A continuación, compartimos algunas de nuestras preguntas más frecuentes para ayudarte:</strong></p>
                            {/* ---Segundo acordion---- */}
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <p>¿Qué es Psicoterapia Online?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body accordion-body-second">Somos un equipo de profesionales especializados en diferentes problemáticas de la salud mental que atiende adolescentes y adultos de habla hispana. Apoyamos los procesos de promoción de la salud y prevención de enfermedades físicas y mentales.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <p>¿Quién me va a ayudar?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Tendrás una primera entrevista de admisión donde conversaremos sobre tu motivo de consulta, te explicaremos sobre el equipo y la modalidad de trabajo y serás derivado/a con el profesional que más se ajuste a tus necesidades y objetivos. Contamos con un equipo de profesionales especializados en distintas áreas de la psicología que cuentan con amplia y diversa experiencia en la atención de pacientes, por ello en esta primera admisión será para orientarte sobre cuál es el/la profesional indicado/a para vos.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <p>¿Necesito hacer una terapia psicológica?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Los motivos para solicitar ayuda e iniciar una terapia psicológica siempre son diversos. Con frecuencia, algunas personas no encuentran sentido ni logran significar los acontecimientos que han vivido en el pasado, a otras se les dificulta lidiar y sanar el dolor psíquico producto de experiencias traumáticas, a menudo difíciles de aceptar e integrar, mientras que otras no consiguen lidiar con miedos, con la ansiedad, el estrés o el dolor emocional, los cuales pueden volverse patológicos e inhabilitantes. En cualquier caso, es recomendable y beneficioso recurrir a un profesional de la salud mental, sea para buscar ayuda práctica para resolver problemas inmediatos y urgentes, para explorar y conocerse a uno mismo o para buscar y construir los propios recursos y significados en la vida.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <p>¿La terapia psicológica a distancia va a ayudarme tanto como una presencial?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Sí. La terapia psicológica a distancia, entiéndase por terapia psicológica mediante videollamadas, telefonía complementada con email, y aplicaciones de chat, tiene una comprobada eficacia terapéutica tanto como una terapia presencial, en la mayoría de los casos o problemáticas. En la terapia psicológica a distancia, las nuevas tecnologías de comunicación son valederas para confluir en un mismo espacio-tiempo terapéutico. Esta modalidad a distancia tiene beneficios como, por ejemplo, permitir un ahorro de tiempo y de dinero destinados al traslado hasta el consultorio del profesional, como también, garantizar el acceso a un tratamiento desde cualquier lugar en el que el paciente se encuentre (su propia casa o de viaje).</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFive">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <p>¿Cuánto tiempo dura una sesión?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">La duración de una sesión en tratamiento será aproximadamente 50 minutos, en el horario convenido entre el paciente y el profesional.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingSix">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        <p>¿Cuántas sesiones voy a necesitar?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Cada persona y cada problemática es distinta. Generalmente, son necesarias 1 o 2 sesiones para establecer un diagnóstico inicial y elaborar juntos un plan de trabajo en la terapia. La duración dependerá del o los objetivos del tratamiento, la frecuencia de las sesiones (inicialmente es recomendable una sesión semanal). Por ejemplo, hay personas que logran resolver un tema puntual en muy pocos encuentros; por otro lado, algunos casos necesitan más sesiones por lo complejo de la problemática a abordar y; por último, están quienes buscan realizar una terapia más prolongada con el objetivo de analizarse y conocerse en mayor profundidad.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingSeven">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <p>¿Las videollamadas o mensajes aseguran mi privacidad?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Sí. Es de conocimiento público y general, que cuando envías mensajes o hablas con alguien en Google Meet, Skype, Zoom o WhatsApp, la información se encripta para que permanezca segura. Esto incluye a las conversaciones y las videollamadas en un navegador web, en las aplicaciones para Windows, Android o iOS. Los desarrolladores de todas estas aplicaciones se mantienen trabajando constantemente para optimizar la seguridad en las comunicaciones.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingEight">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                        <p>¿Cuánto cuesta una sesión?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Proponemos honorarios que resultan accesibles para quien consulta. Se evalúan de acuerdo al tipo de terapia, la duración del tratamiento y las posibilidades de cada paciente. Esto se conversa y acuerda durante la primera sesión de admisión.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingNine">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                        <p>¿Cuáles son las opciones de pago?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Contamos con medios de pago seguros como Paypal y MercadoPago para recibir el pago de los honorarios. También podrás realizar pagos mediante transferencia bancaria, si estás dentro de la República Argentina.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTen">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                        <p>¿Cuándo se realiza el pago de las sesiones?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">La primera sesión de admisión siempre deberá estar abonada al menos 24 horas antes del día y horario pactado, para confirmar tu turno. En caso de no estar abonada en ese plazo, se deberá pactar un nuevo día y horario. Se puede abonar una sesión o varias, de acuerdo a tu preferencia y posibilidades. Una vez iniciado el tratamiento con tu profesional asignado, te asesorará como continuar con los pagos de las sesiones</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingEleven">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                                        <p>¿Cuándo quedaría confirmada definitivamente mi sesión?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseEleven" class="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Al abonar la misma y enviar el comprobante de pago. Una vez iniciado el tratamiento se establecerá con el profesional día, hora y frecuencia de las sesiones.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwelve">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                                        <p>¿Qué sucede si no puedo asistir a la sesión y ya la pague?</p></button>
                                    </h2>
                                    <div id="flush-collapseTwelve" class="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Si la sesión ya está paga y no te es posible asistir en el día y horario pactado, deberás avisar por cualquiera de los canales de contacto (email, WhatsApp, etc.) y recibir la respuesta del profesional que se da por enterado, con al menos 24 horas hábiles de anticipación. De ese modo, se podrá volver a pactar el encuentro en otro horario y/o día. Las cancelaciones o reprogramaciones a último momento, como también las ausencias injustificadas no serán válidas. Respetando el plazo de las 24 horas hábiles de aviso previo, tu tiempo y dinero abonado no se pierden y además, ayudas a que el tiempo que no vas a poder dedicar a tu tratamiento sea destinado para ayudar a otros que también necesitan asistencia.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThirteen">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                                        <p>¿Qué significa una ausencia justificada en el tratamiento?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThirteen" class="accordion-collapse collapse" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Si excepcionalmente alguna situación de último momento (enfermedad de gravedad, accidente u otro infortunio) no te permite asistir a la sesión ya abonada, el profesional evaluará la reposición de esa cita al ser informado de tu impedimento. Las ausencias injustificadas, mayores a un número de dos (2) sesiones consecutivas, serán consideradas como abandono de tratamiento por parte del paciente, perdiendo el derecho a las sesiones abonadas previamente o al horario asignado. De querer retomar el tratamiento se deberá volver a pactar un día y horario nuevo.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFourteen">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
                                        <p>¿Los profesionales tienen formación y están registrados para ejercer psicología?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFourteen" class="accordion-collapse collapse" aria-labelledby="flush-headingFourteen" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Sí. Todos los profesionales que conformamos Psicoterapia Online somos Licenciados en Psicología formados en universidades reconocidas en la República Argentina y con experiencia de trabajo en distintos ámbitos. Además estamos matriculados para ejercer la profesión ante los organismos correspondientes.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFifteen">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false" aria-controls="flush-collapseFifteen">
                                        <p>¿Es necesario que consulte con otro profesional mientras estoy en tratamiento psicológico?</p></button>
                                    </h2>
                                    <div id="flush-collapseFifteen" class="accordion-collapse collapse" aria-labelledby="flush-headingFifteen" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">No siempre. Es una posibilidad que depende de cada paciente, su problemática o patología presente o preexistente. Por eso es muy importante realizar un diagnóstico inicial en la terapia psicológica. Algunas problemáticas o situaciones puntuales requieren la interconsulta con otros profesionales, como por ejemplo, médicos con especialidad en Psiquiatría, Neurología, Clínicos, etcétera. Otras veces, es necesario un tratamiento en conjunto.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingSixteen">
                                        <button class="accordion-button collapsed accordion-style" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixteen" aria-expanded="false" aria-controls="flush-collapseSixteen">
                                        <p>¿Pueden menores de edad solicitar atención psicológica a distancia?</p>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSixteen" class="accordion-collapse collapse" aria-labelledby="flush-headingSixteen" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Debido a la complejidad de la evaluación del entorno familiar de los niños y adolescentes, como también a disposiciones legales que requieren la presencia y autorización de padres o tutores legales, nuestros servicios solamente podrán ser solicitados por personas legalmente mayores de edad, es decir, a partir de los 18 años.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ