function TaskStats({ task }) {
    return (
      <div>
        <h2>Task Stats</h2>
        <p>This task has {task.completed ? "been completed" : "not been completed yet"}.</p>
        <p>Task title length: {task.title.length} characters</p>
      </div>
    )
  }
  
  export default TaskStats;