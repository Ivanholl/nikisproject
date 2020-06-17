import React from 'react';
import { Nav } from 'react-bootstrap';

import logo from '../images/Logo-proakt.png';

export default function Navbar(props) {
    return (<header className="App-header">
        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        <Nav activeKey="/home" >
            <div className="main-menu">
                <Nav.Item>
                    <Nav.Link href="#about">За Нас</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#services" eventKey="link-1">Услуги</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#jobs" eventKey="link-2">Кариери</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#contacts" eventKey="link-3">Контакти</Nav.Link>
                </Nav.Item>
            </div>
            <div className="outsorce">
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Комуникатор</Nav.Link>
                </Nav.Item>
            </div>
            <div className="social">

            </div>
            </Nav>
    </header>);
}
