import { BeatLoader } from 'react-spinners';
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArchive, BsArrowLeft } from "react-icons/bs";
import { BiArchiveIn, BiTrash } from 'react-icons/bi';

import HomepageAction from "../components/actions/homePage";
import LangContext from '../contexts/LangContext';

import { showFormattedDate } from "../utils";
import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/network-data";

import id from '../i18n/id.json';
import gb from '../i18n/gb.json';

const t = { id, gb };

function DetailNote() {
    const { lang } = useContext(LangContext);
    const [note, setNote] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            if (!id.includes('notes-')) return navigate('/404');

            const note = await getNote(id);
            if (note.error) return navigate('/404');
            setNote(note.data);
            setIsLoading(false);
        }

        fetchData();
    }, [id, navigate]);

    if (isLoading) {
        return <BeatLoader />;
    }

    async function handleNoteStatus() {
        if (note.archived) {
            await unarchiveNote(note.id);
        } else {
            await archiveNote(note.id);
        }
        navigate("/");
    }

    async function handleDeleteNote() {
        await deleteNote(note.id);
        navigate("/");
    }

    return (
        <section className="detail-page">
            <Link to='/' className="back-home">
                <span className="back-home__icon">
                    <BsArrowLeft />
                    {t[lang].note.back}
                </span>
            </Link>
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt, t[lang].locale)}</p>

            <div className="detail-page__body">
                {note.body}
            </div>

            <HomepageAction>
                {
                    note.archived ? (
                        <button className="action" onClick={handleNoteStatus}>
                            <BsArchive />
                        </button>
                    ) : (
                        <button className="action" onClick={handleNoteStatus}>
                            <BiArchiveIn />
                        </button>
                    )
                }

                <button className="action" onClick={handleDeleteNote}>
                    <BiTrash />
                </button>
            </HomepageAction>
        </section>
    )
}

export default DetailNote;