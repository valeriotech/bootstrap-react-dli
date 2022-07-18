import {useReducer} from 'react'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {Col} from "react-bootstrap";
import Results from './Results'

function reducer(state, action) {
    switch (action.type) {
        case 'DATE':
            return {date: new Date(action.payload), toggle: true};
        default:
            return state;
    }
}

export default function DliCalculator() {

    const initialState = {date: new Date(), toggle: false}

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <Col xs={12} md={6} className={'mt-5'}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        label="Choose A Sprout Date"
                        inputFormat="MM/dd/yyyy"
                        value={state.date}
                        onChange={event => {
                            dispatch({
                                type: 'DATE',
                                payload: event})
                        }}
                        renderInput={(params) => <TextField  {...params}/>}
                    />
                </LocalizationProvider>
            </Col>
            {state.toggle && <Results date={state.date}/>}
        </>

    )
}