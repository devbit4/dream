import React, { useRef } from 'react';

const Add = (props) => {
    const input = useRef();
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onAdd();
        }
    }
    const onAdd = () => {
        if (input.current.value === "") return;
        props.adding(input.current.value);
        input.current.value = "";
    }

    return (
        <div className='add'>
            <input onKeyPress={onKeyPress} ref={input} placeholder="Write your wish" type="text" />
            <button onClick={onAdd}>ENTER</button>
        </div>
    )
};

export default Add;