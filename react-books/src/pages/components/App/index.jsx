import React from 'react';
import 'antd/dist/antd.css';
import HomePages from '../HomePages'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div style={{ margin: '20px' }}>
            <HomePages />
        </div>;
    }
}

export default App;