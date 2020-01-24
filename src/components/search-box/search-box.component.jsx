import React from 'react';

import './search-box.styles.css'

//functional component beacuse we dont need access to the state or lifecycle methods
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)