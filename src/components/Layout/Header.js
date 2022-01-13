import React from 'react';
import { Layout, Menu } from 'antd'
import '../../App.css';
const Header = () => {
    const { Header } = Layout;
    return (
        <div>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" >
                    <h1 style={{ color:'#fff'}}>My Port</h1>
                </div>
                {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Profile</Menu.Item>
                    <Menu.Item key="3">Expierence</Menu.Item>
                </Menu> */}
            </Header>
        </div>
    )
}

export default Header