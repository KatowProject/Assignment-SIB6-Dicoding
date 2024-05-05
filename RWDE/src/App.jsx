import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";

import routes from "./routes";
import { useEffect } from "react";
import { asyncPreloadMe } from "./states/preload/action";

export default function App() {
    const isPreload = useSelector((state) => state.preload);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPreloadMe());
    }, [dispatch]);

    if (!isPreload) {
        return null;
    }

    return (
        <RouterProvider router={routes} />
    )
}