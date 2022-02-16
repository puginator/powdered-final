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
const thumbText = document.querySelectorAll('.thumb-text');

// Nav Bar menu and button 

btn.addEventListener('click', () => {
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
        thumbText.forEach(text => {
            if (text.dataset.number == (nextImageIndex)) {
                text.classList.remove('hidden');
            } else {
                text.classList.add('hidden');
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
        thumbText.forEach(text => {
            if (text.dataset.number == (nextImageIndex)) {
                text.classList.remove('hidden');
            } else {
                text.classList.add('hidden');
            }
        })
    })
})




//Carousel Thumbnail Function
thumbsContainer.forEach(thumb => {

    thumb.addEventListener('click', () => {
        let order = parseInt(thumb.dataset.order);

        thumbText.forEach(text => {
            text.classList.add('hidden');
        })
        while (activeImages.length > 0) {
            activeImages[0].classList.remove('thumbs-active');

        }


        if (thumb.classList.contains('thumbs-active')) {
            thumb.classList.remove('thumbs-active');
            thumbText[order - 1].classList.add('hidden');

        } else {
            thumb.classList.add('thumbs-active');
            thumbText[order - 1].classList.remove('hidden');

        }

    })
})

// Copyright Year

copyright.innerHTML = new Date().getFullYear();