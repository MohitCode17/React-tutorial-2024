import Task from "../Task/Task";
import styles from "./task.module.css";

const Tasks = ({ tasks, toggleTaskComplete, handleDeleteTask }) => {
  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created Tasks</p>
          <span>5</span>
        </div>

        <div>
          <p>Completed</p>
          <span>2 of 5</span>
        </div>
      </header>

      <div className={styles.tasksList}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTaskComplete={toggleTaskComplete}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
