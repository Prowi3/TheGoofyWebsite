const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const sideMenu = document.getElementById('sideMenu');

function toggleX() {
    bar1.style.transform = "rotate(38deg)";
    bar2.style.opacity = "0";
    bar2.style.opacity = "0";
    bar3.style.transform = "rotate(-38deg)";
    sideMenu.classList.add('active');
}

function resetBurger() {
    bar1.style.transform = "rotate(0deg)";
    bar2.style.opacity = "1";
    bar3.style.transform = "rotate(0deg)";
    sideMenu.classList.remove('active');
}

const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', function () {
    if (bar1.style.transform === "rotate(0deg)") {
        toggleX();
    } else {
        resetBurger();
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.Contact, .About');
hiddenElements.forEach((el) => observer.observe(el));

const menuLinks = document.querySelectorAll('.side-menu a');
menuLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        resetBurger();
    });
});

document.addEventListener('click', function (event) {
    if (!sideMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        resetBurger();
    }
});

window.addEventListener('scroll', function () {
    if (sideMenu.classList.contains('active')) {
        resetBurger()
    }
});

const aboutLink = document.querySelector('.side-menu a[href="#about"]');

aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 800 });
    }
});

const communityLink = document.querySelector('.side-menu a[href="#community"]');

communityLink.addEventListener('click', function (event) {
    event.preventDefault();
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 800 });
    }
});
