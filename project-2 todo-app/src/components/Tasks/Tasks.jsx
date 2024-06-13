import Task from "../Task/Task";
import styles from "./task.module.css";

const Tasks = ({ tasks, toggleTaskComplete, handleDeleteTask }) => {
  const completedTask = tasks.filter((task) => task.isComplete).length;

  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created Tasks</p>
          <span>{tasks.length}</span>
        </div>

        <div>
          <p>Completed</p>
          <span>
            {completedTask} of {tasks.length}
          </span>
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
