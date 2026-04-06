import { renderLayout } from "./views/layout.js";
import { addProject, getProjects } from "./controller.js";
import { renderProjects } from "./views/projectsView.js";
import "./style.css";

function init() {
    renderLayout();

    if (getProjects().length === 0) {
        addProject("Inbox");
        addProject("Personal");
    }

    console.log("Projects currently in the Brain:", getProjects());

    renderProjects(getProjects());
}

init();