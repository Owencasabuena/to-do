import { ProjectFactory } from './models/project.js'

let projects = [];

export function addProject(name) {
    const project = ProjectFactory(name);
    projects.push(project);
}

export function deleteProject(idToRemove) {
    let projectToDelete = getProjectById(idToRemove);
    if(!projectToDelete) return;
    projects = projects.filter((project) => project.id !== idToRemove);
}

export function editProject(idToEdit, newName) {
    let projectToEdit = getProjectById(idToEdit);
    if(!projectToEdit) return;
    projectToEdit.rename(newName);
}

export function getProjects() {
    return projects;
}

function getProjectById(id) {
    let project = projects.find((project) => project.id === id);
    return project;
}