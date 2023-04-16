import React, { useContext, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import "./todo.css";

const Work = ({ id, title, description, setTodo }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  function edit_Title(e) {
    setEditTitle(e.target.value);
  }

  function edit_Desc(e) {
    setEditDesc(e.target.value);
  }

  function handleEdit(e) {
    e.preventDefault();
    if (editTitle === "") {
      return;
    } else {
      setTodo((prevTodo) => {
        return prevTodo.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title: editTitle, description: editDesc };
          }
          return todo;
        });
      });
      setEditTitle("");
      setEditDesc("");
    }
  }
  function handleDelete(e) {
    e.preventDefault();
    setTodo((prevTodo) => {
      return prevTodo.filter((item) => item.id !== id);
    });
    setEditTitle("");
    setEditDesc("");
  }

  function handleModal() {
    return setToggleModal(!toggleModal);
  }

  return (
    <div className="container">
      <div className="workTitleContainer">
        <div className="title">{title}</div>
        <div className="icons">
          <FiEdit3 id="editIcn" onClick={handleModal} />
          <MdDeleteForever id="editIcn" onClick={handleDelete} />
        </div>
      </div>
      <div className="descModel">{description}</div>
      <div className="formEditContainer">
      
          {toggleModal && (
              <div className="formEdit">
            <form onSubmit={handleEdit}>
              <div className="inputText">
                <div className="inputEditText">
                  Change Title
                </div>
              <input
                type="text"
                name="editName"
                value={editTitle}
                onChange={edit_Title}
              />
              </div>
             <div className="inputDesc">
             <div className="inputEditDesc">
                  Change Description
                </div>
             <input
                type="text"
                name="editDesc"
                value={editDesc}
                onChange={edit_Desc}
              />
             </div>
              
              <button type="submit">submit</button>
            </form>
            <div className="crossIcon">
            <GrFormClose/>
            </div>
           
            </div>
          )}
        </div>
      
    
    </div>
  );
};

export default Work;
