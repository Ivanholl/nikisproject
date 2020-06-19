import React from 'react';
import { FullPage, Slide } from 'react-full-page';

import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import FourthSlide from './FourthSlide';
import FifthSlide from './FifthSlide';

export default function Layout () {
    // const { innerWidth: width, innerHeight: height } = window;
    // scrollMode={width > 640 ? 'full-page' : 'normal'}
    return (
        <FullPage
            initialSlide={0}
            duration={1000}
        >
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
    )
}
