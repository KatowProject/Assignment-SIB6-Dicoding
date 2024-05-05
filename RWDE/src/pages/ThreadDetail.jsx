import { Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

import useTitle from "../hooks/useTitle";
import Tooltips from "../components/tooltips";
import { showFormattedDate } from "../utils";

export default function ThreadDetail() {
    useTitle("Thread Detail - Open Threads");

    const { id } = useParams();

    const comments = [
        {
            profilePicture: "https://via.placeholder.com/40",
            profileName: "User 1",
            date: "2021-10-01T00:00:00Z",
            positiveVotes: 5,
            negativeVotes: 0,
            content: "Comment 1",
        },
        {
            profilePicture: "https://via.placeholder.com/40",
            profileName: "User 2",
            date: "2021-10-02T00:00:00Z",
            positiveVotes: 2,
            negativeVotes: 1,
            content: "Comment 2",
        }
    ];

    return (
        <Row>
            <Col xl={12} className="mb-3">
                <Link to="/" className="back-link">
                    <FaArrowLeft className="me-2" />
                    Back to Main Menu</Link>
            </Col>

            <Col xl={12} className="mb-3">
                <Card>
                    <Card.Header>
                        <Card.Title>
                            Thread Title
                            <span className="badge bg-info float-end">#Category</span>s
                        </Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <Card.Text>
                            Thread Description
                        </Card.Text>

                        <Card.Subtitle className="mb-2 text-muted">
                            <Tooltips />
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>

            <Col xl={12} className="mb-3">
                <Card>
                    <Card.Body>
                        <Card.Title className="mb-3">Comments</Card.Title>

                        {comments.map((comment, index) => (
                            <ListGroup.Item key={index}>
                                <div className="d-flex align-items-start py-2">
                                    <Image src={comment.profilePicture} alt="Profile" roundedCircle className="me-2" />
                                    <div className="d-inline-block w-100">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <strong>{comment.profileName}</strong>
                                            <div>{showFormattedDate(comment.date)}</div>
                                        </div>
                                        <div>{comment.content}</div>
                                        <Tooltips />
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}