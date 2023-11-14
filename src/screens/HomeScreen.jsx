import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  // https://pt-br.react.dev/reference/react/useState
  const [dados, setDados] = useState([]);

  // https://pt-br.react.dev/reference/react/useEffect
  useEffect(() => {
    //https://developer.mozilla.org/docs/Web/API/fetch
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resposta) => resposta.json())
      .then((data) => setDados(data));
  }, []);
  return (
    <Container>
      {/* Começa aqui o carrossel  */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <Image
                //   src="//picsum.photos/800/400"
                src={require("../img/carrosel1.avif")}
                className="d-block w-100"
                style={{
                  maxWidth: 600,
                }}
                alt="..."
              /> */}
            <div
              style={{
                height: 200,
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${require("../img/carrosel1.avif")})`,
              }}
            >
              1
            </div>
          </div>
          <div className="carousel-item">
            <div
              style={{
                height: 200,
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${require("../img/carrosel2.avif")})`,
              }}
            >
              2
            </div>
          </div>
          <div className="carousel-item">
            {/* <Image
                //   src="//picsum.photos/800/400"
                src={require("../img/carrosel3.avif")}
                className="d-block w-100"
                alt="..."
              /> */}
            <div
              style={{
                height: 200,
                width: "100%",
                backgroundSize: "cover",
                backgroundImage: `url(${require("../img/carrosel3.avif")})`,
              }}
            >
              3
            </div>
          </div>
          {/* <div className="carousel-item">
              <Image
                //   src="//picsum.photos/800/400"
                src={require("../img/carrosel4.avif")}
                className="d-block w-100"
                alt="..."
              />
            </div> */}
          <div
            style={{
              height: 200,
              width: "100%",
              backgroundSize: "cover",
              backgroundImage: `url(${require("../img/carrosel4.avif")})`,
            }}
          >
            4
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Row>
        {dados.map((dado) => (
          <Col md={4} key={dado.id} className="mb-3">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={`https://picsum.photos/id/${dado.id}/200/100`}
              />
              {/* 
              https://getbootstrap.com/docs/4.0/utilities/flex/#justify-content
              */}
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{dado.title}</Card.Title>
                <Card.Text>{dado.body.substring(0, 20)}...</Card.Text>
                <Link to={`/vernoticia/${dado.id}`}>
                  Ver notícia completa Versão 1
                </Link>
                <Link to={"/vernoticia/" + dado.id}>
                  Ver notícia completa Versão 2
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};