import './style.css';
import '../node_modules/normalize.css';
import './dropdown.js';
// import './carousel.js';
import { createCarousel, makeCarouselInteractive } from "./carousel.js";

const insertCarousel = document.querySelector('.image-carousel');

createCarousel(insertCarousel);
// makeCarouselInteractive();





