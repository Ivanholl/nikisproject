import React from 'react';
import logo from './images/Logo-proakt.png';
import './css/App.css';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSlide from './components/FirstSlide.js'


function App() {
    return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Link</Nav.Link>
                </Nav.Item>

                </Nav>
        </header>
        <FirstSlide></FirstSlide>
    </div>);
}

export default App;
