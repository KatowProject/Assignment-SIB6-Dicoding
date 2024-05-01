import { Outlet, ScrollRestoration } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "./Footer";
import Header from "./Header";


export function AppLayout() {
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