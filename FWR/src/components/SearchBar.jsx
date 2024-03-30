import React from "react";
import PropTypes from "prop-types";

class SearchNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ keyword: event.target.value }, () => {
            this.props.onSearch(this.state.keyword);
        });
    }

    render() {
        return (
            <section className="search-bar">
                <input
                    type="text"
                    placeholder="Cari catatan..."
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
            </section>
        );
    }
}

SearchNote.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchNote;