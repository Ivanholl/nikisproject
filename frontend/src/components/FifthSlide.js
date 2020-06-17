import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import ContactForm from './ContactForm';
import MapComponent from './MapComponent';

export default function FifthSlide() {
    const [adress, setAdress] = useState(dummyAdress)

    return (
        <Container className="fifthSlide">
            <div className="left-side">
                <div className="adress">
                    <h3>контакти</h3>
                    <p>{`${adress.city} ${adress.zip}`}</p>
                    <p>{`${adress.str} ${adress.number}`}</p>
                    <p>{`${adress.building} ${adress.floor}`}</p>
                </div>
                <div className="phones">
                    <h3>{"\u00a0"}</h3>
                    <p>{adress.phoneOne}</p>
                    <p>{adress.phoneTwo}</p>
                    <p>{adress.phoneThree}</p>
                </div>
                <MapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `20vh`, width: '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
            <div className="right-side">
                <ContactForm />
            </div>
        </Container >
    );
}

const dummyAdress = {
    city: 'София',
    zip: 1421,
    str: 'ул. Крум Попов',
    number: 44,
    building: '',
    floor: 'етаж 1',
    phoneOne: '+359 2 963 08 81',
    phoneTwo: '+359 896 720 616',
    phoneThree: '',
}
