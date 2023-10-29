import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
               
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-md-auto justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Página Inicial </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contato" className="nav-link">Contato</Link>
                            </li>
                        </ul>
                        <h4 className="my-0 fw-normal">Entrar</h4>
                    </div>
                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                        Cadastre-se gratuitamente
                    </button>

                </div>
            </nav >
        </div>

    );
}

