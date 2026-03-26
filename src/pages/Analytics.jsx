import "./Analytics.css";
import { useTasksData } from "../context/TaskContext";
import { calculateCategoryCount } from '../utils/taskUtils'
import { calculatePriorityCount } from '../utils/taskUtils'
import { calculateProgressBar } from '../utils/taskUtils'
function Analytics() {
    // Extracting global data and functions from Context
    const { tasks, totalTasks, categories, completedTasks, pendingTasks, importantTasks } = useTasksData();
    const categoryCount = calculateCategoryCount(tasks, categories)
    const priorityCount = calculatePriorityCount(tasks)
    const getWidth = calculateProgressBar(categoryCount, priorityCount)
    return (
        <div className="analytics-page">
            <div className="analytics-header">
                <h1>Analytics</h1>
                <p className="stats-subtext">Visual breakdown of your tasks</p>
            </div>

            <div className="analytics-content">
                {/* Category Card */}
                <div className="stat-card">
                    <h3>Tasks by Category</h3>
                    <div className="stat-list">
                        {totalTasks === 0 ? <p className="NoCategories">No data yet</p> :
                            categories.map(cat => (
                                <div className="bar-stat-item" key={cat}>
                                    <div className="label-row">
                                        <span className={`name theme-${cat.toLowerCase()}`}>{cat}</span>
                                        <span className="count">{categoryCount[cat]}</span>
                                    </div>
                                    <div className="bar-bg">
                                        <div
                                            className={`bar-fill theme-${cat.toLowerCase()}`}
                                            style={{ width: `${getWidth(categoryCount[cat])}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Priority Card */}
                <div className="stat-card">
                    <h3>Tasks by Priority</h3>
                    <div className="stat-list">
                        {Object.entries(priorityCount).map(([level, count]) => (
                            <div className="bar-stat-item" key={level}>
                                <div className="label-row">
                                    <span className={`name theme-${level.toLowerCase()}`}>{level}</span>
                                    <span className="count">{count}</span>
                                </div>
                                <div className="bar-bg">
                                    <div
                                        className={`bar-fill theme-${level.toLowerCase()}`}
                                        style={{ width: `${getWidth(count)}%` }}

                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Quick Stats Boxes */}
                    <div className="priority-boxes">
                        <div className="p-box high">
                            <span className="p-num">{priorityCount.High}</span>
                            <span className="p-label">HIGH</span>
                        </div>
                        <div className="p-box med">
                            <span className="p-num">{priorityCount.Medium}</span>
                            <span className="p-label">MEDIUM</span>
                        </div>
                        <div className="p-box low">
                            <span className="p-num">{priorityCount.Low}</span>
                            <span className="p-label">LOW</span>
                        </div>
                    </div>
                </div>

                {/* Overview Card */}
                <div className="stat-card overview-card">
                    <h3>Completion Overview</h3>
                    <div className="overview-grid">
                        <div className="ov-item total">
                            <span className="ov-val">{totalTasks}</span>
                            <span className="ov-lbl">TOTAL</span>
                        </div>
                        <div className="ov-divider"></div>
                        <div className="ov-item done">
                            <span className="ov-val">{completedTasks}</span>
                            <span className="ov-lbl">DONE</span>
                        </div>
                        <div className="ov-divider"></div>
                        <div className="ov-item pending">
                            <span className="ov-val">{pendingTasks}</span>
                            <span className="ov-lbl">PENDING</span>
                        </div>
                        <div className="ov-divider"></div>
                        <div className="ov-item important">
                            <span className="ov-val">{importantTasks}</span>
                            <span className="ov-lbl">IMPORTANT</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
