import React, { useContext, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { MdOpenInFull } from "react-icons/md";
import "./todo.css";
import CompletedTask from "./CompletedTask";

const Work = ({ id, title, description, setTodo, checked }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [green, setGreen] = useState(false);
  function edit_Title(e) {
    setEditTitle(e.target.value);
  }

  function edit_Desc(e) {
    setEditDesc(e.target.value);
  }

  function handleEdit(e) {
    e.preventDefault();
    if (editTitle === "" && editDesc==="") {
      return;
    } else if(editTitle===""){
        setTodo((prevTodo) => {
          return prevTodo.map((todo) => {
            if (todo.id === id) {
              return { ...todo, description: editDesc };
            }
            return todo;
          });
        });
        setEditTitle("");
        setEditDesc("");
      }
      else if(editDesc===""){
        setTodo((prevTodo) => {
          return prevTodo.map((todo) => {
            if (todo.id === id) {
              return { ...todo, title: editTitle };
            }
            return todo;
          });
        });
        setEditTitle("");
        setEditDesc("");
      }
      else{
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
    }}
  
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
  function handleGreen(e) {
    e.preventDefault();
    setTodo((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          const updatedChecked = !checked; // Toggle the `checked` property of the todo item
          // setGreen(updatedChecked); // Remove this line, as it seems to be unrelated to `todos` state
          return { ...todo, checked: updatedChecked };
        }
        return todo;
      });
    });
  }
  const [openDesc, setOpenDesc] = useState(false);
  function handleOpen() {
    return setOpenDesc(!openDesc);
  }

  return (
    <>
      <div className="container">
        <div className="unCompeletedTask">
          <div className="workTitleContainer">
            <div className="title">{title}</div>
            <div className="icons">
              <div className="iconCheck tooltipright">
                <AiOutlineCheckCircle
                  className={checked ? "checkicon green" : "checkicon"}
                  onClick={handleGreen}
                />
                <span className="tooltiptextright">Check</span>
              </div>
              <div className="editicons tooltipright">
                <FiEdit3 id="editIcn" onClick={handleModal} />
                <span className="tooltiptextright">Edit</span>
              </div>
              <div className="iconDelete tooltipleft">
                <MdDeleteForever id="editIcn" onClick={handleDelete} />
                {/* <span className="tooltiptextleft">Delete</span> */}
              </div>
              <div className="iconOpenDesc tooltipright">
                <MdOpenInFull id="editIcn" onClick={handleOpen} />
                <span className="tooltiptextright">Desc</span>
              </div>
            </div>
          </div>
          {openDesc && <div className="descModel">{description}</div>}

          <div className="formEditContainer">
            {toggleModal && (
              <div className="formEdit" id="formEdit">
                <form id="formEditALL" onSubmit={handleEdit}>
                  <div className="inputText">
                    <div className="inputEditText">Change Title</div>
                    <input
                      type="text"
                      name="editName"
                      value={editTitle}
                      onChange={edit_Title}
                      placeholder="Enter new title"
                    />
                  </div>
                  <div className="inputDesc">
                    <div className="inputEditDesc ">Change Description</div>
                    <input
                      type="text"
                      name="editDesc"
                      value={editDesc}
                      onChange={edit_Desc}
                      placeholder="Enter new description"
                    />
                  </div>

                  <button className="submit" type="submit">
                    Edit
                  </button>
                </form>
                <div className="crossIcon tooltip">
                  <GrFormClose onClick={handleModal} />
                  <span className="tooltiptext">Close</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
