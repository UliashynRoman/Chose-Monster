//Component File

import React from 'react';
import './card-list.styles.css';

import {Card} from '../card/card.component';

//Functional Component to export out 
export const CardList = (props) => (
     <div className='card-list'>{
        //map is generate list 2
        props.monsters.map(monster => 
        <Card key={monster.id}  monster={monster}/>
        )}
    </div>
);