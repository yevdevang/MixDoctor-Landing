// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Update Product Hunt badge theme
function updateProductHuntBadge(theme) {
    const badgeImg = document.querySelector('.producthunt-badge img');
    if (badgeImg) {
        const newTheme = theme === 'dark' ? 'dark' : 'light';
        // Update the badge URL to match the theme
        badgeImg.src = `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1064408&theme=${newTheme}&t=${Date.now()}`;
    }
}

// Set initial badge theme
updateProductHuntBadge(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateProductHuntBadge(newTheme);
    
    // Add a small animation effect
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// Platform Screenshot Switcher
const platformTabs = document.querySelectorAll('.platform-tab');
const platformScreenshots = document.querySelectorAll('.platform-screenshots');

platformTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const platform = tab.getAttribute('data-platform');
        
        // Remove active class from all tabs and screenshots
        platformTabs.forEach(t => t.classList.remove('active'));
        platformScreenshots.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding screenshots
        const targetScreenshots = document.querySelector(`.platform-screenshots[data-platform="${platform}"]`);
        if (targetScreenshots) {
            targetScreenshots.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for internal links (not empty hrefs)
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px var(--shadow)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
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

// Observe all feature cards, metrics, and pricing cards
document.querySelectorAll('.feature-card, .step, .metric-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add hover effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Console message for developers
console.log('%c🎵 MixDoctor', 'font-size: 24px; font-weight: bold; color: #6B46C1;');
console.log('%cProfessional Audio Analysis', 'font-size: 14px; color: #EC4899;');
console.log('%cInterested in our API? Contact us at sound1980@gmail.com', 'font-size: 12px; color: #666;');

// Preload critical images (if any)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle external links (open in new tab)
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Press 'T' to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            themeToggle.click();
        }
    }
});

// Detect system theme preference
if (window.matchMedia && !localStorage.getItem('theme')) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateProductHuntBadge('dark');
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        updateProductHuntBadge(newTheme);
    }
});

// Performance optimization: lazy load images if any are added later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
