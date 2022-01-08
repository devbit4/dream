import React, { useState } from 'react';
import Wish from './Wish';

const Wishes = (props) => {


    return (
        <ul className='wishes'>
            {
                props.wishes.map(wish => {
                    return (
                        <Wish key={wish.id} wish={wish} plus={props.plus} minus={props.minus}></Wish>
                    )
                })
            }
        </ul>
    )
};

export default Wishes;