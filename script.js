// 🔥 ANIME SYSTEM INITIALIZATION
AOS.init({ duration: 1200, once: true });

// 1. THEME TOGGLE SYSTEM (Dark/Light Mode)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
    const isLight = body.dataset.theme === 'light';
    body.dataset.theme = isLight ? 'dark' : 'light';
    themeToggle.textContent = isLight ? '🌙' : '☀️';
});

// 2. ANIME PARTICLE ENGINE (Demon Slayer breathing effects)
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class AnimeParticle {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.hue = Math.random() * 60 + 300; // Purple-blue anime palette
        this.brightness = Math.random() * 30 + 70;
    }
    
    update(mouse) {
        // Movement
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Screen bounce
        if(this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if(this.y > canvas.height || this.y < 0) this.speedY *= -1;
        
        // Mouse repulsion (ninja aura effect)
        if(mouse.x && mouse.y) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.hypot(dx, dy);
            if(distance < 100) {
                this.speedX += (dx / distance) * 0.3;
                this.speedY += (dy / distance) * 0.3;
            }
        }
        
        this.brightness += (Math.random() - 0.5) * 4;
    }
    
    draw() {
        ctx.save();
        ctx.fillStyle = `hsla(${this.hue}, 70%, ${this.brightness}%, 0.6)`;
        ctx.shadowColor = `hsla(${this.hue}, 70%, 50%, 0.5)`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Create particle army (80 chakra orbs)
const particles = [];
for(let i = 0; i < 80; i++) particles.push(new AnimeParticle());

const mouse = { x: 0, y: 0 };
canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animateParticles() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update(mouse);
        particle.draw();
    });
    
    requestAnimationFrame(animateParticles);
}
animateParticles();

// 3. TYPING ANIMATION (Anime title card effect)
const typingElement = document.querySelector('.typing');
const text = typingElement.textContent;
typingElement.textContent = '';

let i = 0;
function typeWriter() {
    if(i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
    }
}
window.addEventListener('load', typeWriter);

// 4. SKILL BAR ANIMATION (Power level reveal)
document.querySelectorAll('.skill-progress').forEach(bar => {
    const width = bar.dataset.width;
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});

// 5. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});