import "./ShowTasks.css"
import TaskItem from "../components/TaskItem";
function ShowTasks({ allTasks }) {
  return (<>
    {/*  Check if tasks array is empty */}
    {allTasks.length === 0 ? (
      <div className="noTasksMessage">
        <span>☰</span>
        <p>No tasks found</p>
      </div>
    ) : (
      <ul className="show-tasks-ul">
        {/*  Map through tasks if they exist */}
        {allTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    )}

  </>
  )

}
export default ShowTasks