import { Card, Col, Badge } from 'react-bootstrap';
import { FaUser, FaRegThumbsUp, FaRegThumbsDown, FaRegCommentAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

export default function OverviewThreadItem({ thread }) {
    return (
        <Col xl={12} className="mb-3">
            <Card className="h-100">
                <Card.Body>
                    <Card.Title>{thread.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Badge pill bg="info" className="me-2">
                            #{thread.category}
                        </Badge>
                        <FaUser className="me-1" /> Posted by {thread.author}
                    </Card.Subtitle>
                    <Card.Text>
                        {thread.description.substring(0, 500)}...
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <span className="me-3 icon-text"><FaRegThumbsUp /> {thread.upvotes}</span>
                        <span className="me-3 icon-text"><FaRegThumbsDown /> {thread.downvotes}</span>
                        <span className="me-3 icon-text"><FaRegCommentAlt /> {thread.total_replies}</span>
                    </small>
                    <Link className="btn btn-primary btn-sm float-end" to={`/thread/${thread.id}`}>
                        <FaArrowRight className="me-2" />
                        Read More
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}

OverviewThreadItem.propTypes = {
    thread: propTypes.object.isRequired
}