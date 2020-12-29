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

navigation.addEventListener('click', scrollToAnchor);
navList.addEventListener('mouseover', handleMarker);
navList.addEventListener('mouseover', handleMarker);

filterList.addEventListener('click', handlerFilter);
filterList.addEventListener('mouseover', handleMarker);
burger.addEventListener('click', handlerBurger);

projects.filter();

formFeedback.addEventListener('submit', handlerSubmit);
