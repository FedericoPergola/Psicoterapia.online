import './Footer.css';
import footerWhatsapp from '../../assests/footerWhatsapp.png';
import footerLogo from '../../assests/footerLogo.png';
import footerLinkedin from '../../assests/footerLinkedin.png';
import footerLineaSep from '../../assests/footerLineaSep.svg';
import footerInstagram from '../../assests/footerInstagram.png';
import footerEmail from '../../assests/footerEmail.png';
import lineaDiv from '../../assests/lineaDiv.jpg'

const Footer = () => {
    return (
        <div className='bg-footer'>
            <div>
                <img className='img-fluid div-img' src={lineaDiv} alt='...'/>
            </div>
            <div className='d-flex align-items-center'>
                <div className='mx-auto'>
                    <img className='logo-width' src={footerLogo} alt='logo'/>
                    <img className='line-style' src={footerLineaSep} alt='...'/>
                </div>
                <div className='d-flex align-items-center mx-auto'>
                    <p className=''>Psicoterapia Online</p>
                    <img className='line-style' src={footerLineaSep} alt='...'/>
                </div>
                <div className='mx-auto' >
                    <a href='#'><img className='btn icons-width' src={footerInstagram} alt="Instagram"/></a>
                    <a href='#'><img className='btn icons-width' src={footerWhatsapp} alt="Whatsapp"/></a>
                    <a href='#'><img className='btn icons-width' src={footerLinkedin} alt="Linkedin"/></a>
                    <a href='#'><img className='btn icons-width' src={footerEmail} alt="E-mail"/></a>
                    <img className='line-style' src={footerLineaSep} alt='...'/>
                </div>
                <div className='d-flex flex-column mx-auto'>
                    <a href='#'>Términos y Condiciones de Uso</a>
                    <a href='#'>Políticas de privacidad</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;