import React, { useState } from "react";
import Task from "../Task/Task";
import { Link } from "react-router-dom";

function TaskCategory({ tasksCategory, title, color }) {
  const [isActive, setIsActive] = useState(false);

  const currentTasksList = tasksCategory.map((task) => {
    const { taskName, dueDate, id } = task;
    return (
      <Link to={`/tasks/${id}`} key={id}>
        <Task taskName={taskName} dueDate={dueDate} color={color} />
      </Link>
    );
  });

  return (
    <div className="tasks__category-container">
      <div
        className={`tasks__category ${
          isActive ? "" : "tasks__category-border"
        }`}
      >
        <div className="tasks__category-side">
          {color ? (
            <span className={`tasks__category-circle circle-${color}`}></span>
          ) : (
            <i className="fas fa-check-circle tasks__category-icon"></i>
          )}
          <h4 className="tasks__category-headline">
            {title}{" "}
            <span className="tasks__category-span">
              ({tasksCategory.length})
            </span>
          </h4>
          {isActive && (
            <i className="fas fa-arrow-down tasks__category-arrow"></i>
          )}
        </div>
        <div className="tasks__category-side">
          <p className="tasks__category-text">{isActive ? "Hide" : "Show"}</p>
          <i
            className={`fas fa-chevron-${
              isActive ? "left" : "right"
            } tasks__category-arrow tasks__category-arrow-${
              isActive ? "left" : "right"
            }`}
            onClick={() => setIsActive((prevState) => !prevState)}
          ></i>
        </div>
      </div>
      <div
        className={`tasks-list ${isActive ? "active" : ""}`}
        style={isActive ? { height: 53 * currentTasksList.length } : {}}
      >
        {currentTasksList}
      </div>
    </div>
  );
}

export default TaskCategory;
