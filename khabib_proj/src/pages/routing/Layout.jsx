import Header from "../../components/Layout/Header/Header.jsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
