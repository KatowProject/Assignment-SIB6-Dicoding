import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import useInput from "../hooks/useInput";


export default function CreateThread() {
    const [title, onTitleChange] = useInput('');
    const [category, onCategoryChange] = useInput('');
    const [content, onContentChange] = useInput('');

    function onSubmit(e) {
        e.preventDefault();

        // create thread
    }
    return (
        <Row className="justify-content-center">
            <Col xl={10} className="mb-3">
                <Link to="/" className="back-link">
                    <FaArrowLeft className="me-2" />
                    Back to Main Menu</Link>
            </Col>

            <Col xl={10}>
                <Card>
                    <Card.Header>
                        <Card.Title>Create Thread</Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={title} onChange={onTitleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" value={category} onChange={onCategoryChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Content</Form.Label>
                                <div
                                    className="form-control input-markdown"
                                    contentEditable
                                    data-placeholder="Write your description here..."
                                    onInput={(e) => onContentChange(e.target.innerHTML)}
                                >
                                    {content || ''}
                                </div>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}