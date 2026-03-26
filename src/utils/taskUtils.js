// APP LOGICS WITHOUT NEED OF STATES ///

export const calculateCompletionRate = (tasks) => {
    if (!tasks || tasks.length === 0) return 0;

    const completedTasks = tasks.filter(t => t.completed);
    return Math.round((completedTasks.length / tasks.length) * 100);
};
// // Analytics logic 
// export const calculateCategoryCount = (tasks,categories)=>
// {
//      // Category Logic
//     //  Create an empty object to store counts for each category
//     const categoryCount = {};
//     //  Initialize every category with 0 (e.g., { Work: 0, Personal: 0 })
//     categories.forEach(cat => categoryCount[cat] = 0);
//     // Loop through all tasks and increment the count for that task's category
//     tasks.forEach(task => {
//         if (categoryCount.hasOwnProperty(task.category)) categoryCount[task.category]++;
//     });

// };


// export const calculatePriorityCount=(tasks)=>
// {

//     // Priority Logic
//     // Initialize priority counts manually
//     const priorityCount = { High: 0, Medium: 0, Low: 0 };
//     tasks.forEach(task => {
//         if (task.priority) {
//             // Convert 'low' to 'Low' so it matches the object keys above
//             const p = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
//             // Increment the count if the priority matches our object
//             if (priorityCount.hasOwnProperty(p)) priorityCount[p]++;
//         }
//     });
// };


export const calculateCategoryCount = (tasks, categories) => {
    const counts = {};
    categories.forEach(cat => counts[cat] = 0);
    tasks.forEach(task => {
        if (counts.hasOwnProperty(task.category)) counts[task.category]++;
    });
    return counts;
};

export const calculatePriorityCount = (tasks) => {
    const counts = { High: 0, Medium: 0, Low: 0 };
    tasks.forEach(task => {
        if (task.priority) {
            const p = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
            if (counts.hasOwnProperty(p)) counts[p]++;
        }
    });
    return counts;
}; 
// Progress bar logic 
export const calculateProgressBar = (categoryCount, priorityCount) => {
    // first check data is available or not
    if (!categoryCount || !priorityCount) return () => 0;

    const maxCount = Math.max(
        ...Object.values(categoryCount), 
        ...Object.values(priorityCount), 
        1
    );

    
    return (count) => (count / maxCount) * 100;
};