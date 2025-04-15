// Filename: script.js - Portfolio Dynamic Features

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic dropdown menu handling
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });

    // Skill bar animations
    const skillBars = document.querySelectorAll('.progress-bar');

    function fillSkillBars() {
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percent'); // Get percentage from data attribute
            bar.style.width = percentage + '%';
            bar.textContent = percentage + '%';
        });
    }

    // Trigger skill bar animations when skills section comes into view
    const skillsSection = document.querySelector('.skills');
    let skillsAnimated = false;

    function animateSkills() {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !skillsAnimated) {
            fillSkillBars();
            skillsAnimated = true;
        }
    }

    window.addEventListener('scroll', animateSkills);

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);

        // Simulate sending form data
        console.log('Form Submitted Successfully:', {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        });

        // Show confirmation message
        alert('Thank you for reaching out! I will get back to you soon.');

        // Clear form fields
        contactForm.reset();
    });
});
