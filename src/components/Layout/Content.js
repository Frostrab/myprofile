import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from 'antd'
import Intro from '../../pages/Intro'
import Hobby from '../../pages/Hobby';
import '../../App.css';
const Content = () => {
    const { Content } = Layout;

    return (
        <div>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, paddingTop: '30px' }}>

                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="about" element={<Hobby />} />
                    </Routes>
                </div>
            </Content>
        </div>
    )
}

export default Content