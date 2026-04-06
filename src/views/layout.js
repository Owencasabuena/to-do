export function renderLayout() {
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    const sidebar = document.createElement('aside');
    const main = document.createElement('main');
    
    header.id = 'header';
    sidebar.id = 'sidebar-container';
    main.id = 'tasks-container';

    header.classList.add('header');
    sidebar.classList.add('sidebar');
    main.classList.add('main');

    content.append(header, sidebar, main);
}