import React, { useRef } from 'react';

const Add = (props) => {
    const wish = useRef();
    const deadLine = useRef();
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onAdd();
        }
    }
    const onAdd = () => {
        if (wish.current.value === "") return;
        if (deadLine.current.value === "") {
            deadLine.current.value = "미정";
        }
        props.adding(wish.current.value, deadLine.current.value);
        wish.current.value = "";
        deadLine.current.value = "";
    }

    return (
        <div className='add'>

            <input onKeyPress={onKeyPress} ref={wish} placeholder="Write your wish" type="text" />
            <input onKeyPress={onKeyPress} ref={deadLine} placeholder="DeadLine" type="text" />
            <button onClick={onAdd}>ENTER</button>
        </div>
    )
};

export default Add;