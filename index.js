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
        element.scrollIntoView({ behavior: 'smooth' });
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