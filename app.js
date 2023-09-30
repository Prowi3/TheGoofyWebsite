const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.Contact, .About');
hiddenElements.forEach((el) => observer.observe(el));


const burgerMenu = document.querySelector('.burger-menu');
const sideMenu = document.getElementById('sideMenu');

function toggleSideMenu() {
    sideMenu.classList.toggle('active');
}

burgerMenu.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleSideMenu();
});

const menuLinks = document.querySelectorAll('.side-menu a');
menuLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        toggleSideMenu();
    });
});

document.addEventListener('click', function (event) {
    if (!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        sideMenu.classList.remove('active');
    }
});

window.addEventListener('scroll', function () {
    if (sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
    }
});
