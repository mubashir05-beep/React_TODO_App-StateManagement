import React from "react";
import Work from "./Work";
import { todoContext } from "./Todo";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import './todo.css'

const TodoWork = () => {
  const [todos, setTodo] = useContext(todoContext);

  return (
    <div className="workTodo">
      {todos.map((todo) => {
        const workId = uuid(); // Generate UUID once
        return (
          <Work
            checked={todo.checked}
            key={todo.id} // Use the same UUID for key prop
            id={todo.id} // Use the same UUID for id prop
            title={todo.title}
            description={todo.description}
            setTodo={setTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoWork;
