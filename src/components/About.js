import React from 'react';
import { Col,Typography} from 'antd';
import {GithubOutlined } from '@ant-design/icons'
const { Title,Text } = Typography;
const About = () => {
    return (
        <div>
            <Title level={4}>
                <Col>
                <Text>
                    Hi , My Name Is Mohammed Isber , 
                    I'm The Coder OF This Project <br/>
                    <a>And There Is Some More Informations About Me And The Project</a>
                </Text>
                </Col>
            </Title>
            <Title level={5}>
                <Col>
                <Text>
                    This Project Is from <a>javascript mastery</a> On Youtube <br/>
                    The Project Took From Me About 5d in a Row , <br/>
                </Text>
                <div className="alert">This Is Not A Copied Project , 
                    You can See This In The Code 
                </div>
                <br/>
                <p>I've Learnt Alot of This tutorial it So Useful and Helped Me To udnerstand Alot Of React princples </p>
                <p>Basicly I'm A Fron-end Developer With A Good Knowledg Of HTML/CSS/JS , </p>
                <p>And This Is my First Project With React.Js</p>
                <br/>
                <p>This Project Is using <a>Rapid Api</a> as A basic Api Services</p>
                <p>I used Coinranking Api For The Cryptos Currencies And Thier Details </p>
                <p>and Bing News for the News Api  </p>
                <p>And I've Used AntD For The Styled Components Its Very Useful </p>
                <p>So If You Like This Project You Can Visit My GitHub Account And See My Other Projects </p>
                <p><a href="https://github.com/mohaisper" target="_blank"><GithubOutlined /> mohaisper</a> GitHub Account</p>
                </Col>
            </Title>
        </div>
    )
}

export default About
