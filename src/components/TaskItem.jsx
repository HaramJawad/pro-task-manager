import { Link } from "react-router-dom";
import { useTasksData } from "../context/TaskContext";
import "./TaskItem.css"

function TaskItem({ task }) {
  const { handleDelete, toggleStatus, toggleImportant } = useTasksData();

  return (
    <li className="show-task-list">
      <div className="taskListContainer">
        <div className="taskListInformationContainer">
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleStatus(task.id)} 
          />
          <Link to={`/tasks/${task.id}`} className="task-link-wrapper">
            <div className="taskInformation">
              <h4 className="task-title">{task.title}</h4>
              <div className="task-informations">
                <span className={`task-category ${task.category.toLowerCase()}-theme`}>
                  {task.category}
                </span>
                <span className={`task-priority ${task.priority.toLowerCase()}-priority`}>
                  • {task.priority}
                </span>
                <span className="task-deadline">📅 {task.deadline}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="taskOperations">
          <button onClick={() => toggleImportant(task.id)}>
            {task.isImportant ? "⭐" : "☆"}
          </button>
          <button onClick={() => handleDelete(task.id)}>✕</button>
        </div>
      </div>
    </li>
  );
}
export default TaskItem;