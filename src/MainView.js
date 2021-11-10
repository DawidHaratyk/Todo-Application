import React from "react";
import TasksCategories from "./components/TasksCategories/TasksCategories";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";

function MainView({ tasksList }) {
  return (
    <>
      <TasksCategories tasksList={tasksList} />
      <AddTaskButton />
    </>
  );
}

export default MainView;
