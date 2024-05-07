import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";

import useTitle from "../hooks/useTitle";
import Category from "../components/category";
import Leaderboard from "../components/leaderboard";
import OverviewThreads from "../components/thread/OverviewThreads";

import asyncGetUsers from "../states/users/action";
import asyncThreads from "../states/threads/action";
import { useSearchParams } from "react-router-dom";


export default function HomePage() {
    useTitle("Home - Open Threads");

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    // const category = searchParams.get("category");

    const [isLoading, setIsLoading] = useState(true);

    const threads = useSelector((state) => state.threads) ?? [];
    const users = useSelector((state) => state.users);

    useEffect(() => {
        //    getThreads();
        dispatch(asyncGetUsers());
        dispatch(asyncThreads.asyncGetThreads());

        setIsLoading(false);

    }, [dispatch]);

    const categories = [];
    // get categories from threads
    threads.forEach((thread) => {
        if (!categories.includes(thread.category)) {
            categories.push(thread.category);
        }
    });

    return (
        <Row className="g-2">
            <Col md={4}>
                <Row>
                    <Col xl={12} className="mb-3">
                        <Category isLoading={isLoading} categories={categories} />
                    </Col>

                    <Col xl={12} className="mb-3">
                        {/* <Leaderboard isLoadin/g={isLoading} title="Top 5 Active Users" users={users} /> */}
                    </Col>
                </Row>
            </Col>

            <Col md={8} id="leaderboard">
                <OverviewThreads isLoading={isLoading} threads={threads} />
            </Col>
        </Row>
    )
}