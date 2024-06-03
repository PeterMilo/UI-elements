export function createCarousel (placeCarousel) {
    
    const carouselContainer = document.querySelector('.image-carousel-container')

    // Element creation
    const carouselViewport = document.createElement('div');
    const imageOne = document.createElement('img');
    const imageTwo = document.createElement('img');
    const imageThree = document.createElement('img');
    const arrowRight = document.createElement('img');
    const arrowLeft = document.createElement('img');

    // Add class 
    carouselViewport.classList = 'image-carousel-viewport';
    imageOne.classList = 'image-one active-image';
    imageTwo.classList = 'image-two';
    imageThree.classList = 'image-three';
    arrowRight.classList = 'arrow-right'; 
    arrowLeft.classList = 'arrow-left'; 

    // Set image source
    imageOne.src = "../src/images/golden1.jpg" 
    imageTwo.src = "../src/images/lab2.jpeg"
    imageThree.src = "../src/images/golden3"
    arrowRight.src = "../src/images/arrow-right.png"
    arrowLeft.src = "../src/images/arrow-left.png"

    // Insert elements into HTML
    carouselContainer.appendChild(arrowLeft)
    carouselContainer.appendChild(carouselViewport)
    carouselContainer.appendChild(arrowRight)
    carouselViewport.appendChild(imageOne)
    carouselViewport.appendChild(imageTwo)
    carouselViewport.appendChild(imageThree)
}


export function makeCarouselInteractive () {
console.log('Ready')

const imagesContainer = document.querySelector('.image-carousel-viewport');
const imageArray = document.querySelector('.image-carousel-viewport').children;
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');


let activeImage = findActiveImage()
let nextImage = activeImage.nextElementSibling;
let previousImage = activeImage.previousElementSibling || imagesContainer.lastChild;
let imageIndexs


function findActiveImage () {
    for (const image of imageArray) {
        if (image.classList.contains('active-image')) {
            return image
        } 
    }
    return null;
}

function changeToNextImage () {
    findActiveImage();
    nextImage.classList.add('active-image');
    activeImage.classList.remove('active-image');
}



arrowRight.addEventListener('click', ()=>{
changeToNextImage();
})

}
