const $about = document.querySelector('.about');
const sections = {
    header: document.querySelector('.header'),
    intro: document.querySelector('.intro'),
    about: document.querySelector('.about'),
    projects: document.querySelector('.projects'),
    contacts: document.querySelector('.contacts'),
};
const navs = {
    intro: document.querySelector('.link-intro'),
    about: document.querySelector('.link-about'),
    projects: document.querySelector('.link-projects'),
    contacts: document.querySelector('.link-contacts'),
};

window.addEventListener('scroll', onScroll);
document.querySelector('.navigation__list').addEventListener('click', scrollToAnchor);

function scrollToAnchor(e) {
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

function onScroll() {
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
