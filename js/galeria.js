document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.classList.add('scrolled');
            header.classList.remove('up');
        } else if (window.scrollY < lastScrollY) {
            header.classList.add('up');
        }
        if (window.scrollY <= 50) {
             header.classList.remove('scrolled', 'up');
        }
        lastScrollY = window.scrollY;
    });

    hamburger.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    });

    const galleryImages = document.querySelectorAll('.media-grid .media-card img');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const imageUrl = image.getAttribute('src');
            lightboxImage.setAttribute('src', imageUrl);
            lightboxOverlay.classList.remove('hidden');
        });
    });

    lightboxOverlay.addEventListener('click', () => {
        lightboxOverlay.classList.add('hidden');
    });
});