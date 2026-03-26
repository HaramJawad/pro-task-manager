import './TaskCategoryFilter.css';
import { useTasksData } from "../context/TaskContext";
function TaskCategoryFilter({ onSelectCategory ,selectedCategory}) {
    const { categories } = useTasksData(); // from context
    return (<div className="category-filter">
        {categories.map((category) => (
            <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => onSelectCategory(category)}
            >
                {category}
            </button>
        ))}
    </div>
    );
}

export default TaskCategoryFilter;