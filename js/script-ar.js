// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
};
// scrool section active link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // sticky navbar


    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.screenY >100);

    // remove toogele when scroll
    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active')
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('header', {origin: 'top'});
ScrollReveal().reveal('.home-content, .hidnig', {origin: 'top'});
ScrollReveal().reveal('.image, .services-container, .portfolio-box, .contact-icon', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-contant', {origin: 'right'});

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['مطور واجهات ', 'مصمم جرافيكي', 'ميديا باير' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});