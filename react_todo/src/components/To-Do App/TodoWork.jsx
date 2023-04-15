import React from "react";
import Work from "./Work";
import { todoContext } from "./Todo";
import { useContext } from "react";

const TodoWork = () => {
  const [todos, setTodo] = useContext(todoContext);
  return (
    <div>
      {todos.map((todo,key) => (        
          <Work
            key={key}
            title={todo.title}
            description={todo.description}
          />
        ))}
    </div>
  );
};

export default TodoWork;
