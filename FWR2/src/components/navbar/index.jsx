import { BsDoorOpen, BsDoorClosed, BsArchive } from "react-icons/bs";
import { useContext, useState } from "react";
import LangContext from "../../contexts/LangContext";
import AuthContext from "../../contexts/AuthContext";
import id from '../../i18n/id.json';
import gb from '../../i18n/gb.json';
import { Link } from "react-router-dom";

const t = {
    id,
    gb
}

function Navbar() {
    const { lang } = useContext(LangContext);
    const { auth } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    function logout() {
        localStorage.removeItem('accessToken');
        window.location.reload();
    }

    return (
        <header>
            <Link to='/notes' className="logo">
                <h1>{t[lang].header.title}</h1>
            </Link>

            {auth &&
                <>
                    <Link to='/notes/archive' className="button-archive">
                        <BsArchive />
                        Archived
                    </Link>

                    <button className="button-logout" onClick={logout}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        {isHovered ? <BsDoorClosed className="logout-icon" /> : <BsDoorOpen className="logout-icon" />}
                        {auth.name}
                    </button>

                </>
            }
        </header>
    );
}

export default Navbar;