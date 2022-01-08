import React from 'react';

const Wish = (props) => {
    return (
        <div className="wish">
            <span className='activity-name'><i className="fas fa-thumbtack"></i> {props.wish.name}</span>
            <div className='options'>
                <span className="option"><i className="far fa-thumbs-up"></i></span>
                <span className='option num'>0</span>
                <span className='option'><i className="far fa-thumbs-down"></i></span>
                <span className='option num'>0</span>
                <span className='option'><i class="far fa-trash-alt"></i></span>
            </div>
        </div>
    );
};

export default Wish;
