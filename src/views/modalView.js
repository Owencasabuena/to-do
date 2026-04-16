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

export function renderProjectDeleteConfirm(project, onDelete) {
    const dialog = document.createElement('dialog');
    dialog.classList.add('modal', 'modal--delete');

    dialog.innerHTML = `
        <div class="modal__content">
            <h3>Delete Project?</h3>
            <p>Are you sure you want to delete "${project.getName()}"? This cannot be undone.</p>
            <div class="modal__actions">
                <button id="cancelDelete" class="btn--secondary">Cancel</button>
                <button id="confirmDelete" class="btn--danger">Delete</button>
            </div>
        </div>
    `;

    document.body.append(dialog);
    dialog.showModal();

    // The Logic
    dialog.querySelector('#cancelDelete').onclick = () => dialog.close();
    
    dialog.querySelector('#confirmDelete').onclick = () => {
        onDelete(); // Trigger the actual deletion logic from your controller
        dialog.close();
    };

    dialog.addEventListener('close', () => dialog.remove());
}

export function renderTaskDeleteConfirm() {

}

export function renderTaskEditForm() {

}

export function renderAddTaskForm() {
    
}