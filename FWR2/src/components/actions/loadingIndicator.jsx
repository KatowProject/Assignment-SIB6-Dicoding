import PropTypes from 'prop-types';
import { ClockLoader } from "react-spinners";

function LoadingIndicator({ loading, isExiting }) {
    return (
        <div className={`loading-overlay ${isExiting ? 'exiting' : ''}`}>
            <ClockLoader loading={loading} size={100} />
        </div>
    );
}

LoadingIndicator.propTypes = {
    loading: PropTypes.bool,
    isExiting: PropTypes.bool
};

export default LoadingIndicator;