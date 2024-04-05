import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LangContext from '../../contexts/LangContext';

import { showFormattedDate } from '../../utils';
import id from '../../i18n/id.json';
import gb from '../../i18n/gb.json';

const t = { id, gb };
function NoteList({ notes }) {
    const { lang } = useContext(LangContext);
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
                                <time>{showFormattedDate(note.createdAt, t[lang].locale)}</time>
                            </p>
                            <p className="note-item__body">{note.body}</p>
                        </article>
                    ))}
                </section>
            ) : (
                <section className="notes-list-empty">
                    <p className="notes-list__empty">
                            {t[lang].notes.empty}
                    </p>
                </section>
            )}

        </>
    )
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired
};

export default NoteList;