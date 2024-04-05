import { getNote } from "../utils/network-data";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { BsArrowLeft } from "react-icons/bs";
import HomepageAction from "../components/actions/homePage";


function DetailNote() {
    const [note, setNote] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            if (!id.includes('notes-')) return navigate('/404');

            const note = await getNote(id);

            if (note.error) return alert('Error loading data');
            setNote(note.data);
        }

        fetchData();
    }, [id, navigate]);

    return (
        <section className="detail-page">
            <Link to='/' className="back-home">
                <span className="back-home__icon">
                    <BsArrowLeft />
                    Back to Home
                </span>
            </Link>
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>

            <div className="detail-page__body">
                {note.body}
            </div>

            <HomepageAction/>
        </section>
    )
}



export default DetailNote;