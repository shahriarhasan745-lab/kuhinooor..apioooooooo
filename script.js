// Page Router
function switchPage(index) {
    const pages = document.querySelectorAll('.page-container');
    const buttons = document.querySelectorAll('.nav-btn');

    pages.forEach((page, idx) => {
        page.classList.remove('active');
        if (idx === index) page.classList.add('active');
    });

    buttons.forEach((btn, idx) => {
        btn.classList.remove('active');
        if (idx === index) btn.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Vault Passcode Checker
function checkVault(val) {
    const msg = document.getElementById('secretMsg');
    if (val.toLowerCase().trim() === 'forever') {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }
}

// Playful 'No' button evasion
function moveNoButton() {
    const btnNo = document.getElementById('btnNo');
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

// Proposal Celebration & Falling Rose Petals
function triggerCelebration() {
    startConfetti();
}

// Particle Stardust Engine & Falling Petals
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.7 + 0.2
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 63, 94, ${p.opacity})`;
        ctx.fill();

        p.y -= p.speedY;
        if (p.y < 0) p.y = canvas.height;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

function startConfetti() {
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -10,
            radius: Math.random() * 4 + 2,
            speedY: Math.random() * 3 + 1,
            opacity: 1
        });
    }
}
