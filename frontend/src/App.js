import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/animations.css'

import Navbar from './components/Navbar';
import Layout from './pages/Layout';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
    return (<div className="App">
        <Navbar />
        <Layout />
        <BackToTopBtn />
    </div>);
}

export default App;
