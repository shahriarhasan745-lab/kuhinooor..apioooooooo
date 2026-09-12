// Generate background stars dynamically
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 45; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.animationDelay = Math.random() * 2 + 's';
    starsContainer.appendChild(star);
}

// Playful 'No' button escape trick
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = (Math.random() - 0.5) * 180;
    const y = (Math.random() - 0.5) * 80;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Handle 'Yes' click event
function handleYes() {
    document.getElementById('mainCard').style.display = 'none';
    document.getElementById('successScreen').style.display = 'block';
}
