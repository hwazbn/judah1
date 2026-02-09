document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-times');
            hamburger.querySelector('i').classList.toggle('fa-bars');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-times');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Lightbox for Gallery (Optional Enhancement)
    const galleryItems = document.querySelectorAll('.gallery-item img');
    // Implement lightbox logic if needed, for now just a placeholder
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            console.log('Image clicked: ' + img.src);
            // Future functionality: Open modal with full size image
            createLightbox(img.src, img.alt);
        });
    });

    function createLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.9)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.zIndex = '2000';
        lightbox.style.cursor = 'pointer';

        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        img.style.border = '2px solid #d4af37';
        img.style.borderRadius = '5px';

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    }

    // Scroll Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(18, 18, 18, 0.98)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'rgba(18, 18, 18, 0.95)';
            header.style.padding = '20px 0';
        }
    });

    // Animation on Scroll (Simple Fade-In)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section, .hero');
    sections.forEach(section => {
        // Initial state for animation
        // section.style.opacity = '0';
        // section.style.transform = 'translateY(20px)';
        // section.style.transition = 'all 0.6s ease-out';
        // observer.observe(section);
    });
});
