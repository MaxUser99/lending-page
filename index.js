document.querySelector('#subscription-form button[type=submit]').addEventListener('click', e => {
    const circle = document.createElement('div');
    const x = e.layerX;
    const y = e.layerY;
    circle.classList.add('circle');
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    e.currentTarget.appendChild(circle);
    setTimeout(
        () => { circle.remove(); }, 
        1000
    );
});

document.getElementById('subscription-form').addEventListener('submit', e => {
    e.preventDefault();
    const url = 'https://script.google.com/macros/s/AKfycbwC7TN3H4LULiJjnBDEWYu4S2JFwKOunLsDHPqMnlG1jfKskfM9/exec';
    const email = document.querySelector('form#subscription-form input[type$="email"]').value;
    fetch(`${url}?email=${email}`, { method: "GET" })
        .then(r => r.json())
        .then(console.log)
        .catch(console.error);
}, false);

document.querySelectorAll('button.lang-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('active')) return;
        document.querySelector('button.lang-button.active').classList.remove('active');
        e.currentTarget.classList.add('active');
    }, false);
})

document.getElementById('light-paper-button').addEventListener('click', (e) => {
    window.open('/LightPaper.pdf');
});

document.querySelectorAll('a[href$="#light_paper"]')
.forEach(element => {
    element.addEventListener('click', e => {
        window.open('/LightPaper.pdf');
    }, false);
});

document.querySelectorAll('header a, aside a').forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        const href = e.currentTarget.href.split('#');
        const itemId = href[href.length - 1];
        const element = itemId ? document.getElementById(itemId) : null;
        if (!element) return;
        hideMobileMenu();
        window.scrollTo({ behavior: 'smooth', top: element.offsetTop - 80});
    }, false);
});

document.querySelector('.backface').addEventListener('click', hideMobileMenu, false);
document.querySelector('.menu-button').addEventListener('click', showMobileMenu, false);

function hideMobileMenu() {
    document.querySelector('.mobile-menu').classList.remove('open');
    document.querySelector('.backface').classList.remove('show');
}

function showMobileMenu() {
    document.querySelector('.backface').classList.add('show');
    document.querySelector('.mobile-menu').classList.add('open');
}


const HIDDEN_CLASS = 'hidden';
const ACTIVE_CLASS = 'active';
const dots = [];
const parentNode = document.querySelector('.section-products .images-column');
const images = document.querySelectorAll('.section-products .images-column img');
images.forEach(element => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', dotClickHandler);
    if (!dots.length) dot.classList.add(ACTIVE_CLASS);
    else element.classList.add(HIDDEN_CLASS);
    dots.push(dot);
});
const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots');
dots.forEach(dot => dotsContainer.appendChild(dot));
parentNode.appendChild(dotsContainer);

function dotClickHandler({ currentTarget }) {
    const targetIndex = dots.indexOf(currentTarget);
    if (targetIndex === -1) return;
    images.forEach((image, i) => {
        if (i === targetIndex) {
            image.classList.remove(HIDDEN_CLASS);
        } else {
            image.classList.add(HIDDEN_CLASS);
        }
    });
    dots.forEach((dot, i) => {
        if (i === targetIndex) {
            dot.classList.add(ACTIVE_CLASS)
        } else {
            dot.classList.remove(ACTIVE_CLASS)
        }
    });
}