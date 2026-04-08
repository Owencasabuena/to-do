import { addProject, deleteProject, editProject, getProjects } from "../controller.js";

export function renderProjects(projects) {
    const sidebar = document.querySelector('#sidebar-container');
    sidebar.innerHTML = '';

    const title = document.createElement('h1');
    title.classList.add('sidebar__title');
    title.textContent = 'Pendings'

    const addBtn = document.createElement('button');
    addBtn.classList.add('sidebar__add-btn');
    addBtn.innerHTML = '<i class="fa-solid fa-plus fa-lg"></i>';
    addBtn.addEventListener('click', () => {
        let name = window.prompt("Enter Project Name");
        addProject(name);
        renderProjects(getProjects());
    });

    const projectList = document.createElement('ul');
    projectList.classList.add('sidebar__list');
    projects.forEach((project) => {
        const listItem = document.createElement('li');
        listItem.classList.add('sidebar__item-container');

        const projectItem = document.createElement('button');
        projectItem.classList.add('sidebar__item');
        projectItem.textContent = project.getName();

        const projectItemEditBtn = document.createElement('button');
        projectItemEditBtn.classList.add('sidebar__item-edit-btn')
        projectItemEditBtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

        listItem.append(projectItem, projectItemEditBtn);
        projectList.append(listItem);
    });

    sidebar.append(title, addBtn, projectList);
}