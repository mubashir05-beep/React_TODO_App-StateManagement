import React, { createContext, useRef, useState } from "react";
import { v4 as uuid } from "uuid"; // Import uuid library

import "./todo.css";
export const todoContext = createContext();
export const Todo = (props) => {
  const [todos, setTodo] = useState([
    {
      id: uuid(), // Generate unique id using uuid
      checked: false,
      title: "Welcome",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium est explicabo modi facere laborum? Assumenda.",
    },
  ]);
  return (
    <todoContext.Provider value={[todos, setTodo]}>
      {props.children}
    </todoContext.Provider>
  );
};
