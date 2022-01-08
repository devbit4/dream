import React from 'react';

const Wish = (props) => {


    const onPlus = () => {
        props.plus(props.wish);
    }

    const onMinus = () => {
        props.minus(props.wish)
    }

    const onDelete = () => {
        props.delete(props.wish)
    }

    return (
        <li className="wish">
            <span className='activity-name'><i className="fas fa-thumbtack"></i> {props.wish.name}</span>
            <div className='options'>
                <span className="option"><i className="far fa-thumbs-up" onClick={onPlus}></i></span>
                <span className='option num'>{props.wish.good}</span>
                <span className='option'><i className="far fa-thumbs-down" onClick={onMinus}></i></span>
                <span className='option num'>{props.wish.bad}</span>
                <span className='option'><i className="far fa-trash-alt" onClick={onDelete}></i></span>
            </div>
        </li>
    );
};

export default Wish;
