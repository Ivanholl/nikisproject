import React from 'react';
import LazyHero from 'react-lazy-hero';
import kur from '../images/slide1-background.png';

export default function FirstSlide() {
    return (
        <div>
            <LazyHero imageSrc={kur}>
                <h1>Винаги давай на света и на хората около теб най-доброто, което можеш и имаш… въпреки всичко!</h1>
            </LazyHero>
        </div>
    );
}
