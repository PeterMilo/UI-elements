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

    makeCarouselInteractive();
}


export function makeCarouselInteractive () {
    console.log('Ready')

    const imagesContainer = document.querySelector('.image-carousel-viewport');
    const imageArray = document.querySelector('.image-carousel-viewport').children;
    const dotsArray = document.querySelector('.carousel-dots').children;
    const arrowRight = document.querySelector('.arrow-right');
    const arrowLeft = document.querySelector('.arrow-left');


    let activeImage
    let nextImage 
    let previousImage 


    function findActiveImage () {
        for (const image of imageArray) {
            if (image.classList.contains('active-image')) {
                activeImage = image;
            } 
        }
        return null;
    }  

    function changeToNextImage () {
        findActiveImage();
        nextImage = activeImage.nextElementSibling || imagesContainer.firstChild;
        nextImage.classList.add('active-image');
        activeImage.classList.remove('active-image');
        findActiveImage();
        updateActiveDot();
    }

    function changeToPreviousImage() {
        findActiveImage();
        previousImage = activeImage.previousElementSibling || imagesContainer.lastChild;
        previousImage.classList.add('active-image');
        activeImage.classList.remove('active-image');
        findActiveImage();
        updateActiveDot();
    }

    function changeImageFromDots(dotIndex) {
        findActiveImage();
        imageArray[dotIndex].classList.add('active-image');
        activeImage.classList.remove('active-image');
        findActiveImage();
        updateActiveDot();
    }

    function updateActiveDot () {
        const imageArrayIndex = Array.from(imageArray).indexOf(activeImage)
        
        for (let dot = 0; dot < dotsArray.length; dot++) {
            if (dot === imageArrayIndex) {
                dotsArray[dot].classList.add('active');
            } else {
                dotsArray[dot].classList.remove('active');
            }
        }
    }


    arrowRight.addEventListener('click', ()=>{
        console.log('arrow right clicked');
        changeToNextImage();
    })

    arrowLeft.addEventListener('click', ()=> {
        console.log('arrow left clicked');
        changeToPreviousImage();
    })

    // Makes dots interactive by looping through dots and passing dot index to function that changes active image class.
    for (let i = 0; i < dotsArray.length; i++) {
        dotsArray[i].addEventListener('click', () => {
            console.log('Clicked dot index:', i);
            changeImageFromDots(i);
        });
    }


    findActiveImage();
    updateActiveDot();
}
