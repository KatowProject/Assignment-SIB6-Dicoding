import { useState, useContext } from "react";
import PropTypes from "prop-types";

import id from "../../i18n/id.json";
import gb from "../../i18n/gb.json";

const t = { id, gb };

import LangContext from "../../contexts/LangContext";
function SearchNote({ onSearch }) {
    const { lang } = useContext(LangContext);
    const [keyword, setKeyword] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setKeyword(value);
        onSearch(value);
    };

    return (
        <section className="search-bar">
            <input
                type="text"
                placeholder={t[lang].search_bar.placeholder}
                value={keyword}
                onChange={handleChange}
            />
        </section>
    );
}

SearchNote.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchNote;