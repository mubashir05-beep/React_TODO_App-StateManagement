import React, { useState } from "react";
import { todoContext } from "./Todo";
import { useContext } from "react";


import { GrFormClose } from "react-icons/gr";
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
      return 0;
    } else {
      setTodo((prevTodo) => [...prevTodo, { title: title, description: desc }]);
      setTitle("");
      setDesc("");
    }
  };
  const [modal,setModal]=useState(false);
  function handleModal(){
    return setModal(!modal);
  }

  return (
    <div>
        <button id="taskBTN" onClick={handleModal}>AddTask</button>
        {
            modal && <form onSubmit={addTodo}>
                <div className="formLeftContainer">
                  <div className="titleContainer">
                    <div className="titleHeading">Title</div>
                <input type="text" name="title" value={title} placeholder="Please Enter A Todo Task" onChange={getTitle} />
                </div>
           <div className="descContainer">
            <div className="descDescription">
                Description
            </div>
           <input type="text" name="description" value={desc} placeholder="Please Enter A Task Description" onChange={getDesc} />
           </div>
            
            <button>Submit</button>
                </div>
                <div className="formRightContainer">
                    <GrFormClose onClick={handleModal} />
                </div>
              
          </form>
        }
            
   
     
    </div>
  );
};

export default AddTodo;
