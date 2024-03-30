import propTypes from 'prop-types';
import { BiArchiveIn, BiArchiveOut, BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';

function DetailPageAction({ note }) {
    const navigate = useNavigate();

    function handleNoteStatus() {
        if (note.archived) {
            unarchiveNote(note.id);
        } else {
            archiveNote(note.id);
        }

        navigate("/");
    }

    function handleDeleteNote() {
        deleteNote(note.id);
        navigate("/");
    }

    return (
        <div className="detail-page__action">
            {
                note.archived ? (
                    <button className="action" onClick={handleNoteStatus}>
                        <BiArchiveOut />
                    </button>
                ) : (
                    <button className="action" onClick={handleNoteStatus}>
                        <BiArchiveIn />
                    </button>
                )
            }

            <button className="action" onClick={handleDeleteNote}>
                <BiTrash />
            </button>
        </div>
    );
}

DetailPageAction.propTypes = {
    note: propTypes.object.isRequired
};

export default DetailPageAction;