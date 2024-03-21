import React from "react";
import { Form, Row, Col, Card, Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import { showFormattedDate } from "../../utils";

export default function Notes({ data, removeNote, archiveNote }) {
    const notes = data.filter((note) => !note.archived);
    const archives = data.filter((note) => note.archived);

    console.log(notes, archives);

    return (
        <>
            <Row className="g-3">
                <Col xs={6} className="pb-5">
                    <Card className="card-height">
                        <Card.Header>List Catatan</Card.Header>
                        <Card.Body className="overflow-auto">
                            <Row className="g-3">
                                <Col xs={12}>
                                    <div className="fixed-search">
                                        <InputGroup className="mb-3 shadow-lg">
                                            <Button variant="primary" id="search" disabled>
                                                <i className="bi bi-search"></i>
                                            </Button>
                                            <FormControl
                                                type="text"
                                                id="searchBook"
                                                placeholder="Search Note"
                                            />
                                        </InputGroup>
                                    </div>

                                    <Row className="g-3">
                                        {notes.map((note, index) => (
                                            <Col xs={4} key={index}>
                                                <Card>
                                                    <Card.Body>
                                                        <Card.Title>{note.title}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">
                                                            {showFormattedDate(note.createdAt)}
                                                        </Card.Subtitle>
                                                        <Card.Text className="card-content">
                                                            {note.body}
                                                        </Card.Text>
                                                        {/* delete and archive button group */}
                                                        <ButtonGroup className="w-100">
                                                            <Button variant="outline-danger" size="sm" onClick={() => removeNote(note.id)}>
                                                                Hapus</Button>
                                                            <Button variant="outline-secondary" size="sm" onClick={() => archiveNote(note.id)}>
                                                                Arsip
                                                            </Button>
                                                        </ButtonGroup>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={6} className="pb-5">
                    <Card>
                        <Card.Header>Arsip</Card.Header>
                        <Card.Body>
                            <Row className="g-3">
                                {archives.length > 0 ? (
                                    archives.map((note, index) => (
                                        <Col xs={4} key={index}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>{note.title}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">
                                                        {showFormattedDate(note.createdAt)}
                                                    </Card.Subtitle>
                                                    <Card.Text className="card-content">
                                                        {note.body}
                                                    </Card.Text>
                                                    {/* delete and archive button group */}
                                                    <ButtonGroup className="w-100">
                                                        <Button variant="outline-danger" size="sm">Hapus</Button>
                                                        <Button variant="outline-secondary" size="sm">Arsip</Button>
                                                    </ButtonGroup>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                                ) : (
                                    <p className="text-center fw-bold">Tidak ada catatan</p>
                                )}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}