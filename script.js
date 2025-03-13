window.addEventListener('load', () => {
    // General fade-up animations (Desktop)
    const fadeUps = document.querySelectorAll('.fade-up');
    fadeUps.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 300);
    });

    // Staggered links inside .links
    const links = document.querySelectorAll('.links .link');
    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('show');
        }, index * 300);
    });

    // Animate Desktop View Elements
    const contView = document.querySelector('.cont-view.animate-1'); 
    const topText = document.querySelector('.top-text.fade-right-new.animate-2');
    const paraText = document.querySelector('.para-text.fade-up-new.animate-1');

    if (contView) {
        setTimeout(() => {
            contView.classList.add('show-new');
        }, 300);
    }

    if (topText) {
        setTimeout(() => {
            topText.classList.add('show-new');
        }, 600);
    }

    if (paraText) {
        setTimeout(() => {
            paraText.classList.add('show-new');
        }, 900);
    }

    // Animate Mobile View Elements
    const mobileHeader = document.querySelector('.mobile-cv .header');
    const paraTextV = document.querySelector('.mobile-cv .para-text-v');
    const imgMCV = document.querySelector('.mobile-cv .img-m-cv');
    const paraTextMV = document.querySelector('.mobile-cv .para-text-mv');

    if (mobileHeader) {
        setTimeout(() => {
            mobileHeader.classList.add('show-new');
        }, 300);
    }

    if (paraTextV) {
        setTimeout(() => {
            paraTextV.classList.add('show-new');
        }, 600);
    }

    if (imgMCV) {
        setTimeout(() => {
            imgMCV.classList.add('show-new');
        }, 900);
    }

    if (paraTextMV) {
        setTimeout(() => {
            paraTextMV.classList.add('show-new');
        }, 1200);
    }
});

// Toggle Menu (unchanged)
function toggleMenu() {
    const dropdown = document.getElementById('dropdown');
    const menuIcon = document.getElementById('menu-icon');

    dropdown.classList.toggle('show');

    if (dropdown.classList.contains('show')) {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
}
