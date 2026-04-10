import { TaskFactory } from "../models/task.js";
import { ProjectFactory } from "../models/project.js";

export function renderTasks(project) {
    const main = document.querySelector('#main');
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
            // run deleteTask(task.id)
            // run renderTask(project.id)
        });
        
        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.classList.add('main__task-delete-btn');
        deleteTaskBtn.innerHTML = '<i class="fa-solid fa-trash fa-2xs"></i>';
        deleteTaskBtn.addEventListener('click', () => {
            // run modal
            // run editTask(task.id, newDetails)
            // run renderTask(project.id)
        });

        taskItem.append(taskName, editTaskBtn, deleteTaskBtn);
        taskList.append(taskName);
    });

    main.append(title, taskList);
}