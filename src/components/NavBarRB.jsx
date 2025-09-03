import '../css/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcons from './CartWidgetIcons';

function NavBarRB() {
  console.log('Navbar')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src='../logo-shop.png' alt='logo' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.2">
                Ofertas
              </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Más Vendido</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          <CartWidgetIcons/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarRB;