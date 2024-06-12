import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // ADD TO TASK
  const handleAddToTasks = (title) => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: title,
        isComplete: false,
      },
    ]);
  };

  // TOGGLE COMPLETE
  const toggleTaskComplete = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <>
      <Header handleAddToTasks={handleAddToTasks} />
      <Tasks
        tasks={tasks}
        toggleTaskComplete={toggleTaskComplete}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;
