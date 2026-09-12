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

const compliments = [
    "Your presence makes every ordinary day feel like an award-winning cinematic experience.",
    "The way you carry yourself sets a peerless standard of elegance and quiet confidence.",
    "A smile that brightens up even the gloomiest of afternoons effortlessly.",
    "Out of all the aesthetics in this world, my absolute favorite view is you, Apu."
];

function generateCompliment() {
    const box = document.getElementById('complimentBox');
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    box.textContent = `"${random}"`;
}

function checkVault(val) {
    const msg = document.getElementById('secretMsg');
    if (val.toLowerCase().trim() === 'forever') {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }
}

function moveNoButton() {
    const btnNo = document.getElementById('btnNo');
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 90 - 45;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

// 🌹 Live Rose Petals & Floating Hearts Animation Engine
const canvas = document.getElementById('luxuryCanvas');
const ctx = canvas.getContext('2d');
let elements = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Initial Batch of Rose Petals and Hearts
for (let i = 0; i < 40; i++) {
    elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 12 + 8,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.sin(i) * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
        type: Math.random() > 0.5 ? 'petal' : 'heart',
        opacity: Math.random() * 0.7 + 0.3
    });
}

function animateLuxuryCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach(el => {
        ctx.save();
        ctx.translate(el.x, el.y);
        ctx.rotate((el.rotation * Math.PI) / 180);
        ctx.globalAlpha = el.opacity;

        if (el.type === 'heart') {
            // Draw Floating Love Heart
            ctx.fillStyle = '#f43f5e';
            ctx.beginPath();
            let s = el.size * 0.08;
            ctx.moveTo(0, s * 3);
            ctx.bezierCurveTo(-s * 5, -s * 2, -s * 10, s * 2, 0, s * 8);
            ctx.bezierCurveTo(s * 10, s * 2, s * 5, -s * 2, 0, s * 3);
            ctx.fill();
        } else {
            // Draw Soft Rose Petal
            ctx.fillStyle = '#fb7185';
            ctx.beginPath();
            ctx.ellipse(0, 0, el.size * 0.6, el.size * 0.3, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();

        // Movement physics
        el.y -= el.speedY;
        el.x += Math.sin(el.y * 0.02) * 0.5 + el.speedX;
        el.rotation += el.rotationSpeed;

        // Reset position when it goes off screen
        if (el.y < -20) {
            el.y = canvas.height + 20;
            el.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animateLuxuryCanvas);
}
animateLuxuryCanvas();

function triggerHeavyCelebration() {
    for (let i = 0; i < 80; i++) {
        elements.push({
            x: Math.random() * canvas.width,
            y: canvas.height + 20,
            size: Math.random() * 16 + 10,
            speedY: Math.random() * 2.5 + 1,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 4 - 2,
            type: Math.random() > 0.4 ? 'heart' : 'petal',
            opacity: 1
        });
    }
}
