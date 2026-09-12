// Gallery Data mapping exact images with witty English flirting quotes
const galleryData = [
    { img: "Screenshot 2026-09-12 103349.png", quote: "Are you a Wi-Fi signal? Because I’m feeling an absolute connection whenever you're near." },
    { img: "Screenshot 2026-09-12 103408.png", quote: "Is your name Google? Because you have everything I’ve been searching for all this time." },
    { img: "Screenshot 2026-09-12 103425.png", quote: "Do you have a map? I keep getting completely lost in your effortless grace." },
    { img: "Screenshot 2026-09-12 103434.png", quote: "They say beauty is in the eye of the beholder, but clearly, they haven't seen your walk yet." },
    { img: "Screenshot 2026-09-12 103446.png", quote: "Time stops whenever you enter the room, and honestly, I'm not complaining about the delay." },
    { img: "Screenshot 2026-09-12 103455.png", quote: "Must be illegal to look this stunning without even trying. Do you need a defense attorney?" },
    { img: "Screenshot 2026-09-12 103508.png", quote: "Are you a rooftop garden? Because my heart blooms every time you're around." },
    { img: "Screenshot 2026-09-12 103521.png", quote: "Is it sunny outside or did you just step into the room?" },
    { img: "Screenshot 2026-09-12 103539.png", quote: "Even vintage jeeps look pale next to your timeless aesthetic." }
];

// Render Gallery
const galleryGrid = document.getElementById('galleryGrid');
galleryGrid.innerHTML = galleryData.map((item, idx) => `
    <article class="gallery-card">
        <div class="card-img-wrapper">
            <img src="${item.img}" alt="The Muse Gallery ${idx + 1}" loading="lazy">
            <div class="card-content">
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent-pink); margin-bottom: 6px;">✦ Signature Whisper</span>
                <p class="card-quote">"${item.quote}"</p>
            </div>
        </div>
    </article>
`).join('');

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

// Soundscape Controller
function toggleSound(el, name) {
    document.querySelectorAll('.sound-card').forEach(card => card.classList.remove('playing'));
    el.classList.add('playing');
}

// Vibe Quiz Progressive Handler
const quizQuestions = [
    "Where do you look absolute most breathtaking?",
    "What is our ultimate shared aesthetic?",
    "Are you ready for the final question?"
];
let currentQ = 0;
function nextQuiz(opt) {
    currentQ++;
    if (currentQ < quizQuestions.length) {
        document.getElementById('quizQ').innerText = quizQuestions[currentQ];
    } else {
        switchPage(8); // Go to final proposal
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
    document.getElementById('celebrationModal').style.display = 'flex';
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
    ctx.fillStyle = "rgba(244, 63, 94, 0.6)";
    
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
