import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function PublicRoute() {
    const { auth } = useContext(AuthContext);

    return auth ?
        <Navigate to="/" />
        : <Outlet />;
}


export default PublicRoute;


