import './Footer.css';
import footerWhatsapp from '../../assests/footerWhatsapp.png';
import footerLogo from '../../assests/footerLogo.png';
import footerLinkedin from '../../assests/footerLinkedin.png';
import footerLineaSep from '../../assests/footerLineaSep.svg';
import footerInstagram from '../../assests/footerInstagram.png';
import footerEmail from '../../assests/footerEmail.png';
import lineaDiv from '../../assests/lineaDiv.jpg'
import Modal from '../Modal/Modal'
import useModal from '../Hooks/useModal'

const Footer = () => {
    const [isOpenFooterModal, closeFooterModal, openFooterModal] = useModal()

    return (
        <div className='bg-footer'>
            <div>
                <img className='img-fluid div-img d-none d-sm-block' src={lineaDiv} alt='...'/>
            </div>
            <div className='d-flex align-items-center text-center'>
                <div className='mx-auto'>
                    <img className='logo-width' src={footerLogo} alt='logo'/>
                    <img className='line-style' src={footerLineaSep} alt='...'/>
                </div>
                <div className='d-flex align-items-center mx-auto'>
                    <p className=''>Psicoterapia Online</p>
                    <img className='line-style' src={footerLineaSep} alt='...'/>
                </div>
                <div className='mx-auto' >
                    <a href='https://www.instagram.com/psicoterapia.online.ar/' target="_blank" rel="noreferrer"><img className='btn icons-width' src={footerInstagram} alt="Instagram"/></a>
                    <a href='#' target="_blank" rel="noreferrer"><img className='btn icons-width' src={footerWhatsapp} alt="Whatsapp"/></a>
                    <a href='https://www.linkedin.com/company/88436055/admin/' target="_blank" rel="noreferrer"><img className='btn icons-width' src={footerLinkedin} alt="Linkedin"/></a>
                    <a href='#' target="_blank" rel="noreferrer"><img className='btn icons-width' src={footerEmail} alt="E-mail"/></a>
                    <img className='line-style' src={footerLineaSep} alt='...'/>
                </div>
                <div className='d-flex flex-column mx-auto'>
                    <button onClick={openFooterModal} className='text-light'>Términos y Condiciones de Uso</button>
                    <button onClick={openFooterModal} className='text-light'>Políticas de privacidad</button>
                </div>
            </div>
            {/*MODALES*/}

            <Modal
                isOpen={isOpenFooterModal}
                closeModal={closeFooterModal}>

                <div className='modal-text modal-scroll'>
                    <h2 className='title-modal'><b>TÉRMINOS Y CONDICIONES</b></h2>
                    <p>
                    Esta política de condiciones de uso es válida a partir de Enero de 2023.
                        Última actualización 05/01/2023<br></br>
                        TÉRMINOS Y CONDICIONES — Psicoterapia Online<br></br>
                        Psicoterapia Online, persona jurídica de derecho privado describe, a través de este documento, las normas de uso del sitio y de cualquier otro sitio web, tienda o aplicación operada por el titular.
                        Al navegar por este sitio web, consideramos que está de acuerdo con las condiciones de uso que figuran a continuación.
                        Si no está de acuerdo con los términos de este acuerdo, le pedimos que no haga ningún otro uso de este sitio web, mucho menos que se registre o envíe sus datos personales.
                        Si cambiamos nuestras condiciones de uso, publicaremos el nuevo texto en este sitio web, con una fecha de revisión actualizada. Podemos modificar este documento en cualquier momento.
                        Si hay un cambio significativo en los términos de este acuerdo, podemos informarle utilizando la información de contacto que tenemos en nuestra base de datos o mediante una notificación.
                        El uso de este sitio web después de los cambios significa que usted acepta las condiciones de uso revisadas. Si, después de leer la versión revisada, no está de acuerdo con sus términos, por favor, termine su acceso.
                        <ul>
                            <li>Sección 1 - Usuario
                            El uso de este sitio web le otorga automáticamente la condición de Usuario e implica su plena aceptación de todas las directrices y condiciones incluidas en estas Condiciones.
                            </li>
                            <li>
                            Sección 2 - Adhesión junto con la política de privacidad
                            El uso de este sitio web implica la adhesión a estas Condiciones de Uso y a la versión más actualizada de la Política de Privacidad de Psicoterapia Online.
                            </li>
                            <li>
                            Sección 3 - Condiciones de acceso
                            En general, el acceso al sitio web de Psicoterapia Online es gratuito y no requiere registro previo.
                            Sin embargo, para hacer uso de algunas funcionalidades, el usuario puede necesitar registrarse, creando una cuenta de usuario con un nombre de usuario y una contraseña de acceso.
                            Es responsabilidad del usuario proporcionar únicamente información correcta, auténtica, válida, completa y actualizada, así como no revelar su nombre de usuario y contraseña a terceros.
                            Algunas partes de este sitio web ofrecen al usuario la opción de publicar comentarios en determinadas áreas. Psicoterapia Online no consiente la publicación de contenidos de carácter discriminatorio, ofensivo o ilícito, o que infrinjan los derechos de autor o cualquier otro derecho de terceros.
                            La publicación de cualquier contenido por parte del usuario de este sitio web, incluidos los mensajes y comentarios, implica una licencia no exclusiva, irrevocable e irreversible para su uso, reproducción y publicación por parte de Psicoterapia Online en su sitio web, plataformas de internet y aplicaciones, o incluso en otras plataformas, sin ninguna restricción o limitación.
                            </li>
                            <li>
                            Sección 4 - Cookies
                            La información sobre el uso que usted hace de este sitio web puede recogerse a través de las cookies. Las cookies son piezas de información que se almacenan directamente en el equipo que se está utilizando. Las cookies permiten recoger información como el tipo de navegador, el tiempo de permanencia en el sitio web, las páginas visitadas, las preferencias de idioma y otros datos de tráfico anónimos. Nosotros y nuestros proveedores de servicios utilizamos la información para la protección de la seguridad, para facilitar la navegación, mostrar la información de manera más eficiente y personalizar su experiencia al utilizar este sitio web, así como para el seguimiento en línea. También recopilamos información estadística sobre el uso del sitio web para mejorar continuamente nuestro diseño y funcionalidad, para entender cómo se utiliza el sitio web y para ayudarle a resolver problemas relevantes.
                            Si no desea que se recoja su información a través de las cookies, existe un procedimiento sencillo en la mayoría de los navegadores que permite rechazar automáticamente las cookies, o le da la opción de aceptar o rechazar la transferencia de una cookie específica (o varias) de un sitio web concreto a su ordenador. Sin embargo, esto puede crear inconvenientes en su uso del sitio web.
                            La configuración que elija puede afectar a su experiencia de navegación y al funcionamiento que requiere el uso de cookies. En este sentido, rechazamos cualquier responsabilidad por las consecuencias derivadas del funcionamiento limitado de este sitio web causado por la desactivación de las cookies en su dispositivo (incapacidad para establecer o leer una cookie).
                            </li>
                            <li>
                            Sección 5 - Propiedad intelectual
                            Todos los elementos de Psicoterapia Online son propiedad intelectual de la misma o de sus licenciantes. Estos términos o el uso del sitio web no le otorgan ninguna licencia o derecho de uso de los derechos de propiedad intelectual de Psicoterapia Online o de cualquier tercero.
                            </li>
                            <li>
                            Sección 6 - Enlaces a sitios web de terceros
                            Este sitio web puede contener, de vez en cuando, enlaces de hipertexto que le redirigirá a sitios web de nuestros socios, anunciantes, proveedores, etc. Si hace clic en uno de estos enlaces a cualquiera de estos sitios, recuerde que cada sitio tiene sus propias prácticas de privacidad y que nosotros no somos responsables de estas políticas. Por favor, consulte esas políticas antes de enviar cualquier dato personal a esos sitios.
                            No somos responsables de las políticas y prácticas de recopilación, uso y divulgación (incluidas las prácticas de protección de datos) de otras organizaciones, como Facebook, Apple, Google, Microsoft, o cualquier otro desarrollador de software o proveedor de aplicaciones, tienda de medios sociales, sistema operativo, proveedor de servicios de internet o fabricante de dispositivos, incluidos los Datos Personales que usted divulgue a otras organizaciones a través de las aplicaciones, en relación con dichas aplicaciones, o publicados en nuestras redes sociales. Le recomendamos que se informe sobre la política de privacidad y las condiciones de uso de cada sitio web visitado o proveedor de servicios utilizado.
                            </li>
                            <li>
                            Sección 7 - Plazos y modificaciones
                            El funcionamiento de este sitio web es por tiempo indefinido.
                            La totalidad del sitio web o cada una de sus secciones podrá ser cerrada, suspendida o interrumpida unilateralmente por Psicoterapia Online, en cualquier momento y sin previo aviso.
                            </li>
                            <li>
                            Sección 8 - Datos personales
                            Durante el uso de este sitio web, ciertos datos personales serán recogidos y procesados por Psicoterapia Online y/o los Socios. Las normas relativas al tratamiento de los datos personales de Psicoterapia Online están estipuladas en la Política de Privacidad.
                            </li>
                            <li>
                            Sección 9 - Contacto
                            Si tiene alguna pregunta sobre las condiciones de uso, por favor póngase en contacto con nosotros por correo electrónico psicoterapia.online.ar1@gmail.com.
                            </li>
                        </ul>
                    </p>
                </div>
            </Modal>
        </div>
    )
}

export default Footer;