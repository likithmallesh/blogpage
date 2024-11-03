const toggle = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Get the contact form element
const contactForm = document.querySelector('.contact-form');

// Add an event listener for form submission
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Display the alert message after form submission
    alert('Thank you for your message, we will get back to you soon!');

    // Optionally reset the form fields after submission
    contactForm.reset();
});
