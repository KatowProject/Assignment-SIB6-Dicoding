import { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiSolidBookAdd } from 'react-icons/bi';

import SearchNote from '../components/notes/SearchBar';
import NoteList from "../components/notes/List";
import HomepageAction from '../components/actions/homePage';

import LangContext from '../contexts/LangContext';
import { getActiveNotes } from "../utils/network-data";

import id from '../i18n/id.json';
import gb from '../i18n/gb.json';

const t = { id, gb };

function NotesPage() {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const { lang } = useContext(LangContext);

    function handleSearch(keyword) {
        setKeyword(keyword);
    }

    useEffect(() => {
        async function fetchData() {
            const notes = await getActiveNotes();

            if (notes.error) return alert('Error loading data');

            setData(notes.data);
        }

        fetchData();
    }, []);

    const filteredNotes = keyword
        ? data.filter(note =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
        )
        : data;


    return (
        <>
            <section className="homepage">
                <h2>{t[lang].notes.active_title}</h2>
                <SearchNote onSearch={handleSearch} />
                <NoteList notes={filteredNotes} />
            </section>

            <HomepageAction>
                <Link className="action" to='new'>
                    <BiSolidBookAdd />

                </Link>
            </HomepageAction>
        </>
    );
}

NotesPage.propTypes = {
    data: propTypes.array,
    keyword: propTypes.string,
};

export default NotesPage;