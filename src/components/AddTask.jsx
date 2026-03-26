import "./AddTask.css"
import { useState } from 'react'
import { useTasksData } from "../context/TaskContext";
function AddTask() {
    const { categories, priorityLevels, showAddTask, addTaskHandler, toggleNewTaskButton } = useTasksData();
    // Current date for 'min'
    const today = new Date().toISOString().split('T')[0];

    // 1 year from now for 'max'
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    const maxDate = nextYear.toISOString().split('T')[0];
    const [formData, setFormData] = useState({
        title: '',
        deadline: '',
        priority: '',
        category: '',
        description: '',
    });
    // state for error message
    const [error, setError] = useState('')
    // state for cancelling
    const [cancel, setCancel] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();

        const isFormValid = Object.values(formData)
            .every(value => value.trim() !== '');

        if (isFormValid) {
            // function call
            addTaskHandler(
                formData.title,
                formData.deadline,
                formData.priority,
                formData.category,
                formData.description
            );

            setFormData({
                title: '',
                deadline: '',
                priority: '',
                category: '',
                description: ''
            });

            setError('');
        } else {
            setError("Please fill all the sections");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleCancel = () => {
        setCancel(true)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>AddNewTask</h4>
            <input
                type="text"
                placeholder="Task title *"
                value={formData.title}
                name="title"
                onChange={handleChange}
            />
            <div className="form-row">
                <input
                    type="date"
                    name="deadline"
                    className="deadline formInput"
                    value={formData.deadline}
                    onChange={handleChange}
                    min={today}    
                    max={maxDate}
                />
                <select
                    value={formData.priority}
                    name="priority"
                    className="priority formInput"
                    onChange={handleChange}
                >
                    <option value="" disabled>Priority *</option>
                    {priorityLevels.map((level) => (
                        <option key={level} value={level}>
                            {level}
                        </option>
                    ))}
                </select>
            </div>
            <select
                name="category"
                value={formData.category}
                className="category"
                onChange={handleChange}>
                <option value="" disabled>Category *</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <textarea
                placeholder="Description *"
                value={formData.description}
                className="description"
                name="description"
                rows="6"
                cols="50"
                onChange={handleChange}
            />
            <div className="form-actions">
            <button type="submit">Add Task</button>
            <button onClick={toggleNewTaskButton}
                className="cancel-button"
            >
                {showAddTask ? 'Cancel' : ''}
            </button>
            </div>
            {error && <p className="error-message">{error}</p>}
        </form>
    )
}
export default AddTask