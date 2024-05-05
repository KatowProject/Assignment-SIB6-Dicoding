import { FaRegThumbsUp, FaRegThumbsDown, FaRegCommentAlt } from 'react-icons/fa';
import propTypes from 'prop-types';

export default function Tooltips({ children }) {

    return (
        <div className="button-tooltips text-muted">
            <button className="button-tooltip">
                <span className="icon-text"><FaRegThumbsUp /> 1</span>
            </button>
            <button className="button-tooltip">
                <span className="icon-text"><FaRegThumbsDown /> 1</span>
            </button>

            {children}
        </div>
    )
}

Tooltips.propTypes = {
    children: propTypes.node.isRequired
}