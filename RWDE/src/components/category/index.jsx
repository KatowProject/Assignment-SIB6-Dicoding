import { Card } from 'react-bootstrap';
import propTypes from 'prop-types';

import CategoryItem from './CategoryItem';

import PartialLoading from '../loading/PartialLoading';

export default function Category({ isLoading, categories }) {
    return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title>Category</Card.Title>
                </Card.Header>
                <Card.Body>
                    {isLoading ?
                        <PartialLoading />
                        :
                        categories.map((category, index) => (
                            <CategoryItem key={index} category={category} />
                        ))
                    }
                </Card.Body>
            </Card>
        </>
    )
}

Category.propTypes = {
    categories: propTypes.array.isRequired,
    isLoading: propTypes.bool
}