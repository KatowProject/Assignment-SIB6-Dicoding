import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';

function NoteList({ notes }) {
    return (
        <>
            {notes.length > 0 ? (
                <section className="notes-list">
                    {notes.map((note) => (
                        <article className="note-item" key={note.id}>
                            <Link to={`/notes/${note.id}`}>
                                <h3 className="note-item__title">{note.title}</h3>
                            </Link>
                            <p className="note-item__createdAt">
                                <time>{showFormattedDate(note.createdAt)}</time>
                            </p>
                            <p className="note-item__body">{note.body}</p>
                        </article>
                    ))}
                </section>
            ) : (
                <section className="notes-list-empty">
                    <p className="notes-list__empty">
                        Tidak ada catatan
                    </p>
                </section>
            )}

        </>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default NoteList;