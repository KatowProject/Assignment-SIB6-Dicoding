import React from "react";
import { InputGroup, Button, FormControl, Col } from "react-bootstrap";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { query: '' };

        this.onChangeQuery = this.onChangeQuery.bind(this);
    }

    onChangeQuery(event) {
        this.setState({ query: event.target.value }, () => {
            return this.props.searchNote(this.state);
        });
    }

    render() {
        return (
            <Col xs={8}>
                <div className="fixed-search">
                    <InputGroup className="mb-3 shadow-lg">
                        <Button variant="primary" id="search" disabled>
                            <i className="bi bi-search"></i>
                        </Button>
                        <FormControl
                            type="text"
                            id="searchBook"
                            placeholder="Search Note"
                            value={this.state.query}
                            onChange={this.onChangeQuery}
                        />
                    </InputGroup>
                </div>
            </Col>
        );
    }
}

export default NoteSearch;