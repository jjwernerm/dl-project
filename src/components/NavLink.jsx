import { Button, Container, Form, Navbar, Modal } from 'react-bootstrap';
import { useState } from 'react';
import cartLogo from '../img/cartLogo.png';
import '../styles/navlink.css'

function Navlink() {

  const [registrarModal, setRegistrarModal] = useState(false);
  const handleClose_R = () => setRegistrarModal(false);
  const handleRegistrarModal = () => setRegistrarModal(true);

  const [ingresarModal, setIngresarModal] = useState(false);
  const handleClose_I = () => setIngresarModal(false);
  const handleIngresarModal = () => setIngresarModal(true);

  return (
    <>
      <div >
        <Navbar expand="lg">
          <Container fluid>
            <Navbar>
              <img className="cartLogo" src={ cartLogo } alt="" />
              Shopping.net
            </Navbar>
            <Navbar.Collapse>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar en Shopping.net "
                  className="me-2"
                  aria-label="Search"
                  size="lg"
                />
                <Button
                  className="btn-buscar btn-navbar"
                  variant="success"
                  size="lg">
                    Buscar
                </Button>
              </Form>
              <div className="btn-user">
                <Button
                  onClick={handleRegistrarModal}
                  className="btn-registrar btn-navbar btn-user"
                  variant="outline-light"
                  size="lg">
                    Registrar
                </Button>
                <Button
                  onClick={handleIngresarModal}
                  className="btn-ingresar btn-navbar btn-user"
                  size="lg">
                    Ingresar
                </Button>
              </div>

              {/* ----- Registrar Modal ----- */}
                <Modal show={registrarModal} onHide={handleClose_R}>
                  <Modal.Header closeButton>
                    <Modal.Title>Registrar Usuario</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Formulario para registrar el usuario</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose_R}>
                    Cerrar
                    </Button>
                    <Button className="btn-modal" onClick={handleClose_R}>
                    Registrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              {/* ----- FIN ----- */}

              {/* ----- Ingresar Modal ----- */}
              <Modal show={ingresarModal} onHide={handleClose_I}>
                  <Modal.Header closeButton>
                    <Modal.Title>Ingresar Usuario</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Formulario para que el usuario ingrese</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose_I}>
                    Cerrar
                    </Button>
                    <Button className="btn-modal" onClick={handleClose_I}>
                    Ingresar
                    </Button>
                  </Modal.Footer>
                </Modal>
              {/* ----- FIN ----- */}

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navlink;
