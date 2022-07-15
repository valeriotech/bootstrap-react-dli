import React, {useState} from 'react'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {Col} from "react-bootstrap";
import Results from './Results'

export default function DliCalculator() {

    const [value, setValue] = useState(new Date());
    const [toggle, setToggle] = useState(false)

    const handleChange = (event) => {
        const date = new Date(event)
        setValue(() => {
            return date
        })
        setToggle(true)
    };

    return (
        <>
            <Col xs={12} className={'mb-5'}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        label="Choose A Sprout Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{textAlign: 'center'}}
                    />
                </LocalizationProvider>
            </Col>
            {toggle && <Results date={value}/>}
        </>

    )
}