/**
 * SUNSET ESCAPE VILLA - MAIN APPLICATION
 * Object-Oriented JavaScript Implementation
 */

// ==========================================
// BASE COMPONENT CLASS
// ==========================================
class Component {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    show() {
        if (this.element) {
            this.element.style.display = 'block';
        }
    }

    hide() {
        if (this.element) {
            this.element.style.display = 'none';
        }
    }

    addClass(className) {
        if (this.element) {
            this.element.classList.add(className);
        }
    }

    removeClass(className) {
        if (this.element) {
            this.element.classList.remove(className);
        }
    }

    toggleClass(className) {
        if (this.element) {
            this.element.classList.toggle(className);
        }
    }
}

// ==========================================
// NAVIGATION CLASS
// ==========================================
class Navigation extends Component {
    constructor() {
        super('.navigation');
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.getElementById('navLinks');
        this.links = document.querySelectorAll('.nav-links__item');
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveState();
    }

    setupMobileMenu() {
        if (this.menuToggle && this.navLinks) {
            this.menuToggle.addEventListener('click', () => {
                this.navLinks.classList.toggle('nav-links--active');
            });

            // Close menu when clicking on a link
            this.links.forEach(link => {
                link.addEventListener('click', () => {
                    this.navLinks.classList.remove('nav-links--active');
                });
            });
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 60;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupActiveState() {
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            this.links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// ==========================================
// BACK TO TOP BUTTON CLASS
// ==========================================
class BackToTopButton extends Component {
    constructor() {
        super('.back-to-top');
        this.init();
    }

    init() {
        this.setupScrollListener();
        this.setupClickListener();
    }

    setupScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.addClass('back-to-top--visible');
            } else {
                this.removeClass('back-to-top--visible');
            }
        });
    }

    setupClickListener() {
        if (this.element) {
            this.element.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}

// ==========================================
// CONTACT FORM CLASS
// ==========================================
class ContactForm extends Component {
    constructor() {
        super('#contactForm');
        this.init();
        this.initEmailJS();
    }

    initEmailJS() {
        // Initialize EmailJS with your public key
        // Sign up at https://www.emailjs.com/ to get your keys
        if (typeof emailjs !== 'undefined') {
            emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
        }
    }

    init() {
        if (this.element) {
            this.element.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.element);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (this.validateForm(data)) {
            // Show loading state
            const submitButton = this.element.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Try to send via EmailJS first, fallback to WhatsApp/Email
            this.submitForm(data, submitButton, originalText);
        }
    }

    validateForm(data) {
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return false;
        }

        if (!this.isValidEmail(data.email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    submitForm(data, submitButton, originalText) {
        // Check if EmailJS is configured
        if (typeof emailjs !== 'undefined' && emailjs.send) {
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone || 'Not provided',
                message: data.message,
                to_email: 'info@sunsetescape.lk'
            })
            .then(() => {
                // Success
                alert('✅ Thank you! Your message has been sent successfully. We will contact you within 24 hours.');
                this.element.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                // Fallback to WhatsApp/Email option
                this.fallbackSubmit(data, submitButton, originalText);
            });
        } else {
            // EmailJS not configured, use fallback
            this.fallbackSubmit(data, submitButton, originalText);
        }
    }

    fallbackSubmit(data, submitButton, originalText) {
        // Create WhatsApp message
        const whatsappNumber = '94714175072'; // Replace with actual number
        const message = `*New Inquiry from Website*%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone || 'Not provided'}%0A*Message:* ${data.message}`;
        
        // Create mailto link
        const subject = encodeURIComponent('Inquiry from Sunset Escape Website');
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\n\nMessage:\n${data.message}`);
        const mailtoLink = `mailto:info@sunsetescape.lk?subject=${subject}&body=${body}`;
        
        // Show success message with options
        const userChoice = confirm('Thank you for your inquiry!\n\nClick OK to send via WhatsApp, or Cancel to send via Email.');
        
        if (userChoice) {
            // Open WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        } else {
            // Open Email client
            window.location.href = mailtoLink;
        }
        
        // Reset button and form
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        setTimeout(() => {
            this.element.reset();
        }, 500);
    }
}

// ==========================================
// GALLERY CLASS
// ==========================================
class Gallery extends Component {
    constructor() {
        super('.gallery-grid');
        this.items = document.querySelectorAll('.gallery-item');
        this.init();
    }

    init() {
        // Lightbox library handles the gallery functionality
        // No additional setup needed - just configure lightbox options
        if (typeof lightbox !== 'undefined') {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'albumLabel': 'Image %1 of %2'
            });
        }
    }
}

// ==========================================
// SCROLL ANIMATION CLASS
// ==========================================
class ScrollAnimation {
    constructor() {
        this.sections = document.querySelectorAll('.section');
        this.init();
    }

    init() {
        this.setupObserver();
    }

    setupObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        this.sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
}

// ==========================================
// APPLICATION CLASS
// ==========================================
class SunsetEscapeApp {
    constructor() {
        this.navigation = null;
        this.backToTop = null;
        this.contactForm = null;
        this.gallery = null;
        this.scrollAnimation = null;
    }

    init() {
        // Initialize all components when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            this.navigation = new Navigation();
            this.backToTop = new BackToTopButton();
            this.contactForm = new ContactForm();
            this.gallery = new Gallery();
            this.scrollAnimation = new ScrollAnimation();
            
            console.log('Sunset Escape Villa website initialized successfully!');
        });
    }
}

// ==========================================
// INITIALIZE APPLICATION
// ==========================================
const app = new SunsetEscapeApp();
app.init();
