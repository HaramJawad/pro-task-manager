import { useState } from 'react'
import "./Tasks.css"
import { useTasksData } from "../context/TaskContext";
import NewTask from "../components/NewTask"
import ShowTasks from "../components/ShowTasks"
import TaskCategoryFilter from "../components/TaskCategoryFilter"
import TaskSearchFilter from "../components/TaskSearchFilter"
function Tasks()
 {
  const { tasks} = useTasksData(); // using data from context
     // state for showing tasks based on filter
  const [selectedCategory, setSelectedCategory] = useState('All')
  // state for search by title
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');    // status: All / Completed / Incomplete
  //  Filter tasks
  const filteredTasks = [...tasks]
    .sort((a, b) => b.isImportant - a.isImportant)
    .filter(task => selectedCategory === 'All' || task.category === selectedCategory)
    .filter(task => statusFilter === 'All' || (statusFilter === 'Completed' ? task.completed : !task.completed))
    .filter(task => task.title.toLowerCase().includes(searchText.toLowerCase())) || [];
  return (
    <>
      <div className="tasks-container"> 
        <NewTask/>  {/*component */}
        <TaskSearchFilter status={statusFilter} setStatus={setStatusFilter} search={searchText} setSearch={setSearchText} />
        <TaskCategoryFilter // Filter tasks based on selected category
          onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        {/* showing all tasks */}
        <ShowTasks allTasks={filteredTasks} /> 
      </div> 
    </>
  )
}

export default Tasks