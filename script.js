
let menu = document.getElementById('menu');
let nav = document.getElementById('nav');

menu.onclick = () => {
    menu.classList.toggle("ri-menu-line")
    menu.classList.toggle("ri-close-line");
    nav.classList.toggle('active');
};
