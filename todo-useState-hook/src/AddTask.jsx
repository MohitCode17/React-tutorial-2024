import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [taskContent, setTaskContent] = useState("");

  return (
    <div className="taskContainer">
      <input
        type="text"
        placeholder="Add your task..."
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
      />
      <button
        onClick={() => {
          setTaskContent("");
          onAddTask(taskContent);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
