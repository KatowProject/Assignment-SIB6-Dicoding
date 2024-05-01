import { Button } from 'react-bootstrap';

import propTypes from 'prop-types';

export default function CategoryItem({ category }) {
    return (
        <Button variant="outline-primary" className="d-inline-block me-2 mb-2">
            #{category}
        </Button>
    )
}

CategoryItem.propTypes = {
    category: propTypes.string.isRequired
}