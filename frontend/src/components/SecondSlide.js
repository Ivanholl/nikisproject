import React from 'react';
import LazyHero from 'react-lazy-hero';
import secondBackground from '../images/SecondSlideBackground.png';
import {Container} from 'react-bootstrap';


export default function SecondSlide() {
    return (
        <div className="secondSlide" >
                <Container>
                        <h1>ЗА <span>НАС</span></h1>
                </Container>
            </div>
    );

}
