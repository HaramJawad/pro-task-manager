import React from 'react'
import AddTask from "../components/AddTask"
import { useTasksData } from "../context/TaskContext";
import './NewTask.css'
function NewTask() {
  const { tasks,showAddTask, toggleNewTaskButton  } = useTasksData();
  const completed = tasks.filter(t => !t.completed).length;
  return (
   <div>
     <div className="newTaskContainer">
      <div className="heading">
        <h1>My Tasks</h1>
        <span>{completed} tasks remaining</span>
      </div>
      <div className="button">
        <button onClick={toggleNewTaskButton}>
          {showAddTask ? '✕ Close' : '+ New Task'} {/* Conditionally change button text based on the state */}
        </button>
      </div>
      </div>
      {/* Conditionally render the AddTask component using the logical && operator */}
      {showAddTask && <AddTask/>}
    </div>
  )
}

export default NewTask