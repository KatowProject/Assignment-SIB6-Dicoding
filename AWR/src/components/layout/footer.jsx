import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className='footer bg-body-tertiary'>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; {new Date().getFullYear()} KatowProject
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}