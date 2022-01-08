import React, { useRef } from 'react';

const Wish = (props) => {
    const name = useRef();

    const onPlus = () => {
        props.plus(props.wish);
    }

    const onMinus = () => {
        props.minus(props.wish)
    }

    const onDelete = () => {
        props.delete(props.wish)
    }

    const doneLine = () => {
        name.current.classList.toggle("done");
    }

    return (
        <li className="wish">
            <span className='activity-name' onClick={doneLine} ref={name}><i className="fas fa-check"></i> {props.wish.name}</span>
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
