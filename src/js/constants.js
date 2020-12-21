import { Projects } from './classes.js';

export const projects = new Projects('.projects-list');

export const sections = {
    header: document.querySelector('.header'),
    intro: document.querySelector('.intro'),
    about: document.querySelector('.about'),
    projects: document.querySelector('.projects'),
    contacts: document.querySelector('.contacts'),
};
export const navs = {
    intro: document.querySelector('.link-intro'),
    about: document.querySelector('.link-about'),
    projects: document.querySelector('.link-projects'),
    contacts: document.querySelector('.link-contacts'),
};
export const filterList = document.querySelector('.filter-list');
