import { addProject, deleteProject, editProject, getProjects } from "../controller.js";

export function renderProjects(projects) {
    const sidebar = document.querySelector('#sidebar-container');
    sidebar.innerHTML = '';

    const title = document.createElement('h1');
    title.classList.add('sidebar__title');
    title.textContent = 'Pendings'

    const addBtn = document.createElement('button');
    addBtn.classList.add('sidebar__add-btn');
    addBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
    addBtn.addEventListener('click', () => {
        let name = window.prompt("Enter Project Name");
        addProject(name);
        renderProjects(getProjects());
    });

    const projectList = document.createElement('ul');
    projectList.classList.add('sidebar__list');

    projects.forEach((project) => {
        // TO-DO
    });

    sidebar.append(title, addBtn, projectList);
}