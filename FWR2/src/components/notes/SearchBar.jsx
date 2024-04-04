import { useState } from "react";
import PropTypes from "prop-types";

function SearchNote({ onSearch }) {
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
                placeholder="Cari catatan..."
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