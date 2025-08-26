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

    const contactForm = document.getElementById('contact-form');
    const confirmationModal = document.getElementById('confirmation-modal');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.reset();
        confirmationModal.classList.remove('hidden');
    });

    confirmationModal.addEventListener('click', function() {
        confirmationModal.classList.add('hidden');
    });
});