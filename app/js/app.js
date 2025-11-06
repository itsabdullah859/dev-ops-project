// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active section detection on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Update navigation
            navLinks.forEach(link => {
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Contact form handling
const contactForm = document.getElementById('contact-abdullah');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Disable form while processing
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            // Here you would typically send the data to a server
            console.log('Form submitted with data:', data);
            
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            contactForm.insertAdjacentElement('beforebegin', successMessage);
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        } finally {
            // Re-enable form
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Mobile menu toggle
const menuToggle = document.createElement('button');
menuToggle.className = 'menu-toggle';
menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
menuToggle.innerHTML = '<span></span><span></span><span></span>';

const nav = document.querySelector('nav');
nav.insertBefore(menuToggle, nav.firstChild);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});