import { createContext, useContext, useState } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";

//  create Context
const TaskContext = createContext();

//  create Provider that supply data to app 
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = UseLocalStorage("tasks", []);
    const [showAddTask, setShowAddTask] = useState(false); // State to manage the visibility of the AddTask component

    const categories = ['All', 'Work', 'Personal', 'Study', 'Health', 'Shopping', 'Home', 'Finance', 'Other'];
    const priorityLevels = ['low', 'medium', 'high'];

    // FUNCTIONS

      // function for adding the tasks
  const addTaskHandler = (taskTitle, taskDueDate, taskPriority, taskCategory, taskDescription) => {
    // create a new task object
    const newTask = {
      id: Math.random().toString(), // Simple ID generation
      title: taskTitle,
      completed: false,
      isImportant: false,
      priority: null || taskPriority,
      deadline: null || taskDueDate,
      category: null || taskCategory,
      description: '' || taskDescription,
      createdAt: new Date().toLocaleString(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  // function for deleting the tasks
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }
 // function for toggling the task status
   const toggleStatus = (id) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
      setTasks(updatedTasks);
    }
// function for toggle important
const toggleImportant = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isImportant: !task.isImportant
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
 

// function for updating the tasks
const handleUpdate = (id, newText, newDeadline, newPriority, newCategory, newDescription) => {
    const updatedTodos = tasks.map(task => {
      if (task.id === id) {
        return { ...task, title: newText, deadline: newDeadline, priority: newPriority, category: newCategory, description: newDescription };
      }
      // Otherwise, return the original todo object
      return task;
    });
    setTasks(updatedTodos); // Update the state with the new array
  };

const totalTasks=tasks.length;
const completedTasks = tasks.filter(t => t.completed).length;
const pendingTasks = totalTasks - completedTasks;
const importantTasks = tasks.filter(t => t.isImportant).length;
    const getPriorityData = (level) => tasks.filter(t => t.priority === level).length;
 // Calculate percentages for the bar width (handle division by zero if no tasks)
    const getPercentage = (count) => (totalTasks === 0 ? 0 : (count / totalTasks) * 100);
  // Count each priority type
    const highCount = getPriorityData("high");
    const mediumCount = getPriorityData("medium");
    const lowCount = getPriorityData("low");

    const priorities = [
        { label: "High", count: highCount, color: "#f87171", width: getPercentage(highCount) },
        { label: "Medium", count: mediumCount, color: "#fb923c", width: getPercentage(mediumCount) },
        { label: "Low", count: lowCount, color: "#34d399", width: getPercentage(lowCount) }
    ];

  // Function to handle the button click and toggle the state

  const toggleNewTaskButton = () => {
    setShowAddTask(!showAddTask);
  };
    // all the data other components want
    const value = {
        tasks,
        setTasks,
        categories,
        priorityLevels,
        showAddTask,
        setShowAddTask,
        addTaskHandler,
       handleDelete,
        toggleStatus,
        toggleImportant,
        handleUpdate,
        priorities,
        totalTasks,
        toggleNewTaskButton,
        completedTasks,
        pendingTasks,
        importantTasks
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

// Custom Hook (easy to use )
export const useTasksData = () => useContext(TaskContext);