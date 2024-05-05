import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

export function AppLayout() {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate('/login');
        }
    }, [auth, navigate]);

    return (
        <>
            <Header />

            <main>
                <Container>
                    <Outlet />
                    <ScrollRestoration />
                </Container>
            </main>

            <Footer />
        </>
    )
}