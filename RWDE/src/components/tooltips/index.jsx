import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import asyncThread from '../../states/thread/action';

export default function Tooltips({ vote, children, type, disabled = false }) {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    function handleVoteUp() {
        if (disabled) return;
        if (type === 'thread') {
            dispatch(asyncThread.asyncUpvoteThread(vote.id))
                .then(() => console.log('upvoted'));
        }
    }

    function handleVoteDown() {
        if (disabled) return;

        if (type === 'thread') {
            dispatch(asyncThread.asyncDownvoteThread(vote.id))
        }
        // if (type === 'thread') {
        //     dispatch(asyncVoteThread(vote._id, 'down'));
        // } else {
        //     dispatch(asyncVoteComment(vote._id, 'down'));
        // }
    }

    return (
        <div className="button-tooltips text-muted">
            <button
                className={`button-tooltip ${disabled ? 'no-clicked' : ''}`}
                onClick={handleVoteUp}
            >
                <span className="icon-text">
                    {vote.upVotesBy.includes(auth.id)
                        ? <FaThumbsUp className='me-1' />
                        : <FaRegThumbsUp className='me-1' />
                    }
                    {vote.upVotesBy.length}
                </span>
            </button>
            <button
                className={`button-tooltip ${disabled ? 'no-clicked' : ''}`}
                onClick={handleVoteDown}
            >
                <span className="icon-text">
                    {vote.downVotesBy.includes(auth.id)
                        ? <FaThumbsDown className='me-1' />
                        : <FaRegThumbsDown className='me-1' />
                    }
                    {vote.downVotesBy.length}
                </span>
            </button>

            {children}
        </div>
    )
}

Tooltips.propTypes = {
    vote: propTypes.object.isRequired,
    children: propTypes.node,
    type: propTypes.oneOf(['thread', 'comment']),
    disabled: propTypes.bool
}