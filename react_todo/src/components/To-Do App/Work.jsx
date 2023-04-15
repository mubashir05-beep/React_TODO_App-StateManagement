import React, { useContext } from "react";
import { FiEdit3} from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import "./todo.css";

const Work = ({ title, description }) => {
  return (
    <div className="container">
      <div className="workTitleContainer">
      <div className="title">{title}</div>
      <div className="icons">
        <FiEdit3 id="editIcn"/>
        <MdDeleteForever id="editIcn"/>
      </div>
      </div>
      
      <div className="descModel">{description}</div>
    </div>
  );
};

export default Work;
