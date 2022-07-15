import React from 'react'
import {Col} from "react-bootstrap";
import HowManyWeeks from "../HowManyWeeks";
import {DLI} from "./DLI";

export default function Results(props) {


    const weeks = HowManyWeeks(props.date)
    const days = Math.floor(weeks*7)
    const dli = DLI.weed.photoPeriod[Math.ceil(weeks)]
    const stage = DLI.getStage(weeks)

    return (<>
            <Col className={'mt-5'} xs={12}>
                <h1>Plant Age:{' '}{days} {days > 1 ? 'days' : 'day'}</h1>
                <p>Congratulations, your plant is now {days} {days > 1 ? 'days' : 'day'} old.</p>
                <br/>
                <h1>Suggested DLI: {dli}</h1>
                <p>Your DLI should be adjusted to {dli} by the end of the week</p>
            </Col>
            <Col className={'mt-5'} xs={12} md={6}>
                <img className={'mb-3'} src={stage.img} alt={stage.title} width={'100'}/>
                <h1>{stage.title}</h1>
                <p>{stage.content}</p>
            </Col>
        </>
    )
}