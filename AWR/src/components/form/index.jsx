import React from 'react';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

class FormContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.titleLimit = 50;
    }

    handleTitleChange(event) {
        const newTitle = event.target.value;
        if (newTitle.length > this.titleLimit) return alert('Judul melebihi batas karakter!');

        this.setState({ title: newTitle });
    }

    handleBodyChange(event) {
        this.setState({ body: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);

        this.setState({
            title: '',
            body: ''
        });
    }

    render() {
        const remainingCharacters = this.titleLimit - this.state.title.length;

        return (
            <>
                <Col xs={6}>
                    <Card>
                        <Card.Header>Buat Catatan</Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicTitle">
                                    <Form.Label className='mb-0'>Judul</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Masukkan judul"
                                        value={this.state.title}
                                        onChange={this.handleTitleChange}
                                    />
                                    <Form.Text className="text-muted">
                                        {remainingCharacters} karakter tersisa
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicContent">
                                    <Form.Label className='mb-0'>Catatan</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        placeholder="Masukkan catatan"
                                        value={this.state.body}
                                        onChange={this.handleBodyChange}
                                    />
                                </Form.Group>

                                <Button variant="outline-secondary" type="submit" className='form-control'>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default FormContent;