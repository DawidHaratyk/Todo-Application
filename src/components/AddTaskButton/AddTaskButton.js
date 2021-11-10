import React from "react";
import { Link } from "react-router-dom";

function AddTaskButton() {
  return (
    <div className="btn-container">
      <Link to="/addTaskView">
        <button className="btn-add"></button>
      </Link>
    </div>
  );
}

export default AddTaskButton;
