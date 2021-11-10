import React, { useState, useEffect } from "react";
import TaskCategory from "../../components/TaskCategory/TaskCategory";
import { categoryTitles } from "../../data/data";

function TasksCategories({ tasksList }) {
  const [tasksCategories, setTasksCategories] = useState({
    overdue: [],
    today: [],
    upcoming: [],
    completed: [],
  });
  const time = new Date();

  const handleSortingTasks = () => {
    for (let i = 0; i < tasksList.length; i++) {
      const { isDone, dueDate } = tasksList[i];
      const { completed, today, upcoming, overdue } = tasksCategories;

      if (isDone) {
        const newCompletedArray = completed;
        newCompletedArray.push(tasksList[i]);
        setTasksCategories({
          ...tasksCategories,
          completed: newCompletedArray,
        });
      } else if (
        time.toLocaleDateString() === new Date(dueDate).toLocaleDateString()
      ) {
        const newTodayArray = today;
        newTodayArray.push(tasksList[i]);
        setTasksCategories({ ...tasksCategories, today: newTodayArray });
      } else if (time.getTime() < new Date(dueDate).getTime()) {
        const newUpcomingArray = upcoming;
        newUpcomingArray.push(tasksList[i]);
        setTasksCategories({ ...tasksCategories, upcoming: newUpcomingArray });
      } else {
        const newOverdueArray = overdue;
        newOverdueArray.push(tasksList[i]);
        setTasksCategories({ ...tasksCategories, overdue: newOverdueArray });
      }
    }
  };

  const tasksCategoriesList = categoryTitles.map((category) => {
    const { title, color } = category;
    const lowerCaseTitle = title.toLowerCase();
    return (
      <TaskCategory
        tasksCategory={tasksCategories[lowerCaseTitle]}
        title={title}
        color={color}
        key={title}
      />
    );
  });

  useEffect(() => {
    handleSortingTasks();
  }, [tasksList]);

  return (
    <div className="tasks">
      <h3 className="tasks__headline">My tasks</h3>
      <div className="tasks__categories">{tasksCategoriesList}</div>
    </div>
  );
}

export default TasksCategories;
