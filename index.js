const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.mobile-menu-close');
const menuItems = document.querySelectorAll('.mobile-menu-item');
const carouselImage = document.getElementById('carousel-image');
const leftCarousel = document.querySelectorAll('.carousel-left');
const rightCarousel = document.querySelectorAll('.carousel-right');
const copyright = document.getElementById('copyrightYear');
const thumbsContainer = document.querySelectorAll('.thumbs');
const activeImages = document.getElementsByClassName('thumbs-active');

// Nav Bar menu and button 

btn.addEventListener('click', () => {
    console.log('clicked')
    menu.classList.toggle('hidden');
});

menuClose.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    })
});

// Carousel Buttons and function
function changeImage(a) {
    carouselImage.src = a;
}

leftCarousel.forEach(item => {
    item.addEventListener('click', () => {
        let currentImage = document.getElementById('carousel-image').src;
        let currentImageIndex = currentImage.substr(currentImage.length - 5, 1);
        let nextImageIndex = currentImageIndex - 1;
        if (nextImageIndex < 1) {
            nextImageIndex = 3
            carouselImage.src = `./src/Assets/make-it-${nextImageIndex}.jpg`;
        } else {
            carouselImage.src = `./src/Assets/make-it-${nextImageIndex}.jpg`;
        }

        thumbsContainer.forEach(thumb => {
            if (thumb.dataset.order == (nextImageIndex)) {
                thumb.classList.add('thumbs-active');
            } else {
                thumb.classList.remove('thumbs-active');
            }
        })
    })
})



rightCarousel.forEach(item => {
    item.addEventListener('click', () => {
        let currentImage = document.getElementById('carousel-image').src;
        let currentImageIndex = parseInt(currentImage.substr(currentImage.length - 5, 1));
        let nextImageIndex = currentImageIndex + 1;
        if (nextImageIndex > 3) {
            nextImageIndex = 1
            carouselImage.src = `./src/Assets/make-it-${nextImageIndex}.jpg`;
        } else {
            carouselImage.src = `./src/Assets/make-it-${nextImageIndex}.jpg`;
        }

        thumbsContainer.forEach(thumb => {
            if (thumb.dataset.order == (nextImageIndex)) {
                thumb.classList.add('thumbs-active');
            } else {
                thumb.classList.remove('thumbs-active');
            }
        })
    })
})




//Carousel Thumbnail Function
thumbsContainer.forEach(thumb => {

    thumb.addEventListener('click', () => {

        while (activeImages.length > 0) {
            activeImages[0].classList.remove('thumbs-active');
        }

        if (thumb.classList.contains('thumbs-active')) {
            thumb.classList.remove('thumbs-active');

        } else {
            thumb.classList.add('thumbs-active');

        }

    })
})

// Copyright Year

copyright.innerHTML = new Date().getFullYear();