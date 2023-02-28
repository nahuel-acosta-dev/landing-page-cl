import {Container, Nav, Navbar} from "react-bootstrap";
import { Link} from 'react-router-dom';
import Buble from '../../img/Buble.svg';
import Sidebar from "./Sidebar";

const NavBar = () => {

    
    return(
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Buble} alt="Logo" 
            width="100" height="50" className="d-inline-block align-text-top"/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} 
          id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
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