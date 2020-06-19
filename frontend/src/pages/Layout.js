import React, {useState, useEffect} from 'react';
import {FullPage, Slide} from 'react-full-page';

import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import FourthSlide from './FourthSlide';
import FifthSlide from './FifthSlide';

export default function Layout() {
    const [boxToShow, setBoxToShow] = useState(0);

    return (<FullPage
            initialSlide={0}
            duration={300}
            afterChange={args => setBoxToShow(args.to)}
            >
        <Slide>
            {boxToShow == 0 && <FirstSlide />}
        </Slide>
        <Slide>
            {boxToShow == 1 && <SecondSlide/>}
        </Slide>
        <Slide>
            {boxToShow == 2 && <ThirdSlide/>}
        </Slide>
        <Slide>
            {boxToShow == 3 && <FourthSlide/>}
        </Slide>
        <Slide>
            <FifthSlide animate={boxToShow == 4} />
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
