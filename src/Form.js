import React, { useState } from 'react';


const Form = ({ className, addTodo }) => {
    const [text, setText] = useState('')

    const handleSubmit = (event) => {         //送信時の処理
        event.preventDefault();

        if (text.length === 0) {
            alert('文字を入力してちょうだい');
            return;
        }
        addTodo(text);
        setText('');
    };


    return (
        <form onSubmit={handleSubmit} className={className}>
            <input type='text'
                value={text}
                onChange={(event) => {
                    setText(event.target.value)
                }}
            />
            <button type='submit'>登録</button>
        </form>
    )
}

export default Form;