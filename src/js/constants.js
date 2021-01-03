import { Projects } from './classes.js';

export const projects = new Projects('.projects-list');

export const navigation = document.querySelector('.navigation');
export const navList = document.querySelector('.navigation__list');
export const filterList = document.querySelector('.filter-list');
export const burger = document.querySelector('.burger');

export const formFeedback = document.querySelector('.contacts__form');

export const emailRe = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const phoneRe = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

export const previewsPath =
    'https://github.com/Melnikov-aleks/Portfolio/raw/master/previews/';
