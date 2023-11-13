// import * as React from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';
// import ExercicioFetch from './ExercicioFetch';

// // Função do componente para a página de perfil do usuário.
// function NoticiaSingle() {
//   // Obtém o parâmetro "id" da URL usando o hook useParams do React Router.
//   let { id } = useParams();
//   // ...
// }

// // Função do componente principal do aplicativo.
// function App() {
//   return (
//     // Define as rotas usando o componente Routes do React Router.
//     <Routes>
//       {/* Rota principal para a seção de dados (anteriormente "users"). */}
//       <Route path="dado">
//         {/* Rota aninhada para exibição de uma notícia individual, usa o componente NoticiaSingle. */}
//         <Route path=":id" element={<NoticiaSingle />} />
        
//         {/* Rota para o perfil do usuário atual (me). Não foi fornecido um componente para o elemento. */}
//         <Route path="me" element={"..."} />
//       </Route>
//     </Routes>
//   );
// }

// // import { Container } from "react-bootstrap";


// // https://devpleno.com/router-props-2 
// // (utilizar props)
// // https://upmostly.com/tutorials/how-to-pass-param-to-a-component-in-react-router
// // (utiliza o sistema de navegação do REact Router Dom)
// export default function NoticiaSingle() {
   
//     let { dadoid } = useParams();

//     // https://reactrouter.com/en/main/hooks/use-params
//     // usem o useParams()

//     return (
//         <Container>
//             <h1></h1>
//             <p></p>

//             <Routes>
//                 <Route path="dados">
//                     <Route path=":dadoid" element={<ProfilePage />} />
//                     <Route path="me" element={...} />
//                 </Route>
//             </Routes>
//         </Container>
//     )
// }


