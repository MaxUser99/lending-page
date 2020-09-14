document.querySelectorAll('button.lang-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('active')) return;
        document.querySelector('button.lang-button.active').classList.remove('active');
        e.currentTarget.classList.add('active');
    }, false);
})

document.getElementById('light-paper-button').addEventListener('click', (e) => {
    window.open('/LIght paper.pdf');
});

document.querySelectorAll('a[href$="#light_paper"]')
.forEach(element => {
    element.addEventListener('click', e => {
        window.open('/LIght paper.pdf');
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
    document.body.style.overflowY = 'auto';
}

function showMobileMenu() {
    document.querySelector('.backface').classList.add('show');
    document.querySelector('.mobile-menu').classList.add('open');
    document.body.style.overflowY = 'hidden';
}