import React from 'react'
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo.svg'
import "bootstrap-icons/font/bootstrap-icons.css";


export default function NavBar() {
    return (
        <Navbar
            style={{backgroundColor: 'transparent', marginBottom: '3rem'}}
            sticky={'top'}
            expand={'md'}
        >
            <Container fluid={true}>
                <Navbar.Brand href={'#'} style={{color: '#0573c4'}}>
                    <div className={'d-flex align-items-center'}>
                        <img src={logo} alt={'Logo'} width={'35'} height={'auto'}/>What DLI?
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={'main-navbar'} style={{color: '#0573c4'}}></Navbar.Toggle>
                <Navbar.Collapse id={"main-navbar"}>
                    <Nav className={'ms-auto text-end me-1'}>
                        <Nav.Link href={'#home'}><i className="bi bi-house-fill">{' '}home</i></Nav.Link>
                        <Nav.Link href={'coffee'}><i className="bi bi-cup-hot-fill">{' '}coffee</i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}