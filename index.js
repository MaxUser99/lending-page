document.querySelectorAll('nav a').forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        const href = e.target.href.split('#');
        const itemId = href[href.length - 1];
        if (!itemId) return;
        const element = document.getElementById(itemId);
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    });
});