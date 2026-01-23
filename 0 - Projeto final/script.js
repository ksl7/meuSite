const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const menuCloseButton = document.getElementById('menuCloseButton');
const main = document.querySelector('main')
const divHTML = document.getElementById('divHTML')
const body = document.body;

function openMenu() {
    menu.classList.add('open'); 
    main.classList.add('shift');
    divHTML.classList.add('blurred')
    body.classList.add('noScroll');
}

function closeMenu() {
    menu.classList.remove('open'); 
    main.classList.remove('shift');
    divHTML.classList.remove('blurred')
    body.classList.remove('noScroll'); 
}

menuButton.addEventListener('click', openMenu);

menuCloseButton.addEventListener ('click', closeMenu);

document.addEventListener ('keydown', (event) => {
    if (event.key === 'Escape') {

        closeMenu();
    } 
});

document.addEventListener ('click', (event) => {
    if (menu.classList.contains('open') && !menu.contains(event.target) && !menuButton.contains(event.target)) {

        closeMenu();
    }
});