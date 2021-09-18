import React from 'react';
import './searchBox.scss';

const SearchBox = () => {

    return (
        <div className="search__container">
            <p className="search__title">
                Go ahead, hover over search
            </p>
            <input className="search__input" type="text" placeholder="Search"/>
            <button className=" fa fa-search"></button>
        </div>
    );


}

export default SearchBox;
