import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function PrivateRoute() {
    const { auth } = useContext(AuthContext);

    return auth ?
        <>
            <h1>Test</h1>
            <Outlet />
        </>
        : <Navigate to="/auth/login" />;
}


export default PrivateRoute;


