import { Form, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useTitle from '../hooks/useTitle';
import useInput from '../hooks/useInput';

export function LoginPage() {
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");

    useTitle("Login - Open Threads");

    return (
        <Row className="justify-content-center">
            <Col md={4}>
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <Image src="/logo.png" width="250px" alt="Logo" className="me-2" />
                    <h2 className='fw-bold'>Open Threads</h2>
                </div>

                <Form>
                    <h2 className="text-center mb-4">Login</h2>

                    <Form.Group className="mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onInput={setEmail} />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onInput={setPassword} />
                    </Form.Group>

                    <Button type="submit" className="w-100 mb-4">Sign in</Button>

                    <div className="text-center">
                        <p>Not a member? <Link to="/register">Register</Link></p>
                    </div>
                </Form>

                <div className='text-center'>
                    <Link to="/">Back to Home</Link>
                </div>
            </Col>
        </Row>
    );
}