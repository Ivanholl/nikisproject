import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Nav } from 'react-bootstrap';

function App() {
    return (<div className="App">
        <header className="App-header">
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
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
    </Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    </div>);
}

export default App;
