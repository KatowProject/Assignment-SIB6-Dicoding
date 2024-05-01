import { Card } from 'react-bootstrap';
import propTypes from 'prop-types';

import CategoryItem from './CategoryItem';

export default function Category({ categories }) {
    return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title>Category</Card.Title>
                </Card.Header>
                <Card.Body>
                    {categories.map((category, index) => (
                        <CategoryItem key={index} category={category} />
                    ))}
                </Card.Body>
            </Card>
        </>
    )
}

Category.propTypes = {
    categories: propTypes.array.isRequired
}