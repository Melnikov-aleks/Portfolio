import { filterList, projects } from './constants.js';
import { handleScroll, scrollToAnchor, handlerFilter } from './handlers.js';

window.addEventListener('scroll', handleScroll);
document.querySelector('.navigation__list').addEventListener('click', scrollToAnchor);

filterList.addEventListener('click', handlerFilter);

projects.filter();
