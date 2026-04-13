import { TaskFactory } from "../models/task.js";
import { ProjectFactory } from "../models/project.js";

export function renderTasks(project) {
    const main = document.querySelector('#tasks-container');
    main.innerHTML = '';
    
    const title = document.createElement('h1');
    title.classList.add('main__title');
    title.textContent = project.getName();

    const taskList = document.createElement('ul');
    taskList.classList.add('main__task-list');
    project.getTasks().forEach((task) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('main__item-container');

        const taskName = document.createElement('h3');
        taskName.classList.add('main__task-name');
        taskName.textContent = task.title;
    
        const editTaskBtn = document.createElement('button');
        editTaskBtn.classList.add('main__task-edit-btn');
        editTaskBtn.innerHTML = '<i class="fa-regular fa-pen-to-square fa-2xs"></i>'
        editTaskBtn.addEventListener('click', () => {
            // run modal
            let newDetails = //todo
            project.editTask(task.id, newDetails);
            renderTasks(project);
        });
        
        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.classList.add('main__task-delete-btn');
        deleteTaskBtn.innerHTML = '<i class="fa-solid fa-trash fa-2xs"></i>';
        deleteTaskBtn.addEventListener('click', () => {
            // run modal
            project.deleteTask(task.id);
            renderTasks(project);
        });

        taskItem.append(taskName, editTaskBtn, deleteTaskBtn);
        taskList.append(taskItem);
    });

    const addTaskRow = document.createElement('li');
    addTaskRow.classList.add('main__add-task-container');

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('main__add-task-btn');
    addTaskBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i> Add Task';
    addTaskBtn.addEventListener('click', () => {
        // run renderAddTaskForm();
        renderTasks(project);
    });

    addTaskRow.append(addTaskBtn);
    taskList.append(addTaskRow);

    main.append(title, taskList);
}