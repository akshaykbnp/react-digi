import React from "react"
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./home.scss";
import { Playground } from "../playground/playground";


export const Home: React.FC = () => {


    return (
        <div>
            <Container className="home-wrapper">
                <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        <Playground />
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        Tab content for Profile
                    </Tab>
                </Tabs>
            </Container>
        </div>)
}