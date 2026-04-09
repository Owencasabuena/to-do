import { addProject, deleteProject, editProject, getProjects, setActiveProject, getActiveProject } from "../controller.js";

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

        if(project.id === getActiveProject()) {
            listItem.classList.add('sidebar__item-container--active');
        }

        const projectItem = document.createElement('button');
        projectItem.classList.add('sidebar__item');
        projectItem.textContent = project.getName();
        projectItem.addEventListener('click', () => {
            if (project.id === getActiveProject()) return;
            setActiveProject(project.id);
            renderProjects(getProjects());
            //renderTasks();
        });

        const projectItemEditBtn = document.createElement('button');
        projectItemEditBtn.classList.add('sidebar__item-edit-btn')
        projectItemEditBtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical fa-2xs"></i>';
        projectItemEditBtn.addEventListener('click', (e) => {
            e.stopPropagation();            
            let menu = document.querySelector('.sidebar__menu');
            if(menu) {
                menu.remove();
            }
            listItem.classList.add('sidebar__item-container--menu-open');
            menu = document.createElement('div');
            menu.classList.add('sidebar__menu');
            const rect = projectItemEditBtn.getBoundingClientRect();
            menu.style.top = `${rect.bottom}px`;
            menu.style.left = `${rect.left}px`;

            const backdrop = document.createElement('div');
            backdrop.classList.add('sidebar__menu-backdrop');
            backdrop.addEventListener('click', closeAllMenus);

            const renameBtn = document.createElement('button');
            renameBtn.classList.add('sidebar__menu-options');
            renameBtn.innerHTML = '<i class="fa-solid fa-pencil fa-2xs"></i> Rename';
            renameBtn.addEventListener('click', () => {
                // let newName = open modal for rename
                // run editProject(project.id, newName);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('sidebar__menu-options');
            deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can fa-2xs"></i> Delete';
            deleteBtn.addEventListener('click', () => {
                // open confirmation modal for delete
                // if true run deleteProject(project.id);
            });

            menu.append(renameBtn, deleteBtn);
            document.body.append(menu, backdrop);
        });

        listItem.append(projectItem, projectItemEditBtn);
        projectList.append(listItem);
    });

    sidebar.append(title, addBtn, projectList);
}

function closeAllMenus() {
    const menu = document.querySelector('.sidebar__menu');
    const backdrop = document.querySelector('.sidebar__menu-backdrop');
    const wasAnythingOpen = !!(menu || backdrop);

    if (menu) menu.remove();
    if (backdrop) backdrop.remove();

    document.querySelectorAll('.sidebar__item-container--menu-open').forEach(item => {
        item.classList.remove('sidebar__item-container--menu-open');
    });

    return wasAnythingOpen;
}