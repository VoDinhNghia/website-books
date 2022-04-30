import React from 'react';
import service from '../../../model/service'
import MenuHomePage from './components/Menu';
import MenuLeft from './components/MenuLeft';
import Content from './components/Content';
import { Row, Col } from 'antd';


class HomePages extends React.Component {
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
        return <div style={{ margin: '10px' }}>
            <MenuHomePage /> <br /><br />
            <Row>
                <Col span={18} push={6}>
                    <Content />
                </Col>
                <Col span={6} pull={18}>
                    <MenuLeft />
                </Col>
            </Row>
        </div>;
    }
}

export default HomePages;