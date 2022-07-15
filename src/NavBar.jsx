import React from 'react'
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from "react-bootstrap";
import YardIcon from '@mui/icons-material/Yard';

import "bootstrap-icons/font/bootstrap-icons.css";


export default function NavBar() {
    return (
        <Navbar
            style={{backgroundColor: '#0078AA'}}
            sticky={'top'}
            expand={'md'}
        >
            <Container fluid={true}>
                <Navbar.Brand href={'#'} style={{color: '#F2DF3A'}}>
                    <div className={'d-flex align-items-center'}>
                        <YardIcon/>{'  '}What DLI?
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={'main-navbar'} style={{color: '#F2DF3A'}}></Navbar.Toggle>
                <Navbar.Collapse id={"main-navbar"}>
                    <Nav className={'ms-auto'}>
                        <Nav.Link href={'#home'}><i className="bi bi-house-fill">{' '}home</i></Nav.Link>
                        <Nav.Link href={'coffee'}><i className="bi bi-cup-hot-fill">{' '}coffee</i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}