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

  return (
    <>
      <Header handleAddToTasks={handleAddToTasks} />
      <Tasks tasks={tasks} />
    </>
  );
};

export default App;
