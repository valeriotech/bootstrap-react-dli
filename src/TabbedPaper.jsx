import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DliCalculator from "./DliCalculator";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";


export default function FillExample() {
    return (
        <Col xs={12}>
            <Tabs
                defaultActiveKey="home"
                id="tabbed-paper"
                className="mb-3"
                variant={'pills'}
                fill
                style={{color: '#F2DF3A'}}
            >
                <Tab eventKey="home" title="DLI Checker" tabClassName={'tab-links'}>
                    <Row><DliCalculator /></Row>
                </Tab>
                <Tab eventKey="profile" title="Par Calculator" tabClassName={'tab-links'}>
                </Tab>
                <Tab eventKey="longer-tab" title="Lux Converter" tabClassName={'tab-links'}>
                </Tab>
                <Tab eventKey="contact" title="Angel's House" tabClassName={'tab-links'}>
                </Tab>
            </Tabs>
        </Col>
    );
}
