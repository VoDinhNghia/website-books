import service from '../../../model/service'
import React from 'react';
import InsertForm from '../InsertForm'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.reloadData = this.reloadData.bind(this);
    }
    reloadData() {
        const data = service.fetchDataBooks()
        this.setState({ data: msg.body });
    }

    componentDidMount() {
        this.reloadData();
    }

    render() {
        return <div style={{ margin: '20px' }}>

            <div >

                <h2>Books list</h2>

                <ul> {/* Itero tutti i libri ricevuti dal server e genero dei <li /> */}
                    {this.state.data.map(book => {
                        return <li>{book.title} ({book.author})</li>
                    })}
                </ul>
            </div>

            <h2>Save book</h2>

            {/* Insert the component defined above and, in case of saving update the book list  */}
            <InsertForm onSave={this.reloadData} />

        </div>;
    }
}

export default App;