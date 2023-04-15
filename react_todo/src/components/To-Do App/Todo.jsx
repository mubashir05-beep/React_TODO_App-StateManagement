import React, { createContext, useRef, useState } from "react";

import "./todo.css";
export const todoContext = createContext();
export const Todo = (props) => {
const [todos, setTodo] = useState([
{
id: "1", // Add an id field to each todo item
title: "Welcome",
description:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium est explicabo modi facere laborum? Assumenda.",
}
]);
return (
<todoContext.Provider value={[todos, setTodo]}>
{props.children}
</todoContext.Provider>
);
};