import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCheckCircle } from 'react-icons/bi';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/notes/InputNote';
import HomepageAction from '../components/actions/homePage';

function AddNote() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleBodyChange(event) {
        setBody(event.target.innerHTML);
    }

    function handleSubmit(event) {
        event.preventDefault();

        addNote({ title, body });

        navigate("/");
    }

    return (
        <section className="add-new-page">
            <NoteInput
                state={{ title, body }}
                onChangeTitle={handleTitleChange}
                onInputBody={handleBodyChange}
            />

            <HomepageAction>
                <button className="action" type="button" title="Simpan" onClick={handleSubmit}>
                    <BiCheckCircle />
                </button>

            </HomepageAction>
        </section>
    );
}

export default AddNote;