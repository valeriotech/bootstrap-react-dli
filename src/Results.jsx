import React from 'react'
import {Col} from "react-bootstrap";
import HowManyWeeks from "./HowManyWeeks";
import {DLI} from "./DLI";

export default function Results(props) {


    const weeks = HowManyWeeks(props.date)
    const dli = DLI.weed.photoPeriod[weeks]
    const stage = DLI.getStage(weeks)

    return (<>
            <Col xs={12} className={'mb-4'}>
                <h1>Suggested DLI</h1>
                <p>Your DLI should be adjusted to {dli} by the end of the week</p>
            </Col>
            <Col xs={12} className={'mb-4'}>
                <img src={stage.img} alt={stage.title}/>
                <h1>{stage.title}</h1>
                <p>{stage.content}</p>
            </Col>
        </>
    )
}