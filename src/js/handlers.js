import { sections, navs, projects, filterList } from './constants.js';

export function handlerFilter(e) {
    e.preventDefault();
    if (!e.target.closest('.filter')) return;
    [...filterList.children].forEach((filter) =>
        filter.classList.remove('filter--active')
    );
    e.target.closest('.filter').classList.add('filter--active');
    projects.filter(e.target.closest('.filter').getAttribute('data-filter'));
}

export function handleScroll() {
    if (sections.intro.getBoundingClientRect().bottom < 0) {
        sections.intro.classList.add('withoutHeader');
        sections.header.classList.add('header--sticky');
    } else {
        sections.intro.classList.remove('withoutHeader');
        sections.header.classList.remove('header--sticky');
    }
    const headerHeight = sections.header.getBoundingClientRect().height;
    Object.keys(navs).forEach((key) => {
        const { top, bottom } = sections[key].getBoundingClientRect();
        if (top <= headerHeight && bottom > headerHeight)
            navs[key].classList.add('navigation__link--active');
        else navs[key].classList.remove('navigation__link--active');
    });
}

export function scrollToAnchor(e) {
    e.preventDefault();
    if (!e.target.closest('.navigation__link')) return;

    let scrollX =
        sections[e.target.getAttribute('href').substring(1)].getBoundingClientRect().top +
        pageYOffset;
    if (sections.header.classList.contains('header--sticky'))
        scrollX -= sections.header.getBoundingClientRect().height;

    window.scrollTo({
        top: scrollX,
        behavior: 'smooth',
    });
}
