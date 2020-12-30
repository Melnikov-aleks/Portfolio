import {
    burger,
    filterList,
    projects,
    navigation,
    navList,
    formFeedback,
} from './constants.js';
import {
    handleScroll,
    scrollToAnchor,
    handlerFilter,
    handlerBurger,
    handleMarker,
    handlerSubmit,
} from './handlers.js';

window.addEventListener('scroll', handleScroll);

burger.addEventListener('click', handlerBurger);

navigation.addEventListener('click', scrollToAnchor);
navList.addEventListener('mouseover', handleMarker);

filterList.addEventListener('click', handlerFilter);
filterList.addEventListener('mouseover', handleMarker);

formFeedback.addEventListener('submit', handlerSubmit);

projects.filter();
