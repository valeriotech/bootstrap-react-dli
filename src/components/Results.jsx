import React from 'react'
import {Col} from "react-bootstrap";
import HowManyWeeks from "../HowManyWeeks";
import {PlantDatabase} from "../PlantDatabase";

export default function Results(props) {
    const type = document.querySelector('#demo-simple-select').textContent
    const weeks = HowManyWeeks(props.date)
    const days = Math.floor(weeks*7)
    let dli;

    if (type === 'Cannabis.PhotoPeriod') {
        dli = PlantDatabase.Cannabis.dli['photoPeriod'][Math.ceil(weeks)]
    } else {
        dli = PlantDatabase.Cannabis.dli['autoFlower'][Math.ceil(weeks)]
    }

    const stage = PlantDatabase.getStage(weeks)

    return (<>
            <Col className={'mt-5'} xs={12}>
                <h1>Plant Age:{' '}{days} {days > 1 ? 'days' : 'day'}</h1>
                <p>Congratulations, your plant is now {days} {days > 1 ? 'days' : 'day'} old.</p>
                <br/>
                <h1>Suggested DLI: {dli}</h1>
                <p>Your DLI should be adjusted to {dli} by the end of the week</p>
            </Col>
            <Col className={'mt-5'} xs={12} md={6}>
                <img className={'img-fluid mb-3 rounded-3 shadow-lg'} src={stage.img} alt={stage.title} style={{maxWidth: '75%'}}/>
                <h1>{stage.title}</h1>
                <p>{stage.content}</p>
            </Col>
        </>
    )
}