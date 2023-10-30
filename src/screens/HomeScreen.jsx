export default function HomeScreen() {
    return (
        <div>
            {/* Começa aqui o carrossel  */}
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="//picsum.photos/800/400" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="//picsum.photos/800/400" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="//picsum.photos/800/400" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* termina  aqui o carrossel  */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-4">

                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-warning">

                            <div className="col-md-4">1</div>
                            <div className="col-md-4">2</div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>


    )
}