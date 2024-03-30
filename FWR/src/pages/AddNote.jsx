import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import propTypes from "prop-types";
import { BiCheckCircle } from "react-icons/bi";
import NoteInput from "../components/NoteInput";

function AddNoteWrapper() {
    const navigate = useNavigate();

    return (
        <AddNote navigate={navigate} />
    );
}
class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleBodyChange(event) {
        this.setState({ body: event.target.innerHTML });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { title, body } = this.state;

        addNote({ title, body });

        this.props.navigate("/");
    }

    render() {
        return (
            <section className="add-new-page">
                <NoteInput
                    state={this.state}
                    onChangeTitle={this.handleTitleChange}
                    onInputBody={this.handleBodyChange}
                />
                <div className="add-new-page__action">
                    <button className="action" type="button" title="Simpan" onClick={this.handleSubmit}>
                        <BiCheckCircle />
                    </button>
                </div>
            </section>
        );
    }
}

AddNote.propTypes = {
    navigate: propTypes.func.isRequired,
};


export default AddNoteWrapper;
