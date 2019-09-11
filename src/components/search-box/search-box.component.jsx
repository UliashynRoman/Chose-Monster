import React from 'react';
import './search-box.style.css';

//get props and return html
export const SearchBox = ({placeholder,handlerChange}) => (
    <input type='search' 
            className ='search'
            placeholder={placeholder} 
            onChange={handlerChange}
    />
);