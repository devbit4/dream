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
            <div className="color">
                <button className="color1" onClick={() => {
                    props.set.current.style.background = "linear-gradient(180deg, rgba(242,135,194,1) 0%, rgba(241,194,118,1) 100%)";
                }}></button>
                <button className="color2" onClick={() => {
                    props.set.current.style.background = "linear-gradient(0deg, #fca5f1 0%, #b5ffff 100%)";
                }}></button>
            </div>
            <div className='time'>
                <Moment format='YYYY/MM/DD HH:mm:ss'>{seconds}</Moment>

            </div>
        </div>
    )
};

export default Header;