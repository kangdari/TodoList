import React from 'react';
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
    return (
        <div className="TodoInsert">
            <input placeholder="할 일"/>
            <button> <MdAdd/> </button>
        </div>
    );
};

export default TodoInsert;