
import "./Dashboard.css"
import { Link } from "react-router-dom"
import { useTasksData } from "../context/TaskContext";
import Greeting from "../components/Greeting"
import CurrentDate from "../components/CurrentDate"
import { calculateCompletionRate } from '../utils/taskUtils'
import CircularProgress from "../components/CircularProgress"
import PriorityBreakdown from "../components/PriorityBreakdown"

function Dashboard() {
    const { tasks, totalTasks, completedTasks, pendingTasks, importantTasks } = useTasksData();
    const percent = calculateCompletionRate(tasks);
    const recentTasks = [...tasks].slice(-5).reverse();
    const dateText = "Here's your overview"
    const priorityHeading = "Priority Breakdown"

    // Helper function for category class
    const getCategoryClass = (category) => {
        const categoryMap = {
            "Work": "work-theme",
            "Personal": "personal-theme",
            "Study": "study-theme",
            "Health": "health-theme",
            "Shopping": "shopping-theme",
            "Home": "home-theme",
            "Finance": "finance-theme",
            "Other": "other-theme",
            "All": "all-theme"
        };
        return categoryMap[category] || "default-theme";
    };

    return (
        <div className="dashboard-container">
            <Greeting />
            <h1 className="main-heading">Dashboard</h1>
            <CurrentDate dateText={dateText} />

            <div className="backlog">
                <div className="backlogChild totalTasksDiv">
                    <span className="backlog-emoji totalTask-emoji">☰</span>
                    <h1 className="totalTask-count">{totalTasks}</h1>
                    <span className="backlog-text totalTasks-text">TOTAL TASKS</span>
                </div>
                <div className="backlogChild completedTasksDiv">
                    <span className="backlog-emoji completed-emoji">✓</span>
                    <h1 className="completedTask-count">{completedTasks}</h1>
                    <span className="backlog-text completed-text">COMPLETED</span>
                </div>
                <div className="backlogChild pendingTasksDiv">
                    <span className="backlog-emoji pending-emoji">◷</span>
                    <h1 className="pendingTask-count">{pendingTasks}</h1>
                    <span className="backlog-text pending-text">PENDING</span>
                </div>
                <div className="backlogChild importantTasksDiv">
                    <span className="backlog-emoji important-emoji">★</span>
                    <h1 className="importantTask-count">{importantTasks}</h1>
                    <span className="backlog-text important-text">IMPORTANT</span>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="card overall-progress">
                    <h3 className="heading">Overall Progress</h3>
                    <CircularProgress percentage={percent} />
                    <span className="completed">{completedTasks} completed <span className="total"> / {totalTasks} total</span></span>
                </div>

                <div className="card recent-tasks">
                    <div className="heading-section">
                        <h3 className="heading">Recent Tasks</h3>
                        <Link to="/tasks"><span className="button">View all →</span></Link>
                    </div>
                    {recentTasks.length === 0 ? (
                        <p className="noRecentTask">No tasks added yet.</p>
                    ) : (
                        <ul className="recentTasksContainer">
                            {recentTasks.map((task) => {
                                const statusClass = task.completed ? "completed-bullet" : "pending-bullet";
                                const categoryClass = getCategoryClass(task.category);
                                return (
                                    <Link to={`/tasks/${task.id}`} key={task.id} className="task-link">
                                        <li className={`recentTaskList ${statusClass} ${categoryClass}`}>
                                            <h4 className="title">{task.title}</h4>
                                            <span className="category">{task.category}</span>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    )}
                </div>

                <PriorityBreakdown priorityHeading={priorityHeading} />
            </div>
        </div>
    )
}

export default Dashboard