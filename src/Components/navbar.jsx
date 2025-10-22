import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import imgLogo from "../assets/icono-pelicula-cine.png";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
  const [pelicula, setPelicula] = useState("");
  const navigate = useNavigate();

  function obtenerPelicula(e) {
    setPelicula(e.target.value);
  }

  function buscarPeliculas(e) {
    e.preventDefault();
    if (!pelicula.trim()) return;
    navigate(`/buscar/${encodeURIComponent(pelicula)}`);
    setPelicula(""); //limpia el input
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="m-0 p-0" style={{ minWidth: "10%", maxWidth: "20%" }}>
          <Image
            src={imgLogo}
            alt="Logo de la Aplicacion pelicula-Api"
            style={{
              minWidth: "80%",
              maxWidth: "100%",
              minHeight: "3rem",
              maxHeight: "4rem",
              objectFit: "contain"
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 fs-5" style={{ maxHeight: "130px" }} navbarScroll>
            <Nav.Link as={NavLink} to="/Accion">Acción</Nav.Link>
            <Nav.Link as={NavLink} to="/Comedia">Comedia</Nav.Link>
            <Nav.Link as={NavLink} to="/Terror">Terror</Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={buscarPeliculas}>
            <Form.Control
              onChange={obtenerPelicula}
              value={pelicula}
              type="search"
              placeholder="Buscar película"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" type="submit">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
