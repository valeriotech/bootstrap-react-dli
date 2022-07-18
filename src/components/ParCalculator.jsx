import React, {useReducer} from 'react'
import {Col} from "react-bootstrap";
import {TextField} from "@mui/material";
import ParResults from "./ParResults";

const reducer = (state, action) => {
    switch (action.type) {
        case 'hours':
            return {hours: action.payload, par: state.par}
        case 'par':
            return {hours: state.hours, par: action.payload}
        default:
            return state
    }
}

const initialState = {
    hours: '',
    par: '',
}

export default function ParCalculator() {


    const [state, dispatch] = useReducer(reducer, initialState)

    return (<>
        <Col className={'mt-2'} xs={12} md={6}>
            <TextField id="light-hours-input" label="Light Hours" variant="standard" value={state.hours} onChange={event => {
                dispatch({type: 'hours', payload: event.target.value})
            }}/>
        </Col>
        <Col className={'mt-2'} xs={12} md={6}>
            <TextField id="par-input" label="Measured PAR" variant="standard" value={state.par} onChange={event => {
                dispatch({type: 'par', payload: event.target.value})
            }}/>
        </Col>
        {state.hours !== '' && state.par !== '' ? <ParResults par={state.par} hours={state.hours} /> : null}
    </>)
}