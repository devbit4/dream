import React, { useState } from 'react';
import Wish from './Wish';

const Wishes = (props) => {
    const [wishes, setWishes] = useState([
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ]);

    return (
        <div className='wishes'>
            {
                wishes.map(wish => {
                    return (
                        <Wish wish={wish}></Wish>
                    )
                })
            }
        </div>
    )
};

export default Wishes;