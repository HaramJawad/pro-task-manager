import React from 'react'
import { useTasksData } from "../context/TaskContext";
import "./PriorityBreakdown.css"
function PriorityBreakdown({priorityHeading}) {
    const { priorities} = useTasksData();
    return (
        <div className="card priority-breakdown">
            <h3 className="heading">{priorityHeading}</h3>
            <div className="priority-list">
                {priorities.map((p) => {
                    const labelColor= 
                    p.label==="High" ? "highLabel" :
                p.label==="Medium" ? "mediumLabel":
                p.label==="Low" ? "lowLabel" : ""
                return (
                    <div className="priority-item" key={p.label}>
                        <div className="priority-info">
                            <span className={`priority-label ${labelColor}`}>{p.label}</span>
                            <span className="priority-count">{p.count}</span>
                        </div>
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{
                                    width: `${p.width}%`,
                                    backgroundColor: p.color,
                                    boxShadow: `0 0 10px ${p.color}44` // Subtle glow
                                }}
                            ></div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default PriorityBreakdown