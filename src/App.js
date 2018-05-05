import React from 'react';
import { Fetch } from 'react-request';
import Books from "./Components/Books";
import { Input } from 'reactstrap';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: 'Rails'
        };
    }

    handleChange(text) {
        console.log(text);
        this.setState({ searchText: text.target.value });
    }

    render() {
        return (
            <Fetch url={"https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchText}>
                {({ fetching, failed, data }) => (
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <Input onChange={this.handleChange.bind(this)} value={this.state.searchText}/>
                        </div>
                        <Books books={data}/>
                    </div>
                )}
            </Fetch>
        );
    }
}

export default App;