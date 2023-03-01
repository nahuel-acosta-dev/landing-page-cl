import {Container, Nav, Navbar} from "react-bootstrap";
import { Link} from 'react-router-dom';
import Buble from '../../img/Buble.svg';
import Sidebar from "./Sidebar";

const NavBar = () => {

    
    return(
        <nav className="navbar navbar-dark bg-transparent fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Buble} alt="Logo" 
            width="100" height="50" className="d-inline-block align-text-top"/>
          </a>
          <ul className="nav justify-content-end nav-small">
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" href="#">IGLESIA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" href="#">NOTICIAS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" href="#">GALERIA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none text-white" href="#">RADIO</a>
            </li>
          </ul>
          <button className="navbar-toggler my-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} 
          id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header justify-content-end">
              <button type="button" className="btn-close btn-close-white" 
              data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <Sidebar/>
            </div>
          </div>
        </div>
      </nav>
    )
}
export default NavBar;