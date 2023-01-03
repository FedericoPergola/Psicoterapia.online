import './NavBar.css'
import logo from '../../assests/logo.png'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-light navbar-content">
        <div class="container-fluid p-2 ms-5">
            <img src={logo}  alt=""/>
            <div className='logo-content ms-4 d-flex flex-column fs-4'>
                <a>Psicoterapia</a>
                <a>Online</a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  justify-content-end p-3 me-5" id="navbarNav">
                <ul class="navbar-nav nav gap-4">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Equipo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar