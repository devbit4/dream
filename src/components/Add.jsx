import React, { useRef } from 'react';

const Add = (props) => {
    const wish = useRef();
    const deadLine = useRef();
    const type = useRef();
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
        props.adding(type.current.value, wish.current.value, deadLine.current.value);
        wish.current.value = "";
        deadLine.current.value = "";
        type.current.value = "";

    }

    return (
        <div className='add'>
            <select name="type" id="type" ref={type}>
                <option value="">-분류-</option>
                <option value="성취">성취</option>
                <option value="관계">관계</option>
                <option value="건강">건강</option>
                <option value="여행">여행</option>
            </select>
            <input onKeyPress={onKeyPress} ref={wish} placeholder="Write your wish" type="text" />
            <input onKeyPress={onKeyPress} ref={deadLine} placeholder="DeadLine" type="text" />
            <button onClick={onAdd}>ENTER</button>
        </div>
    )
};

export default Add;