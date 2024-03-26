import React from "react";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { Container, Row } from "react-bootstrap";
import FormContent from "./form";
import Notes from "./notes";
import { getInitialData } from "../utils";
import NoteSearch from "./notes/search";

class App extends React.Component {
    constructor(props) {
        super(props);

        const notes = getInitialData();

        this.state = {
            notes: notes,
            search: '',
            query: ''
        };

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.archiveNote = this.archiveNote.bind(this);
        this.unarchiveNote = this.unarchiveNote.bind(this);
        this.searchNote = this.searchNote.bind(this);
    }

    // create onSubmit Function
    addNote({ title, body }) {
        if (!title || !body) return alert('Judul dan isi catatan tidak boleh kosong!');
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

    unarchiveNote(id) {
        this.setState({
            notes: this.state.notes.map(note => note.id === id ? { ...note, archived: false } : note)
        });

        alert('Catatan berhasil dikembalikan!');
    }

    searchNote({ query }) {
        this.setState({
            query
        });
    }

    render() {
        return (
            <>
                <Navbar />
                <Container fluid className="pb-5">
                    <Row className="justify-content-center g-3">
                        <FormContent onSubmit={this.addNote} />
                        <NoteSearch searchNote={this.searchNote} />
                        <Notes data={this.state.notes} querySearch={this.state.query} onDelete={this.removeNote} onArchive={this.archiveNote} onUnarchive={this.unarchiveNote} onSearch={this.searchNote} />
                    </Row>
                </Container>
                <Footer />
            </>
        );
    }
}

export default App;