import { Component } from 'react';
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";
import SearchNote from '../components/SearchBar';
import HomepageAction from '../components/HomePageAction';
import propTypes from 'prop-types';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getActiveNotes(),
            keyword: "",
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(keyword) {
        this.setState({ keyword: keyword });
    }

    render() {
        const filteredNotes = this.state.keyword
            ? this.state.data.filter(note =>
                note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
            )
            : this.state.data;

        return (
            <>
                <section className="homepage">
                    <h2>Catatan Aktif</h2>
                    <SearchNote onSearch={this.handleSearch} />
                    <NoteList notes={filteredNotes} />
                </section>

                <HomepageAction />
            </>
        );
    }
}

HomePage.propTypes = {
    data: propTypes.array,
    keyword: propTypes.string,
};

export default HomePage;