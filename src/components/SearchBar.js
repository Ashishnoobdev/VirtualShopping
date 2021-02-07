import React from 'react';

const SearchBar = ({ onSearchChange }) => {
    return <input 
    className='pa3 center w-25 mr2 ba b--green bg-lightest-blue' 
    type='search' 
    placeholder='Search Items'
    onChange={onSearchChange}
    />
};

export default SearchBar;