import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBar from "./NavBar";
import Defs from "./Defs";
import './App.css';
import TabbedPaper from './TabbedPaper'
import PlantSelector from "./PlantSelector";


function App() {
    return (
        <Container className={'App'} fluid={true}>
            <Row className={'sticky-top'}>
                <NavBar/>
            </Row>
            <Row className={'justify-content-center'}>
                <Defs />
            </Row>
            <Row className={'mb-5 mt-5'}>
                <PlantSelector />
            </Row>
            <Row className={'justify-content-center'}>
                <TabbedPaper/>
            </Row>
        </Container>
    );
}

export default App;
