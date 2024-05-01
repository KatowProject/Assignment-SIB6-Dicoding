import { Col, Row } from 'react-bootstrap';

import Leaderboard from '../components/leaderboard';
import useTitle from '../hooks/useTitle';

export default function LeaderboardPage() {
    useTitle("Leaderboard - Open Threads");

    const users = [
        { name: "User 1", score: 100, avatar: "https://via.placeholder.com/40" },
        { name: "User 2", score: 90, avatar: "https://via.placeholder.com/40" },
        { name: "User 3", score: 80, avatar: "https://via.placeholder.com/40" },
        { name: "User 4", score: 70, avatar: "https://via.placeholder.com/40" },
        { name: "User 5", score: 60, avatar: "https://via.placeholder.com/40" },
    ];

    return (
        <Row className='justify-content-center'>
            <Col md={8}>
                <Row>
                    <Col xl={12} className="mb-3">
                        <Leaderboard users={users} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}