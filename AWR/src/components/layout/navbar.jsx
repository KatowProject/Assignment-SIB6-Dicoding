import React from "react";
import { Container, Navbar } from 'react-bootstrap';

export default function NavbarLayout() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow mb-3">
            <Container fluid className="d-flex justify-content-center">
                <Navbar.Brand href="#home">Notes</Navbar.Brand>
            </Container>
        </Navbar>
    )
}