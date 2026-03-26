import { useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTasksData } from "../context/TaskContext";
import "./TaskDetail.css"
function TaskDetail() {
  const { tasks, categories, priorityLevels, handleDelete, handleUpdate, toggleImportant } = useTasksData();
  const { id } = useParams(); // read task id from URL
  const navigate = useNavigate();
  const task = tasks.find(t => String(t.id) === String(id));

  // editing states
  const [editing, setEditing] = useState(false);
  const [editTask, setEditTask] = useState({
    title: "",
    deadline: "",
    priority: "",
    category: "",
    description: "",
  });

  if (!task) {
    return <h2>Task not found!</h2>
  }
  // changing the edit states
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    handleUpdate(
      task.id,
      editTask.title,
      editTask.deadline,
      editTask.priority,
      editTask.category,
      editTask.description
    );
    setEditing(false);
  };

  const startEdit = () => {
    setEditTask({
      title: task.title,
      deadline: task.deadline,
      priority: task.priority,
      category: task.category,
      description: task.description,
    });
    setEditing(true);
  };

  return (
    <div className="taskDetailsContainer">
      <Link to="/tasks"> <span className="backToTasksPage">←Back to Tasks</span> </Link>

      {/* Action Buttons */}
      {!editing ? (
        <div className="task-detail-card">
          {/* Title & Important */}
          <div className="task-status-controls">
            <span className={`task-completion-status ${task.completed ? "status-completed" : "status-inprogress"}`}>{task.completed ? "✓Completed" : "◷In Progress"}</span>
            <button className="task-important-status"
              onClick={() => toggleImportant(task.id)}
            >
              {task.isImportant ? "⭐" : "☆"}
            </button>
          </div>
          <h1 className="taskTitle">{task.title}</h1>
          <div className="task-information">
            <span className={`task-category
                       ${task.category === "Work" ? "work" : task.category === "Personal" ? "personal" : task.category === "Study" ? "study" :
                task.category === "Health" ? "health" :
                  task.category === "Shopping" ? "shopping" :
                    task.category === "Home" ? "home" :
                      task.category === "Finance" ? "finance" :
                        task.category === "Other" ? "other" :
                          task.category === "All" ? "all" :
                            "default" // This final "default" is required to prevent errors!
              }`}>{task.category}</span>
            <span className={`task-priority
                        ${task.priority === "low" ? "low" : task.priority === "medium" ? "medium" :
                task.priority === "high" ? "high" : "default-priority"}`}>●{task.priority}</span>
            <span className="task-dueDate">📅 {task.deadline}</span>
          </div>
          <div className="task-description-container">
            <h5>DESCRIPTION</h5>
            <span>{task.description}</span>
          </div>
          <span className="creationDate">Created: {task.createdAt}</span>
          <div className="task-actions">
            <button className="edit-btn" onClick={startEdit}>
              Edit Task
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                handleDelete(task.id);
                navigate("/"); // go back to dashboard after deletion
              }}
            >
              Delete
            </button>
          </div>
        </div>

      ) : (
        <div className="edit-panel">
          <h4>Edit Task</h4>
          <input
            type="text"
            name="title"
            value={editTask.title}
            onChange={handleChange}
          />
          <div className="form-row">
            <input
              type="date"
              name="deadline"
              className="deadline formInput"
              value={editTask.deadline}
              onChange={handleChange}
            />
            <select
              name="priority"
              className="priority formInput"
              value={editTask.priority}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Select Priority
              </option>
              {priorityLevels.map(
                (priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                )
              )}
            </select>
          </div>
          <select
            name="category"
            className="category"
            value={editTask.category}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            {categories.map(
              (category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
          <textarea
            name="description"
            value={editTask.description}
            className="description"
            onChange={handleChange}
            rows="4"
          />
          <div className="edit-actions">
            <button className="saveChanges-btn" onClick={saveChanges}>Save Changes</button>
            <button className="cancel-btn" onClick={() => setEditing(false)} >Cancel</button>
          </div>
        </div>
      )}
    </div>
  )


}
export default TaskDetail