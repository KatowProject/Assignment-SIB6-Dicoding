import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import Navbar from "../components/navbar";

function PrivateRoute() {
    const { auth } = useContext(AuthContext);

    return !auth ? <Navigate to="/auth/login" />
        :
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>
        </>
}

export default PrivateRoute;


