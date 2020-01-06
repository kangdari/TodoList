import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md'
import './TodoListItem.scss'
import cn from 'classname'


const TodoListItem = ({ todo, onRemove, onToggle}) => {
    // id 추가
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>{onToggle(id)}}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>    
            </div>
            {/* onClick 이벤트 설정 */}
            <div className="remove" onClick={()=>{onRemove(id)}} >
                <MdRemoveCircleOutline/>
            </div>            
        </div>
    );
};

export default React.memo(TodoListItem);