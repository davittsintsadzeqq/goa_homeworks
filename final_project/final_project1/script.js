// Main JavaScript file for GOA Academy Website

// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const header = document.getElementById('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const backToTopBtn = document.getElementById('backToTopBtn');
const enrollBtns = document.querySelectorAll('.enroll-btn');
const enrollmentModal = document.getElementById('enrollmentModal');
const closeModal = document.querySelector('.close-modal');
const courseTitle = document.getElementById('courseTitle');
const faqItems = document.querySelectorAll('.faq-item');
const categoryBtns = document.querySelectorAll('.category-btn');
const courseCards = document.querySelectorAll('.course-card');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const enrollmentForm = document.getElementById('enrollmentForm');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// Initialize current slide index
let currentSlide = 0;

// Check for saved theme in localStorage
document.addEventListener('DOMContentLoaded', () => {
  // Theme initialization
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  // Initialize animations
  checkAnimations();

  // Start counters if they are visible
  if (isElementInViewport(document.querySelector('.stats-container'))) {
    startCounters();
  }
});

// Theme Toggle
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // Save theme preference to localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    backToTopBtn.classList.add('visible');
  } else {
    header.classList.remove('scrolled');
    backToTopBtn.classList.remove('visible');
  }
  
  // Check for animations
  checkAnimations();
  
  // Start counters if they are visible
  if (isElementInViewport(document.querySelector('.stats-container')) && 
      !document.querySelector('.stat-number').classList.contains('counted')) {
    startCounters();
  }
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  
  // Toggle icon
  const icon = mobileMenuBtn.querySelector('i');
  if (navLinks.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close menu when clicking on a link (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    
    // Reset icon
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    
    // Update active link
    document.querySelectorAll('.nav-links a').forEach(navLink => {
      navLink.classList.remove('active');
    });
    link.classList.add('active');
  });
});

// Back to Top button
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Course Category Filter
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryBtns.forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Get category value
    const category = btn.getAttribute('data-category');
    
    // Filter courses
    courseCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Enrollment Modal
enrollBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Get course title
    const courseName = btn.parentElement.querySelector('h3').textContent;
    courseTitle.textContent = courseName;
    
    // Show modal
    enrollmentModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  enrollmentModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === enrollmentModal) {
    enrollmentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// FAQ Accordion
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Toggle active class
    item.classList.toggle('active');
    
    // Close other items
    faqItems.forEach(faqItem => {
      if (faqItem !== item) {
        faqItem.classList.remove('active');
      }
    });
  });
});

// Form Validation
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    const isValid = validateForm(contactForm);
    
    if (isValid) {
      // Show success message
      alert('Your message has been sent successfully!');
      contactForm.reset();
    }
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
  });
}

if (enrollmentForm) {
  enrollmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    const isValid = validateForm(enrollmentForm);
    
    if (isValid) {
      // Show success message
      alert('Your enrollment application has been submitted successfully!');
      enrollmentForm.reset();
      
      // Close modal
      enrollmentModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Testimonial Slider
function showSlide(n) {
  // Hide all slides
  testimonialSlides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove active class from all indicators
  indicators.forEach(indicator => {
    indicator.classList.remove('active');
  });
  
  // Show current slide
  testimonialSlides[n].classList.add('active');
  
  // Add active class to current indicator
  indicators[n].classList.add('active');
  
  // Update current slide index
  currentSlide = n;
}

// Next slide
nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= testimonialSlides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

// Previous slide
prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = testimonialSlides.length - 1;
  }
  showSlide(currentSlide);
});

// Indicator click
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
  });
});

// Auto slide change
setInterval(() => {
  currentSlide++;
  if (currentSlide >= testimonialSlides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}, 6000);

// Counter Animation
function startCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // milliseconds
    const step = Math.ceil(target / (duration / 20)); // Update every 20ms
    
    let current = 0;
    
    counter.classList.add('counted'); // Mark as counted
    
    const updateCounter = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    };
    
    const timer = setInterval(updateCounter, 20);
  });
}

// Check for animations
function checkAnimations() {
  animatedElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
}

// Utility function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
    rect.bottom >= 0
  );
}

// Form validation
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    const errorMessage = input.nextElementSibling;
    
    // Reset error
    errorMessage.style.display = 'none';
    input.style.borderColor = '';
    
    if (input.hasAttribute('required') && !input.value.trim()) {
      errorMessage.textContent = 'This field is required';
      errorMessage.style.display = 'block';
      input.style.borderColor = 'var(--error-color)';
      isValid = false;
    } else if (input.type === 'email' && input.value.trim() && !validateEmail(input.value)) {
      errorMessage.textContent = 'Please enter a valid email address';
      errorMessage.style.display = 'block';
      input.style.borderColor = 'var(--error-color)';
      isValid = false;
    }
  });
  
  return isValid;
}

// Email validation
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const headerHeight = document.getElementById('header').offsetHeight;
    
    if (window.pageYOffset >= sectionTop - headerHeight - 50) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

