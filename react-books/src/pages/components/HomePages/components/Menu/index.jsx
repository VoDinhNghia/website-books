import React from 'react';
import { Menu, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, CheckCircleOutlined } from '@ant-design/icons';

const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        // disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];

const MenuHomePage = () => {
    const [current, setCurrent] = React.useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <div>
        <Row>
            <Col span={18} push={6}>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Col>
            <Col span={6} pull={18}>
                <span><CheckCircleOutlined /> : logo</span>
            </Col>
        </Row>
    </div>
};

export default MenuHomePage;