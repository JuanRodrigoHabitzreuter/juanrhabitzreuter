import { Button, Col, Container, Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
        <Container>
          <Col>
            <Link className="navbar-brand" to="/">
              <Image
                src={require("../img/site_pv.jpg")}
                style={{
                  maxWidth: 150,
                }}
              />
            </Link>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button size="sm" >Entrar</Button>
            <Button size="sm">Cadastre-se gratuitamente</Button>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}
