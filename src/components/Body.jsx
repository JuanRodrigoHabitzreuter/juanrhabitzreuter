import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SubHeader from "./SubHeader"


export default function Body(){
    return(
        <div>
            <Header></Header>
            <SubHeader></SubHeader>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}