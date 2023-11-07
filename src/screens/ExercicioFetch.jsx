import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ExercicioFetch = () => {
  // https://pt-br.react.dev/reference/react/useState
  const [dados, setDados] = useState([]);

  // https://pt-br.react.dev/reference/react/useEffect
  useEffect(() => {
    //https://developer.mozilla.org/docs/Web/API/fetch
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resposta) => resposta.json())
      .then((data) => setDados(data));
  }, []);
  // array vazio em dependência
  // diz que a função será executada
  // somente uma vez quando o componente for montado

  // https://picsum.photos/id/237/200/300

  // https://jsonplaceholder.typicode.com/posts

  return (
    <>
      {/* https://react-bootstrap.netlify.app/docs/components/cards */}
      <Container className="my-5">
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
                  <Button variant="primary">Ir para algum lugar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Row>
          <Col md={4}>1</Col>
          <Col md={4}>2</Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/300/200" />
              <Card.Body>
                <Card.Title>Título</Card.Title>
                <Card.Text>Conteúdo</Card.Text>
                <Button variant="primary">Ir para algum lugar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default ExercicioFetch;
//  Belligol é ele ༼ つ ◕_◕ ༽つ
