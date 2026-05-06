// ===========================
// Navigation Menu Toggle
// ===========================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Sticky Navbar Styling
// ===========================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add subtle shadow on scroll
    if (currentScroll > 0) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Contact Form Validation
// ===========================

const contactForm = document.getElementById('contactForm');

// Validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

function showError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    field.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearError(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    field.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Form submission handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    let isValid = true;
    
    // Validate name
    if (!validateName(name)) {
        showError('name', 'nameError', 'Please enter a valid name (at least 2 characters)');
        isValid = false;
    } else {
        clearError('name', 'nameError');
    }
    
    // Validate email
    if (!validateEmail(email)) {
        showError('email', 'emailError', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError('email', 'emailError');
    }
    
    // Validate message
    if (!validateMessage(message)) {
        showError('message', 'messageError', 'Message must be at least 10 characters long');
        isValid = false;
    } else {
        clearError('message', 'messageError');
    }
    
    // If all validations pass
    if (isValid) {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #27ae60, #2ecc71);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 2000;
            animation: slideInRight 0.5s ease-out;
        `;
        successDiv.textContent = '✓ Message sent successfully! Thank you for reaching out.';
        document.body.appendChild(successDiv);
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(400px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(400px);
                }
            }
        `;
        document.head.appendChild(style);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.style.animation = 'slideOutRight 0.5s ease-out';
            setTimeout(() => {
                successDiv.remove();
            }, 500);
        }, 5000);
        
        // Reset form
        contactForm.reset();
    }
});

// Real-time validation on input
document.getElementById('name').addEventListener('input', (e) => {
    if (validateName(e.target.value)) {
        clearError('name', 'nameError');
    }
});

document.getElementById('email').addEventListener('input', (e) => {
    if (validateEmail(e.target.value)) {
        clearError('email', 'emailError');
    }
});

document.getElementById('message').addEventListener('input', (e) => {
    if (validateMessage(e.target.value)) {
        clearError('message', 'messageError');
    }
});

// ===========================
// Smooth Scroll Enhancement
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe course cards
document.querySelectorAll('.course-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Observe about content
const aboutContent = document.querySelector('.about-content');
if (aboutContent) {
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateY(30px)';
    aboutContent.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(aboutContent);
}

// ===========================
// Parallax Effect (Light)
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// ===========================
// Dynamic Year Update
// ===========================

const yearElement = document.querySelector('.footer p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    const footerText = yearElement.textContent;
    // Already has 2026 in the text, keeping it as is per requirements
}

// ===========================
// Course Card Click Handler
// ===========================

document.querySelectorAll('.course-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const courseCard = link.closest('.course-card');
        const courseTitle = courseCard.querySelector('h3').textContent;
        
        // Show a subtle notification
        alert(`Thank you for your interest in ${courseTitle}!\n\nPlease fill out the contact form to get more information about this program.`);
        
        // Scroll to contact section
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// ===========================
// Performance Optimization
// ===========================

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// Initialize on Page Load
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
    
    // Preload images if any
    console.log('School of AI and Emerging Technologies - Website Loaded Successfully');
});

// ===========================
// Keyboard Navigation
// ===========================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on ESC
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
