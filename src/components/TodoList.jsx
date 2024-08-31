import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit";

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);
  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };
  const deleteTodo= id=>{
    setTodo(todoValue.filter(todo => todo.id!== id))
  };
  const editTodo=id =>{
    setTodo(todoValue.map(todo => todo.id=== id ?{...todo,isEditing: !todo.isEditing}:todo))
  }
  const editTask=(task,id) =>{
    setTodo(todoValue.map(todo => todo.id===id ?{...todo,task,isEditing: !todo.isEditing} :todo))
  }
  return (
    <div className="container shadow-lg bg-slate-200 mt-20 p-8 rounded-md w-full sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto md:mx-auto sm:mx-auto text-xl">
      <Form createTodo={createTodo} />
      {
        todoValue.map((todo)=>(
          todo.isEditing ?(
            <Edit key={todo.id} editTodo={editTask} task={todo}/ >
          ):(
            <Todo task={todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} />
          ))
          )
           
      }
    </div>
  );
};

export default TodoList;
