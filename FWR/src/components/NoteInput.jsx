import PropTypes from 'prop-types';
import { parsingtoHTML } from '../utils';

function NoteInput({ state, onChangeTitle, onInputBody, initialBodyEdit }) {
    return (
        <div className='add-new-page__input'>
            <input
                className='add-new-page__input__title'
                placeholder='Catatan rahasia'
                value={state.title}
                onChange={onChangeTitle}
                spellCheck='false'
            />
            <div
                className='add-new-page__input__body'
                contentEditable='true'
                data-placeholder='Sebenarnya saya adalah ....'
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