import { Projects } from './classes.js';

export const projects = new Projects('.projects-list');

export const sections = {
    header: document.querySelector('#header'),
    intro: document.querySelector('#intro'),
    about: document.querySelector('#about'),
    projects: document.querySelector('#projects'),
    contacts: document.querySelector('#contacts'),
};

export const navigation = document.querySelector('.navigation');
export const navList = document.querySelector('.navigation__list');
export const filterList = document.querySelector('.filter-list');
export const burger = document.querySelector('.burger');
export const marker = document.querySelector('#marker');
