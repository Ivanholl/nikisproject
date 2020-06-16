import React from 'react';

import './css/App.css';
import './css/animations.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FirstSlide from './components/FirstSlide.js'
import SecondSlide from './components/SecondSlide.js'
import ThirdSlide from './components/ThirdSlide.js'
import FourthSlide from './components/FourthSlide.js'
import FifthSlide from './components/FifthSlide.js'
import Navbar from './components/Navbar.js';

function App() {
    return (<div className="App">
        <Navbar />
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
        <FourthSlide />
        <FifthSlide />
    </div>);
}

export default App;
