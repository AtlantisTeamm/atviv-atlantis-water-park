import './style.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaHotel } from "react-icons/fa";

function Navbar_() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar className='nav' variant="light" expand="lg">
                <Container>
                    <ul className="nav-links">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Cliente" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => navigate("/cadastrar/clientes")}>Cadastrar</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/clientes")}>Clientes</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Gestão" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => navigate("/cadastrar/acomodacoes")}>Cadastrar acomodações</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/acomodacoes")}>Listar acomodações</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/alocar")}>Alocar cliente</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate("/desalocar")}>Desalocar cliente</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </ul>
                    <div>
                        <Navbar.Brand onClick={() => navigate("/")} className="logo"><strong><FaHotel color='white' size={30}/> Atlantis</strong> </Navbar.Brand>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}
export default Navbar_;