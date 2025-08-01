
// Global variables
let currentTextIndex = 0;
const heroTexts = [
    "Get in Touch",
    "Let's Connect", 
    "Contact Us",
    "Start a Conversation"
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeHeroTextRotation();
    initializeScrollReveal();
    initializeFormHandling();
    initializeNewsletterForm();
    initializeSmoothScrolling();
});

// Particle Background System
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    container.appendChild(particle);
}

// Hero Text Rotation
function initializeHeroTextRotation() {
    const heroTextElement = document.getElementById('heroText');
    
    setInterval(() => {
        currentTextIndex = (currentTextIndex + 1) % heroTexts.length;
        heroTextElement.textContent = heroTexts[currentTextIndex];
        
        // Add animation effect
        heroTextElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            heroTextElement.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

// Scroll Reveal Animation
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all elements with the reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    // Add smooth scrolling to all internal links
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
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Contact Form Handling
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!validateForm(data)) {
            return;
        }
        
        // Show loading state
        showLoadingState(true);
        
        try {
            // Simulate form submission (replace with actual API call)
            await simulateFormSubmission(data);
            
            // Show success message
            showSuccessMessage();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showErrorMessage('Something went wrong. Please try again.');
        } finally {
            showLoadingState(false);
        }
    });
}

function validateForm(data) {
    const required = ['name', 'email', 'subject', 'message'];
    const missing = required.filter(field => !data[field] || data[field].trim() === '');
    
    if (missing.length > 0) {
        alert(`Please fill in the following fields: ${missing.join(', ')}`);
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    return true;
}

function showLoadingState(loading) {
    const submitBtn = document.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loadingSpinner = submitBtn.querySelector('.loading-spinner');
    
    if (loading) {
        btnText.style.display = 'none';
        loadingSpinner.style.display = 'flex';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
    } else {
        btnText.style.display = 'block';
        loadingSpinner.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
    }
}

function showSuccessMessage() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Reset form and show it again after 3 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'flex';
        successMessage.style.display = 'none';
    }, 3000);
}

function showErrorMessage(message) {
    alert(message); // In a real app, you'd show a more elegant error message
}

async function simulateFormSubmission(data) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Log the form data (in a real app, send to server)
    console.log('Form submitted:', data);
    
    // Simulate success
    return { success: true };
}

// Newsletter Form Handling
function initializeNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        try {
            // Simulate newsletter subscription
            await simulateNewsletterSubscription(email);
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            alert('Something went wrong. Please try again.');
        }
    });
}

async function simulateNewsletterSubscription(email) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the email (in a real app, send to server)
    console.log('Newsletter subscription:', email);
    
    return { success: true };
}

// Social Media Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach((icon, index) => {
        // Add staggered animation delay
        icon.style.animationDelay = `${index * 0.1}s`;
        
        // Add pulse animation class
        icon.classList.add('pulse-animation');
    });
});

// Contact Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Floating Label Animation for Form Inputs
document.addEventListener('DOMContentLoaded', function() {
    const floatingInputs = document.querySelectorAll('.form-floating input, .form-floating textarea');
    
    floatingInputs.forEach(input => {
        // Check if input has value on load
        if (input.value) {
            input.classList.add('has-value');
        }
        
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        input.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
});

// Scroll Progress Indicator (Optional Enhancement)
function addScrollProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #10b981, #34d399);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress indicator
document.addEventListener('DOMContentLoaded', addScrollProgressIndicator);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add parallax effect to hero background elements
document.addEventListener('DOMContentLoaded', function() {
    const bgElements = document.querySelectorAll('.bg-circle');
    
    const handleParallax = throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        bgElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    }, 16);
    
    window.addEventListener('scroll', handleParallax);
});

// Add loading animation when page loads
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console log for debugging
console.log('🚀 Modern Contact Website Loaded Successfully!');
console.log('✨ Features: Glass Morphism, Particle Background, Smooth Animations');
console.log('🎨 Theme: Green Gradient with Modern Design');
 

document.querySelector(".submit-btn").addEventListener("click", function (e) {
    e.preventDefault(); // prevent form from submitting normally

    const message = document.getElementById("message").value.trim();
    if (!message) return alert("Please type a message first.");

    const phoneNumber = "254113787156"; // replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank"); // open WhatsApp chat in new tab
});
