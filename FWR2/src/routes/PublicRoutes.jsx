import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import Navbar from "../components/navbar";

function PublicRoute() {
    const { auth } = useContext(AuthContext);

    return auth ?
        <Navigate to="/" />
        :
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
}


export default PublicRoute;


