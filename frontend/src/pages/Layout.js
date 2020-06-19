import React, {useState, useEffect} from 'react';
import {FullPage, Slide} from 'react-full-page';

import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import FourthSlide from './FourthSlide';
import FifthSlide from './FifthSlide';

export default function Layout() {
    // const { height, width } = useWindowDimensions();

    return (<FullPage initialSlide={0} duration={1000}>
        <Slide>
            <FirstSlide/>
        </Slide>
        <Slide>
            <SecondSlide/>
        </Slide>
        <Slide>
            <ThirdSlide/>
        </Slide>
        <Slide>
            <FourthSlide/>
        </Slide>
        <Slide>
            <FifthSlide/>
        </Slide>
    </FullPage>)
}
//
// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }
//
// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
//
//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }
//
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//
//   return windowDimensions;
// }
