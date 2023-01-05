import './NavBar.css';
import logoNombre from '../../assests/logoNombre.png';
import lineaDiv from '../../assests/lineaDiv.jpg'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary flex-column">
        <img class="div-img" src={lineaDiv} alt="linea-div"/>
        <div class="container-fluid p-2 mx-5 flex-row">
            <img class="tamano-logo" src={logoNombre} alt="logo+nombre"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body justify-content-end">
                    <ul class="navbar-nav justify-content-end pe-3">
                        <li class="nav-item mx-3">
                            <a class="nav-link active" aria-current="page" href="#">Sobre nosotros</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Equipo</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Servicios</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;