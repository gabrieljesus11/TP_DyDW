document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu-list');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

menuToggle.addEventListener('click', function() {
    menuList.classList.toggle('active');
    if (menuList.classList.contains('active')) {
        menuList.style.display = 'flex';
    } else {
        menuList.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        menuList.style.display = 'flex';
    } else if (!menuList.classList.contains('active')) {
        menuList.style.display = 'none';  
    }
});
