import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/image.jpg";
import image2 from "../../images/image2.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Alert from "../Alert/Alert";

function AddTaskView({ tasksList, setTasksList }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [taskInfo, setTaskInfo] = useState({
    taskName: "",
    dueDate: new Date().toLocaleDateString("en-US"),
    isDone: false,
    image: "",
    username: "",
    description: "",
    id: tasksList.length + 1,
  });
  const [isAlertActive, setIsAlertActive] = useState(false);

  const { taskName, username, description, dueDate } = taskInfo;
  const areInputsNotFilled = !taskName || !username || !description;

  const handleAddTask = () => {
    if (areInputsNotFilled) {
      setIsAlertActive(true);
      return setTimeout(() => {
        setIsAlertActive(false);
      }, 3000);
    } else {
      setTasksList((prevState) => [...prevState, taskInfo]);
    }
  };

  return (
    <div className="task__details">
      {isAlertActive && <Alert />}
      <div className="task__details-icons">
        <Link to="/">
          <i className="fas fa-chevron-left task__details-icon"></i>
        </Link>
        <Link
          to={areInputsNotFilled ? "/addTaskView" : "/"}
          onClick={handleAddTask}
        >
          <i className="fas fa-check-circle task__details-icon task__details-icon-check"></i>
        </Link>
      </div>
      <div className="task__details-info">
        <div className="task__details-name">
          <div className="task-side">
            <input
              type="text"
              className="task__details-input"
              placeholder="Task name..."
              value={taskName}
              onChange={(e) => {
                setTaskInfo({ ...taskInfo, taskName: e.target.value });
              }}
            />
            <span className="task__number">0008</span>
          </div>
        </div>
        <div className="task__details-user-container">
          <div className="task__details-user">
            <div
              className={`task__details-circle ${
                username ? "" : "task__details-circle-empty"
              }`}
            >
              {username && (
                <img
                  src={username === "Martyna Jota" ? image : image2}
                  alt="user"
                  className="task__details-image"
                />
              )}
              <select
                name="users"
                className="task__details-select"
                onChange={(e) => {
                  setTaskInfo({
                    ...taskInfo,
                    username: e.target.value,
                    image: e.target.value === "Martyna Jota" ? image : image2,
                  });
                }}
                value="Select one option"
              >
                <option
                  value="Select one option"
                  className="task__details-option"
                >
                  Select one option
                </option>
                <option value="Anna Kowalska" className="task__details-option">
                  Anna Kowalska
                </option>
                <option value="Martyna Jota" className="task__details-option">
                  Martyna Jota
                </option>
              </select>
            </div>
            <div className="task__details-username-container">
              <span className="task__details-span">Assigned to</span>
              <p className="task__details-text">
                {username ? username : "None"}
              </p>
            </div>
          </div>
          <div className="task__details-date-container">
            <span className="task__details-span">Due date</span>
            <div className="task__details-date">
              <i
                className="far fa-calendar task__details-date-icon"
                onClick={() => setIsCalendarOpen((prevState) => !prevState)}
              ></i>
              <div className="task__details-text">{dueDate}</div>
              {isCalendarOpen && (
                <Calendar
                  value={date}
                  onChange={(date) => {
                    setDate(date);
                    setTaskInfo({
                      ...taskInfo,
                      dueDate: date.toLocaleDateString("en-US"),
                    });
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="task__details-description">
          <span className="task__details-span">Description</span>
          <span className="task__details-line"></span>
          <textarea
            name="text"
            cols="30"
            rows="10"
            placeholder="Description..."
            className="task__details-textarea"
            value={description}
            onChange={(e) => {
              setTaskInfo({ ...taskInfo, description: e.target.value });
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AddTaskView;
