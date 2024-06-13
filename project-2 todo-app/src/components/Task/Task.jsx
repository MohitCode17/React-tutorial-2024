import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Task = ({ task, toggleTaskComplete, handleDeleteTask }) => {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => toggleTaskComplete(task.id)}
      >
        {task.isComplete ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isComplete ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(task.id)}
      >
        <TbTrash />
      </button>
    </div>
  );
};

export default Task;
