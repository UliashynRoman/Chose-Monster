import React from 'react';


import './card.style.css';
export const Card = (props) => (
    <div className='card-container'>
        {/* 3 */}
        <img src={`https://robohash.org/${props.monster.id + 20}?set=set2&180x180`} alt="monster"/>
        <h1> {props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
);