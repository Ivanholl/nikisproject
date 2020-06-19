import React from 'react';
import { Nav } from 'react-bootstrap';

import logo from '../images/Logo-proakt.png';

export default function Navbar(props) {
    function handleClick(num) {
        props.setBoxToShow(num)
    }
    return (<header className="App-header">
        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        <Nav activeKey="/home" >
            <div className="main-menu">
                <Nav.Item>
                    <Nav.Link href="#about" onClick={() => handleClick(1)}>За Нас</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#services" onClick={() => handleClick(2)}>Услуги</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#jobs" onClick={() => handleClick(3)}>Кариери</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#contacts" onClick={() => handleClick(4)}>Контакти</Nav.Link>
                </Nav.Item>
            </div>
            <div className="outsorce">
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Комуникатор</Nav.Link>
                </Nav.Item>
            </div>
            <div className="lang">
                <p><a href="#">BG</a></p>
            </div>
            </Nav>
    </header>);
}
