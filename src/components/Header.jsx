import React from 'react';


const Header = (props) => {

    return (
        <div className='header'>
            <header>
                <i className="fas fa-rocket"></i>
                <h1> bucketList</h1>
                <span>{props.total}</span>
            </header>
        </div>
    )
};

export default Header;