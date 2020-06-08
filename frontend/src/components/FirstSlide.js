import React, { useState  } from 'react';
import LazyHero from 'react-lazy-hero';
import firstBackground from '../images/slide1-background.png';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

import InfoBox from './InfoBox.js';

export default function FirstSlide() {

    const [infos, setinfos] = useState([{
        image: 'Accounting _icon1.png',
        text: 'Счетоводно обслужване'
    },{
        image: 'Accounting _icon2.png',
        text: 'Изготвяне на заплати'
    },{
        image: 'Accounting _icon3.png',
        text: 'Управленска отчетност и бюджети'
    },{
        image: 'Accounting _icon4.png',
        text: 'Финансов и данъчен анализ'
    },{
        image: 'Accounting _icon5.png',
        text: 'Управление на активи'
    },{
        image: 'Accounting _icon6.png',
        text: 'Корпоративен растеж'
    }])

    return (
        <div className="firstSlide" >
            <LazyHero imageSrc={firstBackground}>
                <Container>
                    <Row>
                        <h1>Винаги давай на света и на хората около теб най-доброто, което можеш и имаш… въпреки всичко!</h1>
                    </Row>
                </Container>
                <div className="box-contents">
                {
                    infos.map((item, index) => {
                        return (<InfoBox key={index} image={item.image} text={item.text} />)
                    })
                }
                </div>
            </LazyHero>
        </div>
    );

}






/*



['', '', 'Accounting _icon3.png', 'Accounting _icon4.png', 'Accounting _icon5.png', 'Accounting _icon6.png']


['', '', '', '', '', '']
*/