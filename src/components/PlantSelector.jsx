import React, {useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Col} from "react-bootstrap";
import {DLI} from "./DLI";

export default function PlantSelector() {

    const [type, setType] = useState('')

    function handleChange(event) {
        const {value} = event.target
        setType(value)
    }

    return (
        <Col>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Plant Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Plant Type"
                    onChange={handleChange}
                    sx={{width: '225px'}}
                    color={'primary'}
                    variant={'standard'}
                >
                    // TODO: MAKE MAP FUNCTION
                    <MenuItem value={0}>Cannabis.PhotoPeriod</MenuItem>
                    <MenuItem value={1}>Cannabis.AutoFlower</MenuItem>
                    <MenuItem value={2}>Peppers.Cayenne</MenuItem>
                    <MenuItem value={3}>Peppers.Habanero</MenuItem>
                </Select>
            </FormControl>
        </Col>

    )
}