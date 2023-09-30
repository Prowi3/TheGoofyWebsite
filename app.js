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

// Function to toggle the side menu
function toggleSideMenu() {
    sideMenu.classList.toggle('active');
}

burgerMenu.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the click from reaching the document
    toggleSideMenu();
});

// Close the side menu when a menu item is clicked
const menuLinks = document.querySelectorAll('.side-menu a');
menuLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        toggleSideMenu();
    });
});

// Close the side menu when clicking outside of it
document.addEventListener('click', function (event) {
    if (!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        sideMenu.classList.remove('active');
    }
});

// Close the side menu when scrolling the page
window.addEventListener('scroll', function () {
    if (sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
    }
});
