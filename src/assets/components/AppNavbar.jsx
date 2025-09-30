import{Navbar, Container, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return(
        <>
        
         <Navbar className="navbar bg-dark py-3">
      <Container fluid className="align-items-center">

        {/*BRAND*/}
        <div className="ms-4">
        <Navbar.Brand href="#home" className="h1 text-white"  as={Link} to="/">Avv. Bontempi Federica</Navbar.Brand>
        <br/>
        <Navbar.Text className="smalltext text-secondary mt-1">diritto ambientale</Navbar.Text>
        </div>


        <div className="d-flex align-items-center me-4">

            {/* Bottone HOME */}
            <Button
              className="bi bi-house-door-fill text-white fs-2 me-3"
              variant="dark"
              as={Link}
              to="/"
              title="Home"
            />

            {/* Dropdown con icona */}
              
              
            <Dropdown align="end"
             >
              <Dropdown.Toggle variant="dark" id="dropdown-basic" className="text-white border-0 p-0 fs-2">
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-dark m-3">
                <Dropdown.Item as={Link} to="/Pagina4" className="text-white m-2">
                  <i className="bi bi-person-fill me-2"></i>Chi Sono
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Pagina3" className="text-white m-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>Dove?
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Pagina2" className="text-white m-2">
                  <i className="bi bi-envelope-fill me-2"></i>Contattami
                </Dropdown.Item>
                 <Dropdown.Item as={Link} to="/Pagina5" className="text-white m-2">
                  <i className="bi bi-person-lines-fill me-2"></i>Contattami
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
  
      </Container>
      
    </Navbar>
        </>
    )
}

export default AppNavbar