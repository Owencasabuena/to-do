export function TaskFactory(title, description, dueDate, priority) {
    const id = crypto.randomUUID();
    let completed = false;

    function toggleComplete() {
        completed = !completed;
    }

    function updateDetails(newDetails) {
        if (!newDetails) return;

        title = newDetails.title ?? title;
        description = newDetails.description ?? description;
        dueDate = newDetails.dueDate ?? dueDate;
        priority = newDetails.priority ?? priority;
    } 

    return {
        id,
        title,
        description, 
        dueDate,
        priority,
        toggleComplete,
        updateDetails
    }
}