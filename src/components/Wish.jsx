import React, { useRef } from 'react';

const Wish = (props) => {
    const desc = useRef();

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
        desc.current.classList.toggle("done");
    }

    return (
        <li className="wish">
            <div className="description" onClick={doneLine} ref={desc} >
                <i className="fas fa-check"></i>
                <span className='activity-type'> {props.wish.type} / </span>
                <span className='activity-name'>{props.wish.name} </span>
                <span className='activity-deadline'>/ {props.wish.deadLine}</span>
            </div>

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
