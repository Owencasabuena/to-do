export function renderHeader() {
    const header = document.querySelector('header');

    const logo = document.createElement('h1');
    logo.classList.add('header__logo');
    logo.textContent = 'Do-It';

    header.append(logo);
}