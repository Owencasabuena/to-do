export function renderProjectRenameForm(project) {
    const dialog = document.createElement('dialog');
    dialog.classList.add('project-modal');
    

    dialog.append(title,)
    document.body.append(dialog);

    dialog.showModal();

    cancelBtn.addEventListener('click', () => {
        dialog.close();
    });

    saveBtn.addEventListener('submit', (e) => {
        // extract form 
        // trim it then validate
        // if error show message
        // if not onSave
    });

    // whattt

    dialog.addEventListener('close', () => dialog.remove());
}

export function renderProjectDeleteConfirm() {

}

export function renderTaskDeleteConfirm() {

}

export function renderTaskEditForm() {

}

export function renderAddTaskForm() {
    
}