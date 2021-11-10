import React from "react";
import TaskNameAndNumber from "../TaskNameAndNumber/TaskNameAndNumber";

function Task({ taskName, dueDate, color }) {
  return (
    <div className="task">
      <div className="task-side">
        <span
          className={`task__line circle-${color ? color : "green-light"}`}
        ></span>
        <TaskNameAndNumber taskName={taskName} />
      </div>
      <div className="task-side">
        <span
          className={`task__circle circle-${color ? color : "green-light"}`}
        ></span>
        <div className="task__dates">
          <p className="task__date-small">{dueDate}</p>
          <p className="task__date-large">{dueDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Task;
