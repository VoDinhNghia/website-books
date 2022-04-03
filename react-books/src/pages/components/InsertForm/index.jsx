import React from 'react';
import service from '../../../model/service'

class InsertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = async (se) => {
        se.preventDefault();
        const title = encodeURIComponent(this.state.title);
        const author = encodeURIComponent(this.state.author);
        this.setState({
            title: '',
            author: ''
        });
        await service.insertDataBooks(title, author).then(() => {
            this.props.onSave();
        })
    }

    render() {
        const { title = '', author = '' } = this.state
        return <form onSubmit={this.onSubmit}>
            <div>
                <label>Title</label>
                <input type="title" value={title}
                    onChange={se => { this.setState({ title: se.target.value }) }} />
            </div>

            <div>
                <label>Author</label>
                <input type="author" value={author}
                    onChange={se => { this.setState({ author: se.target.value }) }} />
            </div>

            <button onClick={this.onSubmit}>Salva</button>
        </form>;
    }

}

export default InsertForm;