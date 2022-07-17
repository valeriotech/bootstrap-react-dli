import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBar from "./components/NavBar";
import Defs from "./components/Defs";
import TabbedPaper from './components/TabbedPaper'
import PlantSelector from "./components/PlantSelector";


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
            <Row>
                <TabbedPaper/>
            </Row>
        </Container>
    );
}

export default App;
