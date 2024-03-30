import { BiSolidBookAdd } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function HomepageAction() {
    // function navigate
    const navigate = useNavigate();

    function handleAddNote() {
        navigate('/notes/add');
    }

    return (
        <>
            <div className="homepage__action" onClick={handleAddNote}>
                <button className="action">
                    <BiSolidBookAdd />
                </button>
            </div>
        </>
    );
}

export default HomepageAction;