import { Button, Card, Row } from 'react-bootstrap';
import { RiChatNewLine } from "react-icons/ri";
import propTypes from 'prop-types';

import OverviewThreadItem from './OverviewThreadItem';
import PartialLoading from '../loading/PartialLoading';

export default function OverviewThreads({ isLoading = true, threads }) {
    return (
        <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title className="mb-0">Threads</Card.Title>
                <Button variant="primary" size='sm'>
                    <RiChatNewLine className='me-2' />
                    Create Thread
                </Button>
            </Card.Header>
            <Card.Body>
                <Row>
                    {isLoading ?
                        <PartialLoading />
                        :
                        threads.map((thread) =>
                        (
                            <OverviewThreadItem
                                key={thread.id}
                                thread={thread}
                            />
                        ))
                    }
                </Row>
            </Card.Body>
        </Card>
    )
}

OverviewThreads.propTypes = {
    threads: propTypes.array.isRequired,
    isLoading: propTypes.bool
}