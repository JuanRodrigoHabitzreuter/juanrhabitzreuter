
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from './../components/Body';
import OfertaScreen from "../screens/OfertaScreen";
import ExercicioFetch from "../screens/ExercicioFetch";

export default function RouterRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/" >
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<OfertaScreen />} path="/oferta" />
                    <Route element={<ExercicioFetch />} path="/exercicioFetch" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}