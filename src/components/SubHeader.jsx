import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <Container>
          <div
            className="collapse navbar-collapse ms-md-auto justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  <h4>Molinetes</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  <h4>Carretilhas</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  <h4>Varas</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  <h4>Iscas</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  <h4>Linhas</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  <h4>Acessórios</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  <h4>Vestuário</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  <h4>Ofertas</h4>
                  <img src="../img/sale.png" width={100 + "px"} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <h4>Carrinho</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercicioFetch" className="nav-link">
                  <h4>Exercicio Fetch</h4>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
}
