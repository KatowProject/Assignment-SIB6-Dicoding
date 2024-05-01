import { Container } from 'react-bootstrap';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export function AuthLayout() {
    return (
        <>
            <main className='d-flex align-items-center justify-content-center vh-100'>
                <Container fluid>
                    <Outlet />
                    <ScrollRestoration />
                </Container>
            </main>
        </>
    )
}