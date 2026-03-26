import "./TaskSearchFilter.css"
function TaskSearchFilter({ status,setStatus, search, setSearch }) {
    return (
        <div className="taskSearchFilter">
            <div className="buttons">
            {['All', 'Completed', 'Incomplete'].map(s => (
                <button
                    key={s}
                    className={status === s ? 'active' : ''}
                    onClick={() => setStatus(s)}
                >
                    {s}
                </button>
            ))}
            </div>
            {/* Search Bar */}
            <input
                type="text"
                placeholder="🔍 Search tasks..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}
export default TaskSearchFilter;