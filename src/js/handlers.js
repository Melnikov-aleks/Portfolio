import { sections, projects, filterList, navigation, marker } from './constants.js';

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
    if (!e.target.closest('.navigation__item')) return;
    const height = e.target.closest('.navigation__item').offsetHeight;
    const width = e.target.closest('.navigation__item').offsetWidth;
    const bottom =
        e.target.closest('.navigation__item').offsetParent.offsetHeight -
        e.target.closest('.navigation__item').offsetTop -
        height;
    const left = e.target.closest('.navigation__item').offsetLeft;

    marker.style.bottom = bottom + 'px';
    marker.style.left = left + 'px';
    marker.style.width = width + 'px';
    marker.style.height = height + 'px';
}
function controlStyckyHeader(selector, height = 0) {
    document.querySelector(selector).nextElementSibling.getBoundingClientRect().top <=
    height
        ? document.querySelector('#header').classList.add('header--sticky')
        : document.querySelector('#header').classList.remove('header--sticky');
}
export function handleScroll() {
    controlStyckyHeader('#intro', 30);
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
