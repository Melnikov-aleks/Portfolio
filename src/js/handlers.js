import { projects, filterList, navigation, emailRe, phoneRe } from './constants.js';
import { sendData } from './utils.js';

export function handlerSubmit(e) {
    e.preventDefault();
    e.target.classList.add('disabled');
    const data = new FormData(e.target);
    e.target.querySelectorAll('.form__status').forEach((elem) => elem.remove());
    for (let key of data.keys()) {
        e.target[key].classList.remove('form__input-error');
    }

    if (validateForm(e.target, data)) {
        sendData(e.target.action, data)
            .then((response) => {
                sendSuccess(e.target);
            })
            .catch((err) => {
                sendError(e.target, 'Oops. Error sending form!');
            });
    }
    e.target.classList.remove('disabled');
}
function sendSuccess(form) {
    form.reset();
    form.insertAdjacentHTML(
        'beforeend',
        `<p class="form__status form__success">Success!</p>`
    );
}
function sendError(form, text) {
    form.insertAdjacentHTML(
        'beforeend',
        `<p class="form__status form__error">${text}</p>`
    );
}
function validateForm(form, formData) {
    let error = 0;
    if (!formData.get('name')) {
        form['name'].classList.add('form__input-error');
        sendError(form, 'name is required');
        error++;
    }
    if (!formData.get('_replyto') && !formData.get('phone')) {
        form['phone'].classList.add('form__input-error');
        form['_replyto'].classList.add('form__input-error');
        sendError(form, 'email or phone is required');
        error++;
    } else {
        if (
            formData.get('_replyto') &&
            !emailRe.test(formData.get('_replyto').toLowerCase())
        ) {
            form['_replyto'].classList.add('form__input-error');
            sendError(form, 'Incorrect email');
            error++;
        }
        if (formData.get('phone') && !phoneRe.test(formData.get('phone').toLowerCase())) {
            form['phone'].classList.add('form__input-error');
            sendError(form, 'Incorrect phone');
            error++;
        }
    }
    return !error;
}
export function handlerBurger(e) {
    e.target.closest('.burger').classList.toggle('burger--active');
    navigation.classList.toggle('navigation--active');
}
export function handlerFilter(e) {
    e.preventDefault();
    if (!e.target.closest('.filter')) return;
    [...filterList.children].forEach((filter) =>
        filter.classList.remove('filter--active')
    );
    e.target.closest('.filter').classList.add('filter--active');
    projects.filter(e.target.closest('.filter').getAttribute('data-filter'));
}

export function handleMarker(e) {
    if (
        !e.target.closest('li') ||
        !e.target.closest('li').offsetParent.querySelector('.marker')
    )
        return;
    const height = e.target.closest('li').offsetHeight;
    const width = e.target.closest('li').offsetWidth;
    const bottom =
        e.target.closest('li').offsetParent.offsetHeight -
        e.target.closest('li').offsetTop -
        height;
    const left = e.target.closest('li').offsetLeft;
    const marker = e.target.closest('li').offsetParent.querySelector('.marker');
    marker.style.bottom = bottom + 'px';
    marker.style.left = left + 'px';
    marker.style.width = width + 'px';
    marker.style.height = height + 'px';
}
export function handleScroll() {
    controlStyckyHeader('#about', 30);
    setActiveNav();
    showAboutBlock();
}
function showAboutBlock() {
    const about = document.querySelector('#about');
    if (document.documentElement.clientHeight >= about.getBoundingClientRect().top * 1.2)
        about.classList.add('show');
}
function setActiveNav() {
    const headerHeight = document.querySelector('#header').getBoundingClientRect().height;
    const navLinks = navigation.querySelectorAll('.navigation__link');
    let counter = 0;
    navLinks.forEach((link) => {
        const { top, bottom } = document
            .querySelector(link.getAttribute('href'))
            .getBoundingClientRect();
        if (top <= headerHeight && bottom > headerHeight) {
            link.classList.add('navigation__link--active');
            counter++;
        } else link.classList.remove('navigation__link--active');
    });
    if (counter > 1) {
        solveConflictActiveLinks(navigation);
    }
}

function controlStyckyHeader(selector, height = 0) {
    document.querySelector(selector).getBoundingClientRect().top <= height + 1
        ? document.querySelector('#header').classList.add('header--sticky')
        : document.querySelector('#header').classList.remove('header--sticky');
}
function solveConflictActiveLinks(container) {
    let maxTop = 0;
    let index = 0;
    const links = container.querySelectorAll('.navigation__link--active');
    links.forEach((link, i) => {
        link.classList.remove('navigation__link--active');
        const top = document
            .querySelector(link.getAttribute('href'))
            .getBoundingClientRect().top;
        if (i === 0) maxTop = top;
        else if (top >= maxTop) {
            maxTop = top;
            index = i;
        }
    });
    links[index].classList.add('navigation__link--active');
}

export function scrollToAnchor(e) {
    e.preventDefault();
    if (!e.target.closest('.navigation__link')) return;
    const anchorTopOffset = document
        .querySelector(e.target.getAttribute('href'))
        .getBoundingClientRect().top;
    let scrollX = anchorTopOffset + pageYOffset;
    if (
        anchorTopOffset >=
        document.querySelector('#intro').nextElementSibling.getBoundingClientRect().top
    )
        scrollX -= 30;

    document.querySelector('.burger').classList.remove('burger--active');
    navigation.classList.remove('navigation--active');
    window.scrollTo({
        top: scrollX,
        behavior: 'smooth',
    });
}
