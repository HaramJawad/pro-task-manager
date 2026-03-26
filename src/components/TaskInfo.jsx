function TaskInfo({ task }) {
    return (
      <div>
        <h2>Task Info</h2>
        <p><strong>ID:</strong> {task.id}</p>
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Status:</strong> {task.completed ? "Completed" : "Incomplete"}</p>
      </div>
    )
  }
  
  export default TaskInfo;