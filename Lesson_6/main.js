const menuButton = document.querySelector('#toggleMenuButton');
const sideMenu = document.querySelector('#element');

menuButton.addEventListener('click', toggleMenu)
    function toggleMenu() {
        sideMenu.classList.toggle('opened');
    }