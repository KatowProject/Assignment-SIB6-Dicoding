import { Col, Row } from "react-bootstrap";

import useTitle from "../hooks/useTitle";
import Category from "../components/category";
import Leaderboard from "../components/leaderboard";
import OverviewThreads from "../components/thread/OverviewThreads";

export default function HomePage() {
    useTitle("Home - Open Threads");
    let isLoading = false;

    const users = [
        { name: "User 1", score: 100, avatar: "https://via.placeholder.com/40" },
        { name: "User 2", score: 90, avatar: "https://via.placeholder.com/40" },
        { name: "User 3", score: 80, avatar: "https://via.placeholder.com/40" },
        { name: "User 4", score: 70, avatar: "https://via.placeholder.com/40" },
        { name: "User 5", score: 60, avatar: "https://via.placeholder.com/40" },
    ];

    const categories = ["React", "Vue", "Angular", "Svelte", "Ember"];

    const threads = [
        {
            id: 1,
            title: "Thread 1",
            category: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
            author: "User 1",
            total_replies: 10,
            upvotes: 5,
            downvotes: 0,
            created_at: "2021-10-01T00:00:00Z",
        },
        {
            id: 2,
            title: "Thread 2",
            category: "Vue",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.",
            author: "User 2",
            total_replies: 5,
            upvotes: 2,
            downvotes: 1,
            created_at: "2021-10-02T00:00:00Z"
        }
    ];

    return (
        <Row className="g-2">
            <Col md={4}>
                <Row>
                    <Col xl={12} className="mb-3">
                        <Category isLoading={isLoading} categories={categories} />
                    </Col>

                    <Col xl={12} className="mb-3">
                        <Leaderboard isLoading={isLoading} title="Top 5 Active Users" users={users} />
                    </Col>
                </Row>
            </Col>

            <Col md={8} id="leaderboard">
                <OverviewThreads isLoading={isLoading} threads={threads} />
            </Col>
        </Row>
    )
}