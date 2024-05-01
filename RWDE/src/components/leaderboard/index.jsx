import { Card, ListGroup } from 'react-bootstrap';
import propTypes from 'prop-types';

export default function Leaderboard({ title = 'Leaderboard', users }) {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <ListGroup>
                    {users.map((user, index) => (
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img src={user.avatar} alt={user.name} className="me-2" style={{ width: '40px', borderRadius: '50%' }} />
                                {user.name}
                            </div>
                            <span>{user.score}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

Leaderboard.propTypes = {
    users: propTypes.array,
    title: propTypes.string
}