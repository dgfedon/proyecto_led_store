import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cart/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/branding_circle.png';
import './navBar.css';


function NavBar() {
    return (
        <>
            <Navbar expand="lg" fixed="top">
                <Container>
                    <div>
                        <NavLink to="/" className="nav--navbrand">
                            <img src={logo} width="80" height="80" className="d-inline-block mx-2" alt="Logo"/>
                        </NavLink>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/" className="nav--navlink">Incio</NavLink>
                                <NavLink to="/" className="nav--navlink">¿Quiénes somos?</NavLink>
                                <NavLink to="/" className="nav--navlink">Tienda</NavLink>
                                <NavLink to="/" className="nav--navlink">Contacto</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                        <NavLink to="/cart">
                            <CartWidget />
                        </NavLink>
                    </div>
                </Container>
            </Navbar>
            <Navbar style={{height: '20vh'}} />
        </>
    )
}

export default NavBar
