// ==========================================
// Canvas Animations
// ==========================================

// Hero Canvas Animation
function initHeroCanvas() {
    const canvas = document.getElementById('canvas-hero');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particles = [];
    let animationId;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.color = Math.random() > 0.5 ? '#00d4ff' : '#e94560';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;

            this.opacity += (Math.random() - 0.5) * 0.02;
            this.opacity = Math.max(0.2, Math.min(0.8, this.opacity));
        }

        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.globalAlpha = (1 - distance / 150) * 0.2;
                    ctx.strokeStyle = '#00d4ff';
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(15, 52, 96, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
}

// ==========================================
// Chart Rendering
// ==========================================

function initCapabilityChart() {
    const canvas = document.getElementById('capability-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const data = [
        { year: '2024', openbrain: 1, competitors: 1 },
        { year: '2025-Q1', openbrain: 1.5, competitors: 1.2 },
        { year: '2025-Q2', openbrain: 2.5, competitors: 1.8 },
        { year: '2025-Q3', openbrain: 4, competitors: 2.5 },
        { year: '2025-Q4', openbrain: 6, competitors: 3.5 },
        { year: '2026-Q1', openbrain: 10, competitors: 5 },
        { year: '2026-Q2', openbrain: 16, competitors: 8 },
        { year: '2026-Q3', openbrain: 25, competitors: 12 },
        { year: '2026-Q4', openbrain: 40, competitors: 20 },
        { year: '2027-Q1', openbrain: 64, competitors: 32 },
        { year: '2027-Q2', openbrain: 100, competitors: 50 }
    ];

    const padding = 60;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Find max value
    const maxValue = Math.max(...data.map(d => d.openbrain));

    // Draw grid
    ctx.strokeStyle = 'rgba(26, 47, 79, 0.5)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();

        // Y axis labels
        const value = Math.round((maxValue / 5) * (5 - i));
        ctx.fillStyle = 'rgba(234, 234, 234, 0.6)';
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(value, padding - 15, y + 4);
    }

    // Draw axes
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Draw lines
    const xStep = chartWidth / (data.length - 1);

    // OpenBrain line
    ctx.strokeStyle = '#00d4ff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
        const x = padding + i * xStep;
        const y = canvas.height - padding - (data[i].openbrain / maxValue) * chartHeight;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();

    // Competitors line
    ctx.strokeStyle = '#e94560';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
        const x = padding + i * xStep;
        const y = canvas.height - padding - (data[i].competitors / maxValue) * chartHeight;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw points
    for (let i = 0; i < data.length; i++) {
        const x = padding + i * xStep;

        // OpenBrain points
        const y1 = canvas.height - padding - (data[i].openbrain / maxValue) * chartHeight;
        ctx.fillStyle = '#00d4ff';
        ctx.beginPath();
        ctx.arc(x, y1, 4, 0, Math.PI * 2);
        ctx.fill();

        // Competitors points
        const y2 = canvas.height - padding - (data[i].competitors / maxValue) * chartHeight;
        ctx.fillStyle = '#e94560';
        ctx.beginPath();
        ctx.arc(x, y2, 3, 0, Math.PI * 2);
        ctx.fill();
    }

    // X axis labels (every 2nd point)
    ctx.fillStyle = 'rgba(234, 234, 234, 0.6)';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    for (let i = 0; i < data.length; i += 2) {
        const x = padding + i * xStep;
        ctx.fillText(data[i].year, x, canvas.height - padding + 20);
    }

    // Draw legend
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#00d4ff';
    ctx.fillText('OpenBrain', canvas.width - 200, 30);

    ctx.fillStyle = '#e94560';
    ctx.fillText('Competitors', canvas.width - 200, 50);
}

// ==========================================
// Scroll Animations
// ==========================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.add('scroll-animation');
        observer.observe(item);
    });

    // Observe metric cards
    document.querySelectorAll('.metric-card').forEach(card => {
        card.classList.add('scroll-animation');
        observer.observe(card);
    });

    // Observe impact cards
    document.querySelectorAll('.impact-card').forEach(card => {
        card.classList.add('scroll-animation');
        observer.observe(card);
    });

    // Observe section content
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.add('scroll-animation');
        observer.observe(section);
    });
}

// ==========================================
// Smooth Scroll to Anchor
// ==========================================

function setupSmoothScroll() {
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

// ==========================================
// Parallax Effect
// ==========================================

function setupParallax() {
    let scrollY = 0;

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        
        // Apply parallax to hero
        const hero = document.querySelector('.hero-visualization');
        if (hero) {
            hero.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    });
}

// ==========================================
// Button Interactions
// ==========================================

function setupButtonInteractions() {
    const ctaButton = document.querySelector('.cta-button');
    const learnMoreBtn = document.querySelector('.btn-primary');
    const shareBtn = document.querySelector('.btn-secondary');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            alert('Cảm ơn bạn quan tâm! Hãy theo dõi cho thêm nhiều nội dung.');
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Tương Lai AI 2026',
                    text: 'Khám phá những thay đổi sâu sắc của trí tuệ nhân tạo trong 5 năm tới',
                    url: window.location.href
                });
            } else {
                alert('Chia sẻ: ' + window.location.href);
            }
        });
    }
}

// ==========================================
// Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initHeroCanvas();
    setupScrollAnimations();
    setupSmoothScroll();
    setupParallax();
    setupButtonInteractions();
    
    // Initialize chart after a short delay to ensure canvas is rendered
    setTimeout(() => {
        initCapabilityChart();
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('capability-chart');
    if (canvas) {
        initCapabilityChart();
    }
});
