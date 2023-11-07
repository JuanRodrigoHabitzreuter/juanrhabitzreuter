import { Container, Image } from "react-bootstrap";

export default function HomeScreen() {
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
      {/* termina  aqui o carrossel  */}
    </Container>

  );
}
//     <Container2>
//       function DefaultExample() {

//     <ListGroup>
//       <ListGroup.Item>Molinetes</ListGroup.Item>
//       <ListGroup.Item>Carretilhas</ListGroup.Item>
//       <ListGroup.Item>Varas</ListGroup.Item>
//       <ListGroup.Item>Iscas</ListGroup.Item>
//       <ListGroup.Item>Linhas</ListGroup.Item>
//       <ListGroup.Item>Acessórios</ListGroup.Item>
//       <ListGroup.Item>Vestuário</ListGroup.Item>
//     </ListGroup>
//     }
//       </Container2>
//   );
// }