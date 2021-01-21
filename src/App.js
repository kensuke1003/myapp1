import React, { useState } from 'react';
import './contener/App.css';
import './contener/Form.css';
import './contener/Title.css';
import Form from './Form';
import List from './List';
import Title from './Title'
import { nanoid } from 'nanoid';

const App = () => {
  const [name, setName] = useState("kensuke");
  const ChangeName = () => {
    setName("mami");
  }

  const [todos, setTodos] = useState([
    {
      content: "洗濯バサミ  ",
      id: nanoid(),
    },
    {
      content: "スリッパ",
      id: nanoid(),
    },
    {
      content: "柔軟剤",
      id: nanoid(),
    }
  ])

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        content: text, id: nanoid()
      }
    ]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)) //コールバック関数を引数　間違いだけ残って表示される
  }
  return (
    <div class="no">
      <>
        <h1>お買い物リスト</h1>
        <Title user={name} />
        <Form className={"iii"} addTodo={addTodo} />
        <List todos={todos} deleteTodo={deleteTodo} />
        <button class="yes" onClick={ChangeName}>名前変更ボタン</button>
      </>

    </div>
  )
}


export default App;

