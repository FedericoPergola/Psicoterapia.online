import './NavBar.css';
import logoNombre from '../../assests/logoNombre.png';
import lineaDiv from '../../assests/lineaDiv.jpg'

const NavBar = () => {
    return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary flex-column p-0'>
        <img className='div-img' src={lineaDiv} alt='linea-div'/>
        <div className='container-fluid p-2 mx-5 flex-row shadow-violet'>
            <img className='tamano-logo'src={logoNombre} alt='logo+nombre'/>
            <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div className='offcanvas offcanvas-end' tabindex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                <div className='offcanvas-header'>
                    <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>
                <div className='offcanvas-body justify-content-end'>
                    <ul className='navbar-nav justify-content-end pe-3'>
                        <li className='nav-item mx-3'>
                            <a className='nav-link nav-text' aria-current='page' href='#aboutUs'>Sobre nosotros</a>
                        </li>
                        <li className='nav-item mx-3'>
                            <a className='nav-link nav-text' href='#team'>Equipo</a>
                        </li>
                        <li className='nav-item mx-3'>
                            <a className='nav-link nav-text' href='#services'>Servicios</a>
                        </li>
                        <li className='nav-item mx-3'>
                            <a className='nav-link nav-text' href='#faq'>FAQ</a>
                        </li>
                        <li className='nav-item mx-3'>
                            <a className='nav-link nav-text' href='#contact'>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;