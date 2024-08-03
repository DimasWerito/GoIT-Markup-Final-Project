let modalEl = null;
let backdropEl = null;

const toggleMenu = (state = '') => {
    if (!modalEl.classList.contains('is-open') || 'open' === state) {
        modalEl.classList.add('is-open');
        backdropEl.addEventListener('click', parseClick);
        document.addEventListener('keydown', parseKeydown);
    } else {
        modalEl.classList.remove('is-open');
        backdropEl.removeEventListener('click', parseClick);
        document.removeEventListener('keydown', parseKeydown);
    }
};

const parseKeydown = event => {
    if (event.code === 'Escape') toggleMenu('close');
};

const parseClick = event => {
    if (event.target === backdropEl) toggleMenu('close');

    const closestLink = event.target.closest('a');

    if (closestLink?.classList.contains('nav-link')) toggleMenu('close');
    if (closestLink?.classList.contains('soc-link')) toggleMenu('close');
};

const main = () => {
    backdropEl = document.querySelector('.menu-backdrop');
    modalEl = document.querySelector('.menu-backdrop>.menu');
};

document.addEventListener('DOMContentLoaded', main);
