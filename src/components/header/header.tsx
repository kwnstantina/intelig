import React from 'react';
import './header.scss';

const Header = () => {
    const StoringArray = ['S', 'T', 'O', 'R', 'I', 'N', 'G'];
    const IsArray = ['I', 'S'];
    const WayArray = ['W', 'A', 'Y', 'OF', 'T', 'H', 'I', 'N', 'G', 'I', 'N', 'G'];
    return (
        <>
            <div className="main">
                <div className="words word-1">
                    {StoringArray.map((item, key) => <span key={key}>{item}</span>)}
                </div>
                <div className="words word-2">
                    {IsArray.map((item, key) => <span key={key}>{item}</span>)}
                </div>
                <div className="words word-3">
                    {WayArray.map((item, key) => <span key={key}>{item}</span>)}
                </div>
                <a href="/services" className="main__button">Discover services</a>
            </div>

        </>
    );


}


export default Header;
