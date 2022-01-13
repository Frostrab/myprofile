import React from 'react';
import { Row, Col, Divider, Card } from 'antd'
import '../App.css'
import myPic from '../img/mypic.jpg'
import Timeline from '../components/Timeline/Timeline';


const Intro = () => {
    return (
        <div>
            <Row>
                <Col span={16} >
                    <Divider>Introduce My Self</Divider>
                    <Card >
                        <p>Name : Chotchai Ployarunrung</p>
                        <p>Nickname : Fourth</p>
                        <p>Age : 28 year old</p>
                        <p>Nationality : Thai</p>
                        <p>Religion : Buddhism</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <img src={myPic} alt='My_Picture' className='img' />
                </Col>
            </Row>
            <Row>
                <Col span={16} >
                    <Divider>Contact</Divider>
                    <Card >
                        <p>Email : ict_19fourth@hotmail.com</p>
                        <p>Phone : 095xxxxxxx</p>
                    </Card>
                </Col>
                <Col span={8}>
                </Col>
            </Row>
            <Row>
                <Col span={16} >
                    <Divider>My Experience</Divider>
                    <Timeline />

                </Col>
                <Col span={8}>
                </Col>
            </Row>
        </div>
    )
}

export default Intro