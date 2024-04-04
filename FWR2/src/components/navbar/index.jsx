import { BsTranslate, BsMoonStars, BsSunrise, BsDoorOpen, BsDoorClosed, BsArchive } from "react-icons/bs";
import { useContext, useState } from "react";
import LangContext from "../../contexts/LangContext";
import ThemeContext from "../../contexts/ThemeContext";
import AuthContext from "../../contexts/AuthContext";
import id from '../../i18n/id.json';
import gb from '../../i18n/gb.json';
import { Link } from "react-router-dom";

const t = {
    id,
    gb
}

function Navbar() {
    const { lang, setLang } = useContext(LangContext);
    const { theme, changeTheme } = useContext(ThemeContext);
    const { auth } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    function toggleTheme() {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
    }

    function toggleLocale() {
        setLang(lang === 'id' ? 'gb' : 'id');
        localStorage.setItem('locale', lang === 'id' ? 'gb' : 'id');
    }

    function logout() {
        localStorage.removeItem('accessToken');
        window.location.reload();
    }

    return (
        <header>
            <h1>{t[lang].header.title}</h1>

            <Link to='/notes/archive' className="button-archive">
                <BsArchive />
                Archived
            </Link>

            <button className="toggle-locale" onClick={toggleLocale}>
                <BsTranslate />
            </button>

            <button className="toggle-theme" onClick={toggleTheme}>
                {theme === 'dark' ? <BsSunrise /> : <BsMoonStars />}
            </button>

            {
                auth
                &&
                <button className="button-logout" onClick={logout}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {isHovered ? <BsDoorClosed className="logout-icon" /> : <BsDoorOpen className="logout-icon" />}
                    {auth.name}
                </button>
            }
        </header>
    );
}

export default Navbar;