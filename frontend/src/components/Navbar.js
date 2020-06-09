import React from 'react';
import { Nav } from 'react-bootstrap';

import logo from '../images/Logo-proakt.png';

export default function Navbar(props) {
    return (<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav activeKey="/home" >
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
    </header>);
}
