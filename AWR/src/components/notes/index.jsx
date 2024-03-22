import React from "react";
import { Row, Col, Card, Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import { showFormattedDate } from "../../utils";

export default function Notes({ data, querySearch, onDelete, onArchive, onUnarchive }) {
    const notes = data.filter((note) => !note.archived && note.title.toLowerCase().includes(querySearch.toLowerCase()));
    const archives = data.filter((note) => note.archived && note.title.toLowerCase().includes(querySearch.toLowerCase()));

    return (
        <>
            <Row>
                <Col xs={6} className="pb-5">
                    <Card>
                        <Card.Header>List Catatan</Card.Header>
                        <Card.Body className="overflow-auto">
                            <Row>
                                <Col xs={12}>
                                    <Row className="g-3">
                                        {notes.length > 0 ? (
                                            <>
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
                                                                    <Button variant="outline-danger" size="sm" onClick={() => onDelete(note.id)}>
                                                                        Hapus</Button>
                                                                    <Button variant="outline-secondary" size="sm" onClick={() => onArchive(note.id)}>
                                                                        Arsip
                                                                    </Button>
                                                                </ButtonGroup>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </>
                                        ) : (
                                            <p className="text-center fw-bold">Tidak ada catatan</p>
                                        )}
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
                                                        <Button variant="outline-danger" size="sm" onClick={() => removeNote(note.id)}>Hapus</Button>
                                                        <Button variant="outline-secondary" size="sm" onClick={() => onUnarchive(note.id)}>Unarchive</Button>
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