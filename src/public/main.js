let modalEl = null;

const toggleMenu = (state = '') => {
    if ('' === state) modalEl.classList.toggle('is-open');
    else if ('open' === state) modalEl.classList.add('is-open');
    else if ('close' === state) modalEl.classList.remove('is-open');
};

const main = () => {
    modalEl = document.querySelector('.menu-backdrop>.menu');
};

document.addEventListener('DOMContentLoaded', main);
