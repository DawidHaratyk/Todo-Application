import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import { BrowserRouter } from "react-router-dom";
import TaskAndIcons from "./components/TimeAndIcons/TimeAndIcons";
import Router from "./routes/Router";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        <TaskAndIcons>
          <Router />
        </TaskAndIcons>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
