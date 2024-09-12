import { Outlet } from "react-router-dom";
import Header from "../components/Pages/Share/Header/Header";
import Footer from "../components/Pages/Share/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;