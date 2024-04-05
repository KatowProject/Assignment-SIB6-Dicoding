import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import LangContext from '../../contexts/LangContext';

import { parsingtoHTML } from '../../utils';

import id from '../../i18n/id.json';
import gb from '../../i18n/gb.json';

const t = { id, gb };

function NoteInput({ state, onChangeTitle, onInputBody, initialBodyEdit }) {
    const { lang } = useContext(LangContext);

    return (
        <div className='add-new-page__input'>
            <Link to='/' className="back-home">
                <span className="back-home__icon">
                    <BsArrowLeft />
                    {t[lang].create_note.back}
                </span>
            </Link>
            <input
                className='add-new-page__input__title'
                placeholder={t[lang].create_note.title_placeholder}
                value={state.title}
                onChange={onChangeTitle}
                spellCheck='false'
            />
            <div
                className='add-new-page__input__body'
                contentEditable='true'
                data-placeholder={t[lang].create_note.body_placeholder}
                onInput={onInputBody}
                suppressContentEditableWarning={true}
            >
                {initialBodyEdit ? parsingtoHTML(initialBodyEdit) : ''}
            </div>
        </div>
    );
}

NoteInput.propTypes = {
    state: PropTypes.object.isRequired,
    onChangeTitle: PropTypes.func.isRequired,
    onInputBody: PropTypes.func.isRequired,
    initialBodyEdit: PropTypes.string
};

export default NoteInput;