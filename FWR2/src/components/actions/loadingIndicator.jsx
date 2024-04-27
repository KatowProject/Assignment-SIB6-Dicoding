import PropTypes from 'prop-types';
import { ClockLoader } from "react-spinners";

function LoadingIndicator({ loading, isExiting, theme }) {
    const spinnerColor = theme === 'dark' ? '#FFFFFF' : '#000000'; // putih untuk tema gelap, hitam untuk tema terang

    return (
        <div className={`loading-overlay ${isExiting ? 'exiting' : ''}`}>
            <ClockLoader loading={loading} size={100} color={spinnerColor} />
        </div>
    );
}

LoadingIndicator.propTypes = {
    loading: PropTypes.bool,
    isExiting: PropTypes.bool,
    theme: PropTypes.string
};

export default LoadingIndicator;