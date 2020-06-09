import React from 'react';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FirstSlide from './components/FirstSlide.js'
import Navbar from './components/Navbar.js';

function App() {
    return (<div className="App">
        <Navbar />
        <FirstSlide></FirstSlide>
    </div>);
}

export default App;
