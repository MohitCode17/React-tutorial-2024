import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // SAVE TASKS IN LOCALSTORAGE
  const setTasksAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  // LOAD TASKS FROM LOCALSTORAGE
  const loadSavedTasks = () => {
    const savedTask = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTask) {
      setTasks(JSON.parse(savedTask));
    }
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  // ADD TO TASK
  const handleAddToTasks = (title) => {
    if (!title) return alert("Task content should not be empty.");
    setTasksAndSave([
      ...tasks,
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

    setTasksAndSave(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasksAndSave(newTasks);
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
