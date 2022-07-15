import React, {useState} from 'react'
import {Col} from "react-bootstrap";

export default function ParResults(props) {

    function getDLI() {
        const dailyPPFD = (props.par * 3600) * props.hours
        return dailyPPFD / Math.pow(10, 6)
    }

    const value = getDLI()

    return (
        <><Col className={'mt-5'}>
                <h1>Calculated DLI</h1>
                <strong>{value}</strong>
            </Col>
        </>
    )
}