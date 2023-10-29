import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="collapse navbar-collapse ms-md-auto justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><h4>Página Inicial</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className="nav-link"><h4>Contato</h4></Link>
                        </li>
                    </ul>

                </div>
            </nav >
        </div>

    );

}



