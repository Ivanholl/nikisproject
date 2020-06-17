import React, { useState  } from 'react';
import {Container} from 'react-bootstrap';

import InfoBox from './InfoBox.js';

export default function FirstSlide() {

    const [infos] = useState([{
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
                <Container>
                        <h1>Винаги давай на света и на хората около теб най-доброто, което можеш и имаш… въпреки всичко!</h1>
                </Container>
                <div className="box-contents">
                {
                    infos.map((item, index) => {
                        return (<InfoBox key={index} image={item.image} text={item.text} />)
                    })
                }
                </div>
        </div>
    );

}
