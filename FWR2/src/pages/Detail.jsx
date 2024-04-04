import { getNote } from "../utils/network-data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
// import DetailPageAction from "../components/DetailPageAction";

function DetailNote() {
    const [note, setNote] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const note = await getNote(id);
            if (note.error) return alert('Error loading data');
            setNote(note.data);
        }

        fetchData();
    }, [id]);

    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>

            <div className="detail-page__body">
                {note.body}
            </div>

            {/* <DetailPageAction note={note} /> */}
        </section>
    )
}



export default DetailNote;