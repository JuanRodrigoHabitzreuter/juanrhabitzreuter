import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MostraId from "../components/MostreId";

// https://devpleno.com/router-props-2
// (utilizar props)
// https://upmostly.com/tutorials/how-to-pass-param-to-a-component-in-react-router
// (utiliza o sistema de navegação do REact Router Dom)
export default function NoticiaSingle() {
  // https://reactrouter.com/en/main/hooks/use-params
  // usem o useParams()
  const [noticia, setNoticia] = useState({});

  const { idNoticia } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + idNoticia)
      .then((res) => res.json())
      .then((res) => {
        setNoticia(res);
      });
  }, [idNoticia]);

  return (
    <Container>
      <h1>{noticia.title}</h1>
      <p>{noticia.body}</p>
      <MostraId
        idAtual={noticia.id}
        
      />
    </Container>
  );
}
