import { burger, filterList, projects, navigation, navList } from './constants.js';
import {
    handleScroll,
    scrollToAnchor,
    handlerFilter,
    handlerBurger,
    handleMarker,
} from './handlers.js';

window.addEventListener('scroll', handleScroll);

navigation.addEventListener('click', scrollToAnchor);
navList.addEventListener('mouseover', handleMarker);
navList.addEventListener('mouseover', handleMarker);

filterList.addEventListener('click', handlerFilter);
filterList.addEventListener('mouseover', handleMarker);
burger.addEventListener('click', handlerBurger);

projects.filter();
