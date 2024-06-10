import { Outlet } from "react-router-dom";
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import CopyRight from '../components/Footer/CopyRight';


const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <footer><Footer /></footer>
            <CopyRight />
        </>
    )
};

export default Layout;