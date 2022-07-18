import {useEffect, useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DliCalculator from "./DliCalculator";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ParCalculator from "./ParCalculator";

const FillExample = (props) => {

    const [value, setValue] = useState('home')

    function handleSelect(event) {
        const tab = event
        setValue(tab)

    }

    useEffect(() => {
        props.getKey(() => {
            return value
        })
    })

    return (
        <Col xs={12} md={8}>
            <Tabs
                defaultActiveKey="home"
                activeKey={value}
                id="tabbed-paper"
                className="mb-3"
                variant={'pills'}
                fill
                style={{color: '#F2DF3A'}}
                onSelect={handleSelect}
            >
                <Tab eventKey="home" title="DLI Checker" tabClassName={'tab-links'}>
                    <Row className={'justify-content-center'}><DliCalculator /></Row>
                </Tab>
                <Tab eventKey="profile" title="Par to DLI" tabClassName={'tab-links'}>
                    <Row className={'justify-content-center'}><ParCalculator /></Row>
                </Tab>
                <Tab eventKey="longer-tab" title="Lux Converter" tabClassName={'tab-links'}>
                </Tab>
                <Tab eventKey="contact" title="Angel's House" tabClassName={'tab-links'}>
                </Tab>
            </Tabs>
        </Col>
    )};

export default FillExample