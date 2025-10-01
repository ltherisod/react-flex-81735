import '../css/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcons from './CartWidgetIcons';
import { NavLink } from 'react-router-dom';

function NavBarRB() {
  console.log('Navbar')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img src='../logo-shop.png' alt='logo' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/nuevos">Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/ofertas">
                Ofertas
              </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/mas vendidos">Más Vendidos</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
         <NavLink to='/cart' style={{textDecoration:'none', color:'black'}}><CartWidgetIcons/></NavLink> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarRB;