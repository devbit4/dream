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
        if (wish.current.value === "") {
            alert("버킷리스트 활동명을 입력하세요");
            return;
        };
        if (deadLine.current.value === "") {
            deadLine.current.value = "미정";
        }
        if (type.current.value === "") {
            type.current.value = "기타";
        }
        props.adding(type.current.value, wish.current.value, deadLine.current.value);
        wish.current.value = "";
        deadLine.current.value = "";
        type.current.value = "";

    }

    return (
        <div className='add'>
            <select className="type" name="type" id="type" ref={type}>
                <option value="">type</option>
                <option value="성취">achievement</option>
                <option value="관계">relationship</option>
                <option value="건강">health</option>
                <option value="여행">travel</option>
                <option value="기타">etc</option>
            </select>
            <input className="wishlist" onKeyPress={onKeyPress} ref={wish} placeholder="Write your wish" type="text" />
            <input className="deadline" onKeyPress={onKeyPress} ref={deadLine} placeholder="DeadLine" type="text" />
            <button onClick={onAdd}>ENTER</button>
        </div>
    )
};

export default Add;