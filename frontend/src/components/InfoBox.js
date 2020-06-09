import React from 'react';

export default function InfoBox(props) {
    return (<div className="box">
        <img src={require(`../images/${props.image}`)}/>
        <p>{props.text}</p>
    </div>);
}
