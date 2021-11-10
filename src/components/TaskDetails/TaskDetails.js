import React from "react";
import { useParams, Link } from "react-router-dom";
import TaskNameAndNumber from "../TaskNameAndNumber/TaskNameAndNumber";

function TaskDetails({ tasksList }) {
  const { id } = useParams();
  const currentTaskId = id - 1;
  const { description, dueDate, image, taskName, username } =
    tasksList[currentTaskId];

  return (
    <div className="task__details">
      <Link to="/">
        <i className="fas fa-chevron-left task__details-icon"></i>
      </Link>
      <div className="task__details-info">
        <div className="task__details-name">
          <TaskNameAndNumber taskName={taskName} />
        </div>
        <div className="task__details-user-container">
          <div className="task__details-user">
            <div className="task__details-circle">
              <img src={image} alt="user" className="task__details-image" />
            </div>
            <div className="task__details-username-container">
              <span className="task__details-span">Assigned to</span>
              <p className="task__details-text">{username}</p>
            </div>
          </div>
          <div className="task__details-date-container">
            <span className="task__details-span">Due date</span>
            <div className="task__details-date">
              <i className="far fa-calendar task__details-date-icon"></i>
              <div className="task__details-text">{dueDate}</div>
            </div>
          </div>
        </div>
        <div className="task__details-description">
          <span className="task__details-span">Description</span>
          <span className="task__details-line"></span>
          <p className="task__details-paragraph">{description}</p>
          <button className="task__details-btn">Show more</button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
