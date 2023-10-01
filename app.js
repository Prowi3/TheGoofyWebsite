const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const sideMenu = document.getElementById('sideMenu');

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
const aboutSection = document.getElementById('about');
const h1Element = aboutSection.querySelector('h1');

aboutLink.addEventListener('click', function (event) {
    event.preventDefault();

    // Check if the about section and h1 element exist
    if (aboutSection && h1Element) {
        // Trigger the color change by changing the h1 element's color to red
        h1Element.style.color = '#FF8065';

        // Scroll to the about section smoothly
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 800 });

        // After a delay (800 milliseconds in this case, matching the scroll duration), change the h1 color back to white
        setTimeout(function () {
            h1Element.style.color = 'white';
        }, 800);
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
