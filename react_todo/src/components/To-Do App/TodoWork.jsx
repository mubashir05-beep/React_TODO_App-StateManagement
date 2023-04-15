import React from "react";
import Work from "./Work";
import { todoContext } from "./Todo";
import { useContext } from "react";
import { v4 as uuid } from 'uuid';

const TodoWork = () => {
const [todos, setTodo] = useContext(todoContext);

return (
<div>
{todos.map((todo) => (
<Work
         key={todo.id}
         id={todo.id}
         title={todo.title}
         description={todo.description}
         setTodo={setTodo}
       />
))}
</div>
);
};

export default TodoWork;