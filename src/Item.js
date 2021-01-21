
import React, { useState } from 'react';

const Item = ({ todo, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false);                             //isDoneはstateと同義　　今回は真偽値  で判断
    console.log(deleteTodo);
    return (
        <li>
            <input type="checkbox" onChange={() => {
                setIsDone(!isDone)                                        //!はなに？
            }} />
            <span style={
                { textDecoration: isDone ? 'line-through' : 'none' }               //条件演算子 
            }>{todo.content}</span>

            <button onClick={() => {
                deleteTodo(todo.id);　　　　　　　　　//todo.idは？
            }}>削除</button>
        </li >
    );　　　　　　　　　　　　　　　　　　　　//todo.idは引数、propsを意味する
};

export default Item
