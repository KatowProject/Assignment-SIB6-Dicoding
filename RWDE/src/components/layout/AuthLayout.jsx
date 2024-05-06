import { Container } from 'react-bootstrap';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function AuthLayout() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth) {
            navigate('/');
        }
    }, [auth, navigate]);
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