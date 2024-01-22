import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Pages/Home/Footer";




const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;