import React from "react";

function TaskNameAndNumber({ taskName }) {
  return (
    <div className="task-side">
      <p className="task__name">{taskName}</p>
      <span className="task__number">0008</span>
    </div>
  );
}

export default TaskNameAndNumber;
