import React from 'react';
import './search-bar.styles.css';

export const SearchBar = ({handleChange, placeHolder}) => (

    <input
        className="search"
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}
    />

);