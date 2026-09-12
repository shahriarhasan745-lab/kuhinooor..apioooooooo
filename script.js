// Modular Gallery Data inspired by the user's high-end aesthetic preferences & references[cite: 6]
const galleryData = [
    {
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
        quote: "Are you a Wi-Fi signal? Because I’m feeling an absolute connection whenever you're near."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85",
        quote: "Is your name Google? Because you have everything I’ve been searching for all this time."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
        quote: "Do you have a map? I keep getting completely lost in your effortless grace."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85",
        quote: "They say beauty is in the eye of the beholder, but clearly, they haven't seen your smile yet."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
        quote: "Time stops whenever you enter the room, and honestly, I'm not complaining about the delay."
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
        quote: "Must be illegal to look this stunning without even trying. Do you need a defense attorney?"
    }
];

// Render Gallery Cards Dynamically with Robust Error Handling & Lazy Loading[cite: 6]
const galleryGrid = document.getElementById('galleryGrid');

function renderGallery() {
    galleryGrid.innerHTML = galleryData.map((item, index) => `
        <article class="gallery-card" data-index="${index}">
            <div class="image-wrapper">
                <img src="${item.imageUrl}" alt="Aesthetic Portrait ${index + 1}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85'">
                <div class="image-overlay">
                    <span class="quote-badge">✦ Signature Whisper</span>
                    <p class="quote-text">"${item.quote}"</p>
                </div>
            </div>
        </article>
    `).join('');
}

// Cinematic Entry Loader Handling[cite: 6]
window.addEventListener('load', () => {
    renderGallery();
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('fade-out');
        initScrollObserver();
        init3DTiltEffects();
    }, 800);
});

// Intersection Observer for Smooth Scroll-Triggered Reveal Animations[cite: 6]
function initScrollObserver() {
    const cards = document.querySelectorAll('.gallery-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Stagger the animation delay based on card index[cite: 6]
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, idx * 100);
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
}

// 3D Tilt Hover Dynamics for High-End Interactivity[cite: 6]
function init3DTiltEffects() {
    const cards = document.querySelectorAll('.gallery-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within card[cite: 6]
            const y = e.clientY - rect.top;  // y position within card[cite: 6]

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -((y - centerY) / centerY) * 8; // Max 8 deg tilt[cite: 6]
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.01)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
            card.style.transition = 'transform 0.6s var(--transition-smooth)';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
}
