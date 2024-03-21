import React from "react";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { Container, Row } from "react-bootstrap";
import FormContent from "./form";
import Notes from "./notes";
import { getInitialData } from "../utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        const notes = getInitialData();

        this.state = {
            notes: notes,
            search: ''
        };

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.archiveNote = this.archiveNote.bind(this);
    }

    // create onSubmit Function
    addNote({ title, body }) {
        const newNote = {
            id: this.state.notes.length + 1,
            title: title,
            body: body,
            createdAt: new Date(),
            archived: false
        };

        this.setState({
            notes: [...this.state.notes, newNote]
        });

        alert('Catatan berhasil ditambahkan!');
    }

    removeNote(id) {
        const newNotes = this.state.notes.filter((note) => note.id !== id);

        this.setState({
            notes: newNotes
        });

        alert('Catatan berhasil dihapus!');
    }

    archiveNote(id) {
        this.setState({
            notes: this.state.notes.map(note => note.id === id ? { ...note, archived: true } : note)
        });

        alert('Catatan berhasil diarsipkan!');
    }

    render() {
        return (
            <>
                <Navbar />
                <Container fluid className="pb-5">
                    <Row className="justify-content-center">
                        <FormContent addNote={this.addNote} />
                        <Notes data={this.state.notes} removeNote={this.removeNote} archiveNote={this.archiveNote} />
                    </Row>
                </Container>
                <Footer />
            </>
        );
    }
}

export default App;