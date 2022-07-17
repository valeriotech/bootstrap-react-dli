import React, {useEffect, useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DliCalculator from "./DliCalculator";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ParCalculator from "./ParCalculator";


export default function FillExample() {

    const [value, setValue] = useState('home')

    function handleSelect(event) {

        setValue(event)
    }

    useEffect(() => {
        const dli = 'Daily light integral (DLI) describes the number of photosynthetically active photons (individual\n' +
            '                    particles of light in the 400-700 nm range) that are delivered to a specific area over a 24-hour\n' +
            '                    period. This variable is particularly useful to describe the light environment of plants.'

        const par = 'Photosynthetically active radiation (PAR) designates the spectral range (wave band) of solar radiation from 400 to 700 nanometers that photosynthetic organisms are able to use in the process of photosynthesis. This spectral region corresponds more or less with the range of light visible to the human eye. Photons at shorter wavelengths tend to be so energetic that they can be damaging to cells and tissues, but are mostly filtered out by the ozone layer in the stratosphere. Photons at longer wavelengths do not carry enough energy to allow photosynthesis to take place.'
        const lux = 'The lux (symbol: lx) is the SI derived unit of illuminance, measuring luminous flux per unit area.[1][2] It is equal to one lumen per square metre. In photometry, this is used as a measure of the intensity, as perceived by the human eye, of light that hits or passes through a surface. It is analogous to the radiometric unit watt per square metre, but with the power at each wavelength weighted according to the luminosity function, a standardized model of human visual brightness perception. In English, "lux" is used as both the singular and plural form.'
        const angels = 'Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. They serve their signature pan pizza and other dishes including pasta, breadsticks and desserts. '

        const selector = document.querySelector('#description-content')

        if (value === 'home') {
            selector.textContent = dli
        } else if (value === 'profile') {
            selector.textContent = par
        } else if (value === 'longer-tab') {
            selector.textContent = lux
        } else if (value === 'contact') {
            selector.textContent = angels
        }

    })

    return (
        <Col xs={12}>
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
    );
}
