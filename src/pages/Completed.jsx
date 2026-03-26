import "./Completed.css";
import { useTasksData } from "../context/TaskContext";
function Completed() {
  const { tasks,totalTasks, toggleStatus } = useTasksData();
  const completedTasks = tasks.filter((t) => t.completed);
  const remainingTasks = totalTasks === 0 ? 0 : totalTasks - completedTasks.length;
  const percent = totalTasks === 0 ? 0 : Math.round((completedTasks.length / totalTasks) * 100);

  return (
    <div className="completed-page">
      <div className="completed-header">
        <h1>Completed</h1>
        <p className="stats-subtext">
          {completedTasks.length} tasks done · {percent}% completion rate
        </p>
      </div>

      {/* Completion Rate Card */}
      <div className="stats-card">
        <div className="stats-info">
          <span className="stats-label">Completion Rate</span>
          <span className="stats-number">{percent}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
        </div>
        <div className="stats-footer">
          <span>{completedTasks.length} completed</span>
          <span>{remainingTasks} remaining</span>
        </div>
      </div>

      {/* Task List */}
      <div className="completed-list">
        {completedTasks.length === 0 ? (
          <div className="noTasksMessage">
            <span>✓</span>
            <p>No completed tasks yet. Complete a task to see it here.</p>
          </div>
        ) : (
          completedTasks.map((task) => (
            <div className="completed-item-card" key={task.id}>
              <div className="item-left">
                <div className="custom-checkbox checked">
                   <span className="check-icon">✓</span>
                </div>
                <div className="item-info">
                  <h4 className="completed-title">{task.title}</h4>
                  <div className="item-tags">
                    <span className={`tag-category ${task.category.toLowerCase()}`}>
                      {task.category}
                    </span>
                    <span className={`tag-priority ${task.priority}`}>
                      • {task.priority.substring(0, 3)}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                className="undo-btn" 
                onClick={() => toggleStatus(task.id)}
              >
                Undo
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Completed;