import React from 'react'
import {Col} from "react-bootstrap";

export default function Defs() {

    return (
        <>
            <Col xs={12} md={8}>
                <i className="bi bi-brightness-high-fill" style={{fontSize: '10rem'}}></i>
                <p id={'description-content'}>
                    Daily light integral (DLI) describes the number of photosynthetically active photons (individual
                    particles of light in the 400-700 nm range) that are delivered to a specific area over a 24-hour
                    period. This variable is particularly useful to describe the light environment of plants.
                </p>
            </Col>
        </>
    )
}