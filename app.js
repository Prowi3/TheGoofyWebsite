const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const sideMenu = document.getElementById('sideMenu');
const burgerMenu = document.querySelector('.burger-menu');


function toggleX() {
    bar1.style.transform = "rotate(38deg)";
    bar2.style.opacity = "0";
    bar2.style.transform = "translate(-20px)";
    bar3.style.transform = "rotate(-38deg)";
    sideMenu.classList.add('active');
}


function resetBurger() {
    bar1.style.transform = "rotate(0deg)";
    bar2.style.opacity = "1";
    bar2.style.transform = "translate(0)";
    bar3.style.transform = "rotate(0deg)";
    sideMenu.classList.remove('active');
}


burgerMenu.addEventListener('click', function () {
    if (bar1.style.transform === "rotate(0deg)") {
        toggleX();
    } else {
        resetBurger();
    }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.5
});


const hiddenElements = document.querySelectorAll('.Contact, .About');
hiddenElements.forEach((el) => observer.observe(el));


const menuLinks = document.querySelectorAll('.side-menu a');
menuLinks.forEach(function (item) {
    item.addEventListener('click', resetBurger);
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
const aboutSection = document.getElementById('about');
const h1Element = aboutSection.querySelector('h1');

aboutLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (aboutSection && h1Element) {
        h1Element.style.transition = 'color 1s ease'
        h1Element.style.color = '#FF8065';
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 800 });
        setTimeout(function () {
            h1Element.style.color = 'white';
        }, 800);
    }
});


const communityLink = document.querySelector('.side-menu a[href="#community"]');
const contactSection = document.getElementById('contact');
const h1ElementContact = contactSection.querySelector('h1');

communityLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (contactSection && h1ElementContact) {
        h1ElementContact.style.transition = 'color 1s ease';
        h1ElementContact.style.color = '#FF8065';

        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 800 });

        setTimeout(function () {
            h1ElementContact.style.color = 'white';
        }, 800);
    }
});


const homeLink = document.querySelector('.side-menu a[href="#home"]');
const cassiaLogo = document.querySelector('.cassia-logo');
const homeSection = document.getElementById('home');
const h1ElementHome = homeSection.querySelector('h1');

function handleHomeLinkClick(event) {
    event.preventDefault();

    if (homeSection && h1ElementHome) {
        h1ElementHome.style.transition = 'color 1s ease, font-size 1s ease';
        h1ElementHome.style.color = '#FF8065';
        h1ElementHome.style.fontSize = '25px';

        homeSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 800 });

        setTimeout(function () {
            h1ElementHome.style.color = 'white';
            h1ElementHome.style.fontSize = '24px';
        }, 800);
    }
}

homeLink.addEventListener('click', handleHomeLinkClick);
cassiaLogo.addEventListener('click', handleHomeLinkClick);


const downloadLink = document.getElementById('download-link');
const downloadButton = document.getElementById('download-button');

function addDesaturationClass() {
    document.body.classList.add('desaturate');
}

downloadLink.addEventListener('click', addDesaturationClass);

downloadButton.addEventListener('click', addDesaturationClass);

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('desaturate');
});
