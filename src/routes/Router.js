import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MainView from "../MainView";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import { tasks } from "../data/data";
import AddTaskView from "../components/AddTaskView/AddTaskView";

function Router() {
  const [tasksList, setTasksList] = useState(tasks);

  return (
    <Switch>
      <Route path="/" exact>
        <MainView tasksList={tasksList} />
      </Route>
      <Route path="/addTaskView" exact>
        <AddTaskView tasksList={tasksList} setTasksList={setTasksList} />
      </Route>
      <Route path="/tasks/:id" exact>
        <TaskDetails tasksList={tasksList} />
      </Route>
    </Switch>
  );
}

export default Router;
