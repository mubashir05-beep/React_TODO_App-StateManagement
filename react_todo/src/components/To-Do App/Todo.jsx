import React, { useState } from "react";
import "./todo.css";
const Todo = () => {
  const [Todo, setTodo] = useState("");
  const todo = (e) => {
    return console.log({Todo})
  };
  return (
    <div>
        <form >
        <input type="text" onInput={event=>{setTodo(event.target.value)}}/>
          <input type="submit" value="click" />
        </form>
     
      <div>{Todo.length}</div>
    </div>
  );
};

export default Todo;
