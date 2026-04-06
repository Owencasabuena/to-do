export function ProjectFactory(name) {
    const id = crypto.randomUUID();
    let tasks = [];
    
    function addTask(task) {
        tasks.push(task);
    }

    function deleteTask(idToDelete) {
        let taskToDelete = getTaskById(idToDelete);
        if(!taskToDelete) return;
        tasks = tasks.filter((task) => task.id !== idToDelete);
    }

    function editTask(idToEdit, newDetails) {
        let taskToEdit = getTaskById(idToEdit);
        if(!taskToEdit) return;
        taskToEdit.updateDetails(newDetails);
    }

    function getName() {
        return name;
    }

    function rename(newName) {
        name = newName;
    }

    function getTasks() {
        return tasks
    }

    function getTaskById(id) {
        let task = tasks.find((task) => task.id === id);
        return task;
    }
    return {
        id, 
        addTask,
        deleteTask,
        editTask,
        getName,
        rename,
        getTasks,
        getTaskById
    }
}