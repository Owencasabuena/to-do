import { renderLayout } from "./views/layout.js";
import { addProject, getProjects } from "./controller.js";
import { renderProjects } from "./views/projectsView.js";
import { renderHeader } from "./views/headerView.js";
import "./style.css";
import "./reset.css"

function init() {
    renderLayout();

    if (getProjects().length === 0) {
        addProject("Inbox");
        addProject("Personal");
    }

    console.log("Projects currently in the Brain:", getProjects());

    renderHeader();
    renderProjects(getProjects());
}

init();