// ==========================================
// Interactions.js - User Interactions
// ==========================================

// Timeline Item Click Handler
function setupTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Remove active class from all items
            timelineItems.forEach(i => i.style.background = '');
            // Add highlight to current item
            item.style.background = 'rgba(0, 212, 255, 0.1)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.background = '';
        });

        item.addEventListener('click', () => {
            const date = item.querySelector('.timeline-date').textContent;
            const title = item.querySelector('h3').textContent;
            showTimelineDetails(date, title, item.querySelector('p').textContent);
        });
    });
}

// Show timeline details in a modal/popup
function showTimelineDetails(date, title, description) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>${title}</h2>
            <p class="modal-date">${date}</p>
            <p>${description}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add styles if not exists
    if (!document.querySelector('style[data-modal]')) {
        const style = document.createElement('style');
        style.setAttribute('data-modal', 'true');
        style.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease-out;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            .modal-content {
                background: linear-gradient(135deg, rgba(15, 52, 96, 0.95), rgba(22, 33, 62, 0.95));
                padding: 2.5rem;
                border-radius: 15px;
                border: 1px solid rgba(0, 212, 255, 0.3);
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
                animation: slideUp 0.3s ease-out;
            }

            @keyframes slideUp {
                from {
                    transform: translateY(50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .modal-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: transparent;
                border: none;
                color: rgba(234, 234, 234, 0.7);
                font-size: 28px;
                cursor: pointer;
                transition: color 0.2s;
            }

            .modal-close:hover {
                color: #00d4ff;
            }

            .modal-content h2 {
                margin-top: 0;
                margin-bottom: 0.5rem;
                background: linear-gradient(135deg, #00d4ff, #e94560);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .modal-date {
                color: #00d4ff;
                font-weight: 600;
                margin-bottom: 1.5rem;
            }

            .modal-content p {
                margin-bottom: 1rem;
            }
        `;
        document.head.appendChild(style);
    }

    // Close modal
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Navigation highlight on scroll
function setupNavHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scroll offset for fixed navbar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const element = document.querySelector(href);
            if (element) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const elementPosition = element.offsetTop - navbarHeight;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Metric cards hover effect
function setupMetricCardEffects() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Impact cards animated text
function setupImpactCardEffects() {
    const impactCards = document.querySelectorAll('.impact-card');
    
    impactCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            const title = card.querySelector('h3');
            title.style.color = '#00d4ff';
            title.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
        });

        card.addEventListener('mouseleave', () => {
            const title = card.querySelector('h3');
            title.style.color = '#00d4ff';
            title.style.textShadow = 'none';
        });
    });
}

// Fade in elements on page load
function fadeInElements() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach((element, index) => {
        const delay = element.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, parseInt(delay));
    });
}

// Read more / Show less functionality
function setupReadMore() {
    // This could be extended for longer sections
    const sections = document.querySelectorAll('.section-content');
    
    sections.forEach(section => {
        const height = section.scrollHeight;
        if (height > 400) {
            section.style.maxHeight = '400px';
            section.style.overflow = 'hidden';
            
            const readMoreBtn = document.createElement('button');
            readMoreBtn.className = 'read-more-btn';
            readMoreBtn.textContent = 'Xem Thêm';
            readMoreBtn.style.cssText = `
                margin-top: 1rem;
                padding: 0.5rem 1.5rem;
                background: transparent;
                color: #00d4ff;
                border: 2px solid #00d4ff;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s;
            `;
            
            readMoreBtn.addEventListener('click', () => {
                if (section.style.maxHeight === 'none') {
                    section.style.maxHeight = '400px';
                    readMoreBtn.textContent = 'Xem Thêm';
                } else {
                    section.style.maxHeight = 'none';
                    readMoreBtn.textContent = 'Ẩn Bớt';
                }
            });
            
            section.parentNode.insertBefore(readMoreBtn, section.nextSibling);
        }
    });
}

// Tooltip helper
function addTooltip(element, text) {
    element.setAttribute('title', text);
    element.style.cursor = 'help';
}

// Share button functionality (already in animations.js but enhanced here)
function enhanceSharing() {
    const shareBtn = document.querySelector('.btn-secondary');
    if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const shareText = `Khám phá tương lai AI 2026: https://yoursite.com`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'Tương Lai AI 2026',
                    text: 'Khám phá những thay đổi sâu sắc của trí tuệ nhân tạo',
                    url: window.location.href
                }).catch(err => console.log('Error sharing:', err));
            } else {
                // Fallback: copy to clipboard
                const textarea = document.createElement('textarea');
                textarea.value = shareText;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                
                // Show notification
                alert('Link đã được sao chép vào clipboard!');
            }
        });
    }
}

// Initialize all interactions
document.addEventListener('DOMContentLoaded', () => {
    setupTimelineInteractions();
    setupNavHighlight();
    setupMetricCardEffects();
    setupImpactCardEffects();
    fadeInElements();
    setupReadMore();
    enhanceSharing();

    // Add initial styling for fade-in elements
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
});

// Export functions
window.InteractionsModule = {
    setupTimelineInteractions,
    setupNavHighlight,
    setupMetricCardEffects,
    setupImpactCardEffects,
    fadeInElements,
    setupReadMore,
    addTooltip,
    enhanceSharing
};
