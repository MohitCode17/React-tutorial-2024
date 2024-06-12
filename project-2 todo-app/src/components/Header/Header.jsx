import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Header = ({ handleAddToTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddToTasks(title);
    setTitle("");
  };

  console.log(title);
  return (
    <div className={styles.header}>
      <img src="./images/todoLogo.svg" alt="todo" />

      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>
          Create <AiOutlinePlusCircle />
        </button>
      </form>
    </div>
  );
};

export default Header;
