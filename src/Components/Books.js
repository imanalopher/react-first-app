import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';

class Books extends React.Component
{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: "",
            bookItems: []
        };
    }

    toggle(id) {
        this.setState({ collapse: this.state.collapse === id ? "" : id });
    }

    render() {
        let bookItems;
        if(this.props.books) {

            bookItems = this.props.books.items.map( (book) => {
                let id = book.id;
                const { title, categories, authors, publisher, description, publishedDate, averageRating } = book.volumeInfo;

                return (
                    <div className="col-8 mx-auto" key={id}>
                        <div onClick={() => this.toggle(id)} className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                    Title: {title}, Author: {authors}
                                </button>
                            </h5>
                        </div>
                        <Collapse isOpen={this.state.collapse === id}>
                            <Card>
                                <CardBody>
                                    Author: {authors}
                                    Description: {description}
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                );
            });
        }

        return (
            <div className="row">
                {bookItems}
            </div>
        )
    }
}

export default Books;