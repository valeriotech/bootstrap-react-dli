import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBar from "./components/NavBar";
import Defs from "./components/Defs";
import TabbedPaper from './components/TabbedPaper'
import PlantSelector from "./components/PlantSelector";
import {Col} from "react-bootstrap";
import {useState} from "react";

function App() {

    const [tab, setTab] = useState('home')

    function getTabKey(key) {
        setTab(key)
    }

    return (
        <Container className={'App'} fluid={true}>
            <Row className={'sticky-top'}>
                <NavBar/>
            </Row>
            <Row className={'justify-content-center'}>
                <Defs tabKey={tab}/>
            </Row>
            <Row className={'mb-5 mt-5'}>
                <PlantSelector />
            </Row>
            <Row className={'justify-content-center'}>
                <TabbedPaper  getKey={getTabKey}/>
            </Row>
            <Row>
                <Col>
                    <p style={{marginTop: '200px', color: '#0078AA'}}>
                        Copyright ValerioTech {new Date().getFullYear()}.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
export default App;
