import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark-subtle">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3">
                        <h4>Institucional</h4>
                        {/* <ul className="list-group"> */}
                            <li className="list-group-item"><Link to="/cursos">A empresa</Link></li>
                            <li className="list-group-item"><Link to="/sobre">Trocas e Devoluções</Link></li>
                            <li className="list-group-item"><Link to="/sobre">Parceiros</Link></li>
                            <li className="list-group-item"><Link to="/sobre">Contato</Link></li>
                        {/* </ul> */}
                    </div>
                    <div className="col-md-3">
                        <h4>Área do Cliente</h4>
                        <li className="list-group-item"><Link to="/cursos">Minha conta</Link></li>
                        <li className="list-group-item"><Link to="/sobre">Meus pedidos</Link></li>
                        <li className="list-group-item"><Link to="/sobre">Rastrear Pedidos</Link></li>
                        <li className="list-group-item"><Link to="/sobre">Boletos</Link></li>
                    </div>
                    <div className="col-md-3">
                        <h4>Central da ajuda</h4>
                        <li className="list-group-item"><Link to="/sobre">Central de atendimento</Link></li>
                        <li className="list-group-item"><Link to="/cursos">Formas de pagamentos</Link></li>
                        <li className="list-group-item"><Link to="/sobre">Perguntas Frequentes</Link></li>
                        <li className="list-group-item"><Link to="/sobre">Cadastro</Link></li>
                    </div>
                    <div className="col-md-3">
                        <h4>PescaVirtual</h4>
                        <p>2023 - Todos os direitos reservados</p>
                    </div>
                    <div>
                    <img src="./site_pvremovebg-preview.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </footer>
    )
}