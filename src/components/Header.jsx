import React, { useState } from 'react';
import { useInterval } from 'react-use';
import Moment from 'react-moment';


const Header = (props) => {
    const [seconds, setSeconds] = useState(Date.now());
    useInterval(() => {
        setSeconds(Date.now());
    }, 1000)

    return (
        <div className='header'>
            <header>
                <i className="fas fa-rocket"></i>
                <h1> bucketlist</h1>
                <span>{props.total}</span>
            </header>
            <div className='time'>
                <Moment format='YYYY/MM/DD HH:mm:ss'>{seconds}</Moment>

            </div>
        </div>
    )
};

export default Header;