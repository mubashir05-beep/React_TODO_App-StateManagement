import React, { useState } from "react";
import { todoContext } from "./Todo";
import { useContext } from "react";
import { GrFormClose } from "react-icons/gr";
import "./todo.css";
import { v4 as uuid } from "uuid";
const AddTodo = () => {
  const [todos, setTodo] = useContext(todoContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const getTitle = (e) => {
    setTitle(e.target.value);
  };
  const getDesc = (e) => {
    setDesc(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    if (title == "") {
      return alert(
        "Please Enter Title! Description can be added in post-edit."
      );
    } else {
      setTodo((prevTodo) => [
        ...prevTodo,
        { title: title, description: desc, checked: false, id: uuid() },
      ]);
      setTitle("");
      setDesc("");
    }
  };
  const [modal, setModal] = useState(false);
  function handleModal() {
    return setModal(!modal);
  }

  return (
    <div className="AddTODOContainer">
      <button id="taskBTN" onClick={handleModal}>
        AddTask
      </button>
      <div>
        {modal && (
          <form id="addNewForm" className="addNewForm" onSubmit={addTodo}>
            <div className="formLeftContainer">
              <div className="titleContainer">
                <div className="titleHeading">Title</div>
                <input
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Enter title"
                  onChange={getTitle}
                />
              </div>
              <div className="descContainer">
                <div className="descDescription">Description</div>
                <input
                  type="text"
                  name="description"
                  value={desc}
                  placeholder="Enter description"
                  onChange={getDesc}
                />
              </div>

              <button className="submit">Add</button>
            </div>
            <div className="formRightContainer tooltip">
              <GrFormClose onClick={handleModal} />
              {/* <span className="tooltiptext">Close</span> */}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddTodo;
