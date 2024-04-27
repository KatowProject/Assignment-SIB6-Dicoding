import { useContext } from 'react';
import propTypes from 'prop-types';

import LangContext from '../../contexts/LangContext';
import ThemeContext from '../../contexts/ThemeContext';

import { BsMoonStars, BsSun, BsTranslate } from 'react-icons/bs';


function HomepageAction({ children }) {
    const { lang, setLang } = useContext(LangContext);
    const { theme, changeTheme } = useContext(ThemeContext);

    function toggleLocale() {
        setLang(lang === 'id' ? 'gb' : 'id');
        localStorage.setItem('locale', lang === 'id' ? 'gb' : 'id');
    }

    function toggleTheme() {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <div className="homepage__action">
                <button className="action" onClick={toggleLocale}>
                    {/* lang switch */}
                    <BsTranslate />
                </button>

                <button className='action' onClick={toggleTheme}>
                    {
                        theme === 'dark' ? <BsSun /> : <BsMoonStars />
                    }
                </button>

                {children}
            </div>
        </>
    );
}

HomepageAction.propTypes = {
    children: propTypes.node
}

export default HomepageAction;