import { useState } from "react";
import AddTask from "./AddTask";
import "./App.css";
import TaskList from "./TaskList";

// INITIAL TASKS DATA
const initialTasks = [
  { id: 0, taskContent: "Watch a movie", complete: true },
  { id: 1, taskContent: "Learn Backend Development", complete: false },
  { id: 2, taskContent: "Do some yoga", complete: true },
];

let nextId = 3;

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  // ADD A TASK
  const handleAddTask = (taskContent) => {
    setTasks((prev) => [
      ...prev,
      {
        id: nextId++,
        taskContent: taskContent,
        complete: false,
      },
    ]);
  };

  console.log(tasks);

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <div className="wrapper">
        <AddTask onAddTask={handleAddTask} />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
