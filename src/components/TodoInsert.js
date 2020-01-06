import React, { useState, useCallback } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
    const [text, setText] = useState('');

    // 처음 렌더링될 때 단 한번만 생성
    const onChange = useCallback(e => {
        setText(e.target.value);
    }, []);
    
    // onInsert or text 변화가 있을 때만 호출
    const onSubmit = useCallback(e=>{
        onInsert(text);
        setText('');
        // 새로고침 방지
        e.preventDefault();
    }, [onInsert, text])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input value={text} onChange={onChange} placeholder="할 일" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
