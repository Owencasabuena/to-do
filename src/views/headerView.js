export function renderHeader() {
    const header = document.querySelector('header');

    const logo = document.createElement('h1');
    logo.classList.add('header__logo');
    logo.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Do-It';

    header.append(logo);
}