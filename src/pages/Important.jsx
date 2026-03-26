import { useTasksData } from "../context/TaskContext";
import TaskItem from "../components/TaskItem";
import "./Important.css"
function Important() {
  const { tasks } = useTasksData();
  const importantTasks = tasks.filter(t => t.isImportant);
  const importantTasksCount = importantTasks.length;
  return (
    <div className="important-tasks-container">
      <h1 className="heading">Important <span className="important-star">★</span></h1>
      <span className="count">{importantTasksCount} starred tasks</span>
      {importantTasks.length === 0 ? (
        <div className="noImportantTasksContainer">
          <h1>★</h1>
          <p> No important tasks yet. Star a task to see it here.</p>
        </div>
      ) : (
        <ul className="important-tasks-ul">
          {importantTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )
      }
    </div >
  );
}

export default Important;