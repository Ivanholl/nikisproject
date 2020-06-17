import React from 'react';
import BackToTop from "react-back-to-top-button";
import BackToTopBtn from './images/back-to-top-btn.png'
import { FullPage, Slide } from 'react-full-page';

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
        <FullPage>
            <Slide>
                <FirstSlide />
            </Slide>
            <Slide>
                <SecondSlide />
            </Slide>
            <Slide>
                <ThirdSlide />
            </Slide>
            <Slide>
                <FourthSlide />
            </Slide>
            <Slide>
                <FifthSlide />
             </Slide>
        </FullPage>
        <BackToTop
            showOnScrollUp
            showAt={100}
            speed={1500}
            easing="easeInOutQuint"
        >
            <img src={BackToTopBtn} />
        </BackToTop>
    </div>);
}

export default App;
