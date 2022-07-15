import React, {useState} from 'react'
import {Col} from "react-bootstrap";
import {TextField} from "@mui/material";
import ParResults from "./ParResults";

export default function ParCalculator() {

    const [hours, setHours] = useState('')
    const [par, setPar] = useState('')

    function handleHours(event) {
        const value = event.target.value
        setHours(value)
    }

    function handlePar(event) {
        const value = event.target.value
        setPar(value)
    }

    return (<>
        <Col className={'mt-5'} xs={12} md={6}>
            <TextField id="light-hours-input" label="Light Hours" variant="standard" value={hours} onChange={handleHours}/>
        </Col>
        <Col className={'mt-5'} xs={12} md={6}>
            <TextField id="par-input" label="Measured PAR" variant="standard" value={par} onChange={handlePar}/>
        </Col>
        {hours !== '' && par !== '' ? <ParResults par={par} hours={hours} /> : null}
    </>)
}