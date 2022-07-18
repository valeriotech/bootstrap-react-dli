import  {useEffect, useState } from 'react'
import {Col} from "react-bootstrap";
import getText from "../getDefs";

export default function Defs(props) {

    const [image, setImage] = useState('')

    const text = getText(props.tabKey)

    const getPictures = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=Dc5DTMDhf1OPCZKm0hx-dfSuUKRj4321hu5jUkAU3No&query=plants&orientation=landscape`)
        const data = await response.json()
        return data
    }

    useEffect(() => {
        getPictures().then(r=>{
            const item = r.results[Math.floor(Math.random()*r.results.length)];
            const singleImage = item.urls.small

            setImage(singleImage)
            return r
        })
    }, [])

    return (
        <>
            <Col xs={12} md={8}>
                <img className={'img-fluid mb-4 rounded-3 shadow-lg'} src={image} alt="Sun" style={{maxWidth: '75%'}}/>
                <p id={'description-content'}>
                    {text}
                </p>
            </Col>
        </>
    )
}