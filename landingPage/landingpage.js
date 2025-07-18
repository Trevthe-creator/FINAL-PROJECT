
// Background Slideshow
class BackgroundSlideshow {
    constructor() {
        this.slides = document.querySelectorAll('.background-slide');
        this.currentSlide = 0;
        this.slideInterval = 5000; // 5 seconds
        this.init();
    }

    init() {
        this.startSlideshow();
    }

    nextSlide() {
        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');
        
        // Move to next slide
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        
        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');
    }

    startSlideshow() {
        setInterval(() => {
            this.nextSlide();
        }, this.slideInterval);
    }
}

// Mobile Navigation
class MobileNavigation {
    constructor() {
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.mobileNav = document.getElementById('mobileNav');
        this.isOpen = false;
        this.init();
    }

    init() {
        this.mobileMenuBtn.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking on nav links
        const navLinks = this.mobileNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.mobileMenuBtn.contains(e.target) && !this.mobileNav.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.mobileNav.classList.toggle('active');
        this.animateHamburger();
    }

    closeMenu() {
        this.isOpen = false;
        this.mobileNav.classList.remove('active');
        this.animateHamburger();
    }

    animateHamburger() {
        const hamburgerLines = this.mobileMenuBtn.querySelectorAll('.hamburger');
        if (this.isOpen) {
            hamburgerLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            hamburgerLines[1].style.opacity = '0';
            hamburgerLines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            hamburgerLines[0].style.transform = 'none';
            hamburgerLines[1].style.opacity = '1';
            hamburgerLines[2].style.transform = 'none';
        }
    }
}


// Card Animations
class CardAnimations {
    constructor() {
        this.cards = document.querySelectorAll('.career-card');
        this.init();
    }

    init() {
        this.animateCardsOnScroll();
        this.addHoverEffects();
    }

    animateCardsOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.style.animationPlayState = 'running';
                    }, delay);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.cards.forEach(card => {
            observer.observe(card);
        });
    }

    addHoverEffects() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addGlowEffect(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeGlowEffect(card);
            });
        });
    }

    addGlowEffect(card) {
        card.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.3)';
    }

    removeGlowEffect(card) {
        card.style.boxShadow = 'none';
    }
}

// Smooth Scrolling
class SmoothScrolling {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Button Interactions
class ButtonInteractions {
    constructor() {
        this.buttons = document.querySelectorAll('.btn');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRippleEffect(e, button);
            });
        });
    }

    createRippleEffect(e, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Navbar Scroll Effect
class NavbarScrollEffect {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.style.background = 'rgba(0, 0, 0, 0.9)';
                this.navbar.style.backdropFilter = 'blur(20px)';
            } else {
                this.navbar.style.background = 'rgba(0, 0, 0, 0.1)';
                this.navbar.style.backdropFilter = 'blur(10px)';
            }
        });
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.background-slide');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Loading Animation
class LoadingAnimation {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            this.animateElements();
        });
    }

    animateElements() {
        const elements = document.querySelectorAll('.hero-content, .career-card, .cta-section');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BackgroundSlideshow();
    new MobileNavigation();
    new CardAnimations();
    new SmoothScrolling();
    new ButtonInteractions();
    new NavbarScrollEffect();
    new ParallaxEffect();
    new LoadingAnimation();

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .loaded .hero-content,
        .loaded .career-card,
        .loaded .cta-section {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
    `;
    document.head.appendChild(style);
});

// Console welcome message
console.log('%c🚀 CareerHub Landing Page Loaded Successfully!', 'color: #06b6d4; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #10b981; font-size: 12px;');
