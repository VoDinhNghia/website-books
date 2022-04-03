import React from 'react';
import InsertForm from '../InsertForm'
import service from '../../../model/service'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.reloadData = this.reloadData.bind(this);
    }
    reloadData = async () => {
        await service.fetchDataBooks().then(result => {
            this.setState({ data: result });
        })
    }

    componentDidMount() {
        this.reloadData();
    }

    render() {
        const { data = [] } = this.state
        console.log('data', data)
        return <div style={{ margin: '20px' }}>

            <div >

                <h2>Books list</h2>

                <ul> {/* Itero tutti i libri ricevuti dal server e genero dei <li /> */}
                    {data?.map((book) => {
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