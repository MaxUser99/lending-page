document.querySelectorAll('nav a, aside a').forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        const href = e.target.href.split('#');
        const itemId = href[href.length - 1];
        if (!itemId) return;
        hideMobileMenu();
        const element = document.getElementById(itemId);
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
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