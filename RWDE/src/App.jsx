// import { useEffect } from "react";
// import { Toaster } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";

import routes from "./routes";

export default function App() {
    return (
        <RouterProvider router={routes} />
    )
}